# exercício 1
def maior_numero(number_1, number_2):
    if number_1 > number_2:
        return number_1
    return number_2


def arithmetic_average(numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum / len(numbers)
