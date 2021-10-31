def asterisk_pyramid(n):
    for row in list(range(n)):
        print("*" * (row + 1))
    return


print(asterisk_pyramid(5))
