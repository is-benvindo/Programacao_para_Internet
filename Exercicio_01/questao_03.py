import requests 

imagem = input('Digite a URL da imagem desejada: ')
response = requests.get(imagem)

if response.status_code == 200:
    binary_data = response.content
    
    with open('imagem.png', 'wb') as file:
        file.write(binary_data)
        print('Imagem salva!')
        
else:
    print('Erro ao baixar imagem')