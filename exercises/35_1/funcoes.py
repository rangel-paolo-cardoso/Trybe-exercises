# Exercise 1
def maior_numero(number_1, number_2):
    if number_1 > number_2:
        return number_1
    return number_2


# Exercise 2
def arithmetic_average(numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum / len(numbers)


# Exercise 3
def asterisk_square(n):
    for row in range(5):
        for column in range(5):
            print('*', end='')
        print()


# Exercise 4
def the_most_long_name(names):
    most_long = names[0]
    for name in names:
        if len(name) > len(most_long):
            most_long = name
    return most_long
