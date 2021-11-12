telephone_strutcture = {
    "ABC": 2,
    "DEF": 3,
    "GHI": 4,
    "JKL": 5,
    "MNO": 6,
    "PQRS": 7,
    "TUV": 8,
    "WXYZ": 9,
}


def telephone_letters(expression):
    converted_expression = ""
    if len(expression) == 0:
        return "Expressão vazia!"
    if len(expression) > 30:
        return "Expressão com mais de 30 caracteres!"
    for symbol in expression:
        if symbol == "1" or symbol == "0":
            converted_expression += symbol
        elif symbol == "-":
            converted_expression += "-"
        else:
            for key in telephone_strutcture.keys():
                if symbol in key:
                    converted_expression += str(telephone_strutcture[key])
    return converted_expression


# print(telephone_letters("MY-MISERABLE-JOB"))
