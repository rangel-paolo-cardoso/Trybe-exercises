from random import randint
from random import sample

animals_list = []
with open("animals.txt", "r") as file:
    animals = file.readlines()
    for word in animals:
        animals_list.append(word[:-1])

selected_word = animals_list[randint(0, len(animals_list) - 1)]

scrambled_word = "".join(sample(selected_word, len(selected_word)))

print("The scrambled word is:", scrambled_word)

attempts = 3
while attempts > 0:
    guess = input("What is your guess? ")
    if (guess == selected_word):
        print("You won!")
        print(f"The word was {selected_word}.")
        break
    else:
        print("It's wrong! Try again.")
    attempts -= 1

print("End.")
