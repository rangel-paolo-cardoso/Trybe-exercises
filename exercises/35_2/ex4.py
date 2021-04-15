from json import load
from csv import writer

with open("books.json") as file:
    books = load(file)
    categories = {}

    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1

with open("books_average_by_category.csv", "w") as file:
    my_writer = writer(file)

    header = ["Categoria", "Porcentagem"]
    my_writer.writerow(header)
    for item in categories.items():
        if (item[0]):
            row = [item[0], f"{round(item[1] / len(books) * 100, 2)}%"]
            my_writer.writerow(row)
