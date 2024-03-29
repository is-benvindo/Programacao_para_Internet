import requests
from bs4 import BeautifulSoup
from collections import deque

def ocorrencias(url, palavra_chave):
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        texto_pagina = soup.get_text()
        
        palavras = texto_pagina.split()
        
        historico = deque(maxlen=10)
        
        for i, palavra in enumerate(palavras):
            if palavra_chave.lower() in palavra.lower():
                inicio = max(0, i - 10)
                fim = min(len(palavras), i + 11)
                contexto = palavras[inicio:fim]
                
                historico.append(contexto)
                
                print(f'Ocorrência na posição {i + 1}: {" ".join(contexto)}')
        
    except requests.exceptions.RequestsException as e:
        print('Erro na solicitação HTTP')

url = input('Digite a URL desejada: ')
palavra_chave = input('Digite a palavra desejada: ')

ocorrencias(url, palavra_chave)