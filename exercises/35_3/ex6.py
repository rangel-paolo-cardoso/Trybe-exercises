from pymongo import MongoClient

category = input("Type the name of the category: ")

with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])
