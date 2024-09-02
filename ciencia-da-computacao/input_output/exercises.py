from random import sample
from random import choice

# Exercise 1
def inverted_name(name):
    for removed_letters in range(len(name)):
        for index in range(len(name) - removed_letters):
            print(name[index], end="")
        print()


print("=" * 5, "Exercise 1", "=" * 5)
print(f"Inverted name: {inverted_name('RANGEL')}")
print()


# Exercise 2
def scrambled_word_game():
    word = choice(["water", "towel", "computer", "driver", "cable"])
    scrambled_word = "".join(sample(word, len(word)))
    attempts = 0
    won = False
    while True:
        print(f"The scrambled word is: {scrambled_word}")
        guess = input("Enter your guess: ")
        won = True if guess == word else False
        attempts += 1
        if won or attempts == 3:
            break
    print(f"The scrambled word was {scrambled_word}")
    print(f"You {'Won' if won else 'Lose'}")


print("=" * 5, "Exercise 2", "=" * 5)
scrambled_word_game()
print()
