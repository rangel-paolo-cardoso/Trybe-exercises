import json
import csv

with open("books.json", mode="r") as file:
    books = json.load(file)
    categories = {}
    for book in books:
        for category in book["categories"]:
            if category not in categories:
                categories[category] = 0
            categories[category] += 1

    for category, evidence_number in categories.items():
        categories[category] = evidence_number / len(books)

with open("report_categories.csv", mode="w") as file:
    writer = csv.writer(file)

    headers = [
      "categoria",
      "porcentagem",
    ]
    writer.writerow(headers)

    for category, evidence_percentage in categories.items():
        row = [category, evidence_percentage]
        writer.writerow(row)
