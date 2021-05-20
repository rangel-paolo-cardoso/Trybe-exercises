def generate_list_until_a_certain_number(n):
    list_of_numbers_and_exceptions = []
    for number in range(1, n + 1):
        if (number % 3 == 0 and number % 5 == 0):
            list_of_numbers_and_exceptions.append('FizzBuzz')
        elif (number % 3 == 0):
            list_of_numbers_and_exceptions.append('Fizz')
        elif (number % 5 == 0):
            list_of_numbers_and_exceptions.append('Buzz')        
        else:
          list_of_numbers_and_exceptions.append(number)
    return list_of_numbers_and_exceptions

print(generate_list_until_a_certain_number(15))
