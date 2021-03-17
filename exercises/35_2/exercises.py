import random


# exercise 1
def vertical_name_stairs():
    name = input('Type your name: ')
    for counter in range(len(name)):
        for letter in range(len(name) - counter):
            print(name[letter], end="")
        print()


# exercise 2
WORD_LIST = ['macaco', 'cinema', 'groselha']


def show_scrambled_word():
    secret_word = random.choice(WORD_LIST)
    scrambled_word = ''.join(random.sample(secret_word, len(secret_word)))
    print('What is this word?', scrambled_word)


def guess_the_word():
    attempts = 3
    show_scrambled_word()
    while attempts > 0:
        choice = input('Type your guess: ')
        if choice in WORD_LIST:
            return 'You won! :-)'
        attempts -= 1
    return 'You lose'


# exercise 3
with open('animals.txt', 'r') as file:
    NEW_WORD_LIST = file.read()


def show_scrambled_word_two():
    secret_word = random.choice(NEW_WORD_LIST)
    scrambled_word = ''.join(random.sample(secret_word, len(secret_word)))
    print('What is this word?', scrambled_word)


def guess_the_word_with_file():
    attempts = 3
    show_scrambled_word_two()
    while attempts > 0:
        choice = input('Type your guess: ')
        if choice in NEW_WORD_LIST:
            return 'You won! :-)'
        attempts -= 1
    return 'You lose'


print(guess_the_word_with_file())
