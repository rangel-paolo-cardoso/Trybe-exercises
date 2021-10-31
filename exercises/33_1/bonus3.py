def summation(n):
    sum = 0
    for number in list(range(n)):
        sum += number + 1
    return sum


print(summation(5))
