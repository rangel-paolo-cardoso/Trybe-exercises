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


def asteristic_square(n):
    for number in range(n):
        print("*" * n)


print("=" * 5, "Exercise 3", "=" * 5)
asteristic_square(5)
print()


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
