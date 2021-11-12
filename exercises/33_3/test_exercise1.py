from exercise1 import list_generator


def test_list_generator_return_fizz_when_number_is_divisible_by_three():
    exemple_list_with_three = [1, 2, "Fizz"]
    exemple_list_with_five = [1, 2, "Fizz", 4, "Buzz"]
    exemple_list_with_three_and_five = [
        1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"
    ]
    assert list_generator(3) == exemple_list_with_three
    assert list_generator(5) == exemple_list_with_five
    assert list_generator(15) == exemple_list_with_three_and_five


# def test_list_generator_return_buzz_when_number_is_divisible_by_five():
#   exemple_list = [1, 2, "Fizz"]
