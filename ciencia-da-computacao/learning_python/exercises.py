from math import ceil


# Exercise 1
def largest_number(number_1, number_2):
    return number_1 if number_1 > number_2 else number_2


print("=" * 5, "Exercise 1", "=" * 5)
print(f"Largest number test 1: {largest_number(5, 10)}")
print(f"Largest number test 2: {largest_number(20, 10)}")
print()


# Exercise 2
def arithmeric_average(list):
    return sum(list) / len(list)


print("=" * 5, "Exercise 2", "=" * 5)
list1 = [1, 2, 3, 4, 5]
list2 = [5, 14, 16]
print(f"List average 1: {arithmeric_average(list1)}")  # Expected = 3.0
print(f"List average 2: {arithmeric_average(list2)}")  # Expected = 11.6...
print()


# Exercise 3
def asteristic_square(n):
    for number in range(n):
        print("*" * n)


print("=" * 5, "Exercise 3", "=" * 5)
asteristic_square(5)
print()


# Exercise 4
def longest_name(name_list):
    big_name = name_list[0]
    for name in name_list:
        if len(name) > len(big_name):
            big_name = name
    return big_name


print("=" * 5, "Exercise 4", "=" * 5)
name_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print(longest_name(name_list))
print()


# Exercise 5
def calculate_amount_of_paint(wall_size):
    can_volume = 18
    can_price = 80.0
    can_quantity = ceil(wall_size / (can_volume * 3))
    total_price = can_quantity * can_price
    return (can_quantity, total_price)


print("=" * 5, "Exercise 5", "=" * 5)
wall_size = int(input("Enter the wall size in square meters: "))
print(
    f"The amount of paint need for a wall of {wall_size}",
    f"square meter is {calculate_amount_of_paint(wall_size)}"
)
print()


# Exercise 6
def define_triangle_type(side_1, side_2, side_3):
    triangle = (
        side_1 + side_2 > side_3 and
        side_2 + side_3 > side_1 and
        side_3 + side_1 > side_2
    )
    if not triangle:
        return "That's not a triangle"
    elif side_1 == side_2 == side_3:
        return "equilateral"
    elif side_1 == side_2 or side_2 == side_3 or side_3 == side_1:
        return "isosceles"
    else:
        return "scalene"


print("=" * 5, "Exercise 6", "=" * 5)
side_1 = float(input("Enter the first side of a triangle: "))
side_2 = float(input("Enter the second side of a triangle: "))
side_3 = float(input("Enter the third side of a triangle: "))
print(f"{define_triangle_type(side_1, side_2, side_3)}")
print()


# Exercise Bonus 1
def minimum_value_1(list):
    minimum = list[0]
    position = 0
    while position < len(list):
        if (list[position] < minimum):
            minimum = list[position]
        position += 1
    return minimum


def minimum_value_2(list):
    return min(list)


print("=" * 5, "Exercise Bonus 1", "=" * 5)
list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
print(f"Minimum value of the list is {minimum_value_1(list)}")
print(f"Minimum value of the list is {minimum_value_2(list)}")
print()


# Exercise Bonus 2
def asteristc_triangle_rectangle(n):
    counter = 1
    for current in range(n):
        print("*" * counter)
        counter += 1
    return


print("=" * 5, "Exercise Bonus 2", "=" * 5)
n = int(input("Enter a number greather than zero: "))
asteristc_triangle_rectangle(n)
print()


# Exercise Bonus 3
def summation_1(n):
    sum = 0
    for count in range(1, n + 1):
        sum += count
    return sum


def summation_2(n):
    return sum(range(1, n + 1))


print("=" * 5, "Exercise Bonus 3", "=" * 5)
n = int(input("Enter a number greather than zero: "))
print(f"Summation_1: {summation_1(n)}")
print(f"Summation_2: {summation_2(n)}")
print()
