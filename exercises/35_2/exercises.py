# exercise 1
def vertical_name_stairs():
    name = input('Type your name: ')
    for counter in range(len(name)):
        for letter in range(len(name) - counter):
            print(name[letter], end="")
        print()


print(vertical_name_stairs())
