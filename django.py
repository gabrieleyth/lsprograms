# Importing necessary libraries
try:
    import time
    import requests
    from bs4 import BeautifulSoup
    from wordcloud import WordCloud
    import advertools as adv
    import matplotlib
    matplotlib.use('agg') # to save the plot without opening a window
    import matplotlib.pyplot as plt
    from selenium import webdriver
    from selenium.webdriver.chrome.service import Service
except ImportError as e:
    print(f"Failed to import: {e}. Please make sure the necessary libraries are installed.")

# Installing and setting up Chrome Driver
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
service = Service('C:\\Users\\*****\\Desktop\\chromedriver.exe')
driver = webdriver.Chrome(service=service, options=chrome_options)
driver.get('')
position_num = 10

# Loading webpage by scrolling down with JavaScript
previous_height = driver.execute_script('return document.body.scrollHeight')
while True:
    driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')
    time.sleep(1)
    new_height = driver.execute_script('return document.body.scrollHeight')
    if new_height == previous_height:
        break
    previous_height = new_height

# Scraping job postings' links
lnks = driver.find_elements_by_class_name('base-card__full-link')
links_list = []
for lnk in lnks[:position_num]:
    link_str = lnk.get_attribute('href')
    links_list.append(link_str)
driver.quit()

# Parsing and scraping each job posting
time.sleep(1)
words_str = ''
try:
    for link in links_list:
        req = requests.get(link)
        req = req.text
        soup = BeautifulSoup(req, 'lxml')
        markup = soup.find('div', class_="show-more-less-html__markup").text
        words_str = f'{words_str} {markup}'.lower()
        time.sleep(1)
except Exception as e:
    pass

# Plotting word cloud
stopwords = set(adv.stopwords['english']) | set(adv.stopwords['french'])
wc = WordCloud(width=800, height=400, stopwords=stopwords, background_color='white', colormap='gray').generate(words_str)
plt.figure(figsize=(12, 6))
plt.imshow(wc, interpolation='bilinear')
plt.axis('off')
plt.savefig('wordcloud.png')
