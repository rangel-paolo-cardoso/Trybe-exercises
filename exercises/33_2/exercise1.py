nome = input("Digitel um nome: ")
letter_position = len(nome)

while letter_position > 0:
    print(nome[:letter_position])
    letter_position -= 1
