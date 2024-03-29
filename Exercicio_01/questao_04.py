#pip install beautifulsoup4
from bs4 import BeautifulSoup
import requests 

url = input('Digite a URL desejada: ')

response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

links = soup.find_all('a')

for link in links: 
   print(link.get('href'))