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


# Exercise 5
def calculate_ink_price_and_quantity(square_meters):
    can_price = 80
    liters = square_meters // 3
    can_quantity = liters % 18
    return can_quantity, can_price * can_quantity


# Exercise 6
def triangle_solver(side1, side2, side3):
    is_triangule = (
      side1 + side2 > side3 or
      side2 + side3 > side1 or
      side3 + side1 > side2
    )

    if not is_triangule:
        return 'não é triangulo'
    elif side1 == side2 == side3:
        return 'Triângulo Equilátero: três lados iguais;'
    elif side1 == side2 or side1 == side3:
        return 'Triângulo Isósceles: quaisquer dois lados iguais;'
    else:
        return 'Triângulo Escaleno: três lados diferentes.'
