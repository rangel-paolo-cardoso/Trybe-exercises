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
