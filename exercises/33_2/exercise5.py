import json
from random import choice

with open("pokemons.json", mode="r") as file:
    pokemons = json.load(file)["pokemon"]
    chose_pokemon = choice(pokemons)["name"]

wrong_answers = 0
pokemon_name_letter_position = 0
while True:
    print("Qual é o nome do pokemon?")
    print(
        f"-> {chose_pokemon[:pokemon_name_letter_position]}",
        "_" * (len(chose_pokemon) - pokemon_name_letter_position),
        end="\n",
        sep="",
    )

    guess = input("Digite o nome do pokemon: ")
    if guess == chose_pokemon:
        print("Você acertou! Muito bom!")
        break

    wrong_answers += 1
    pokemon_name_letter_position += 1

    if pokemon_name_letter_position == len(chose_pokemon):
        print("Você perdeu!")
        break

print("Resultado final")
print(f"Total de erros: {wrong_answers}")
