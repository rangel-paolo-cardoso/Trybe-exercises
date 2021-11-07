from random import sample, randint

with open("words.txt") as file:
    word_list = []
    for word_of_list in file:
        word_list.append(word_of_list[:-1])

word = word_list[randint(0, len(word_list) - 1)]
scrambled_word = "".join(sample(word, len(word)))
print(f"A palavra embaralada é {scrambled_word}")

attempts = 3
while attempts > 0:
    guess = input("Adivinhe a palavra: ")
    attempts -= 1
    if guess == word:
        print("Você acertou!")
        break

print(f"A palavra era {word}")
