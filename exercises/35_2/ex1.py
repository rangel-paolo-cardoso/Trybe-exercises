nome = input("Digite seu nome: ")

for position in range(len(nome), 0, -1):
    print(nome[:position])
