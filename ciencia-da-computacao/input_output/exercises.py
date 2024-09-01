# Exercise 1
def inverted_name(name):
    name_length = len(name)
    # print("name_length", name_length)
    for row in range(0, name_length):
        # print("name_length", name_length)
        for letter in range(name_length, name_length - 1, -1):
            print(name[:name_length])
        name_length -= 1


print("=" * 5, "Exercise 1", "=" * 5)
print(f"Inverted name: {inverted_name('PEDRO')}")
print(f"Inverted name: {inverted_name('RANGEL')}")
print()
