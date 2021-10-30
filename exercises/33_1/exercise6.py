def triangle_description(side1, side2, side3):
    if (
        not side1 + side2 > side3
        or not side2 + side3 > side1
        or not side3 + side1 > side2
    ):
        return "Não é um triângulo!"
    if side1 == side2 == side3:
        return "Triângulo equilátero."
    elif side1 == side2 or side1 == side3:
        return "Triângulo isósceles."
    else:
        return "Triângulo escaleno."


print(triangle_description(5, 3, 2))
