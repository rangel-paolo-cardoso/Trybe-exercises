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
            print("*", end="")
        print()


# Exercise 4
def the_most_long_name(names):
    most_long = names[0]
    for name in names:
        if len(name) > len(most_long):
            most_long = name
    return most_long


# Exercise 5
def calculate_ink_price_and_quantity(square_meters):
    can_price = 80
    liters = square_meters // 3
    can_quantity = liters % 18
    return can_quantity, can_price * can_quantity


# Exercise 6
def triangle_solver(side1, side2, side3):
    is_triangule = (
        side1 + side2 > side3 or side2 + side3 > side1 or side3 + side1 > side2
    )

    if not is_triangule:
        return "não é triangulo"
    elif side1 == side2 == side3:
        return "Triângulo Equilátero: três lados iguais;"
    elif side1 == side2 or side1 == side3:
        return "Triângulo Isósceles: quaisquer dois lados iguais;"
    else:
        return "Triângulo Escaleno: três lados diferentes."


# Bonus 1
def the_smallest(numbers):
    smallest = numbers[0]
    for number in numbers:
        if number < smallest:
            smallest = number
    return smallest


# Bonus 2
def asterisk_tree(n):
    for row in range(1, n + 1):
        for col in range(1, row + 1):
            print("*", end="")
        print()


# Bonus 3
def summation(n):
    sum = 0
    for i in range(1, n + 1):
        sum += i
    return sum


# Bonus 3
def gasoline_sell(liters, fuel_type):
    price, discount, total = 0, 0, 0
    if fuel_type == 'A':
        price = 1.9
        discount = 0.05
        if liters < 21:
            discount = 0.03
    elif fuel_type == 'G':
        price = 2.5
        discount = 0.06
        if liters < 21:
            discount = 0.04
    total += price * liters
    return total - total * discount
