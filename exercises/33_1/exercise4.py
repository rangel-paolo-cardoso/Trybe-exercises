def longest_name_on_list(names_list):
    longest_name = names_list[0]
    for name in names_list:
        if len(name) > len(longest_name):
            longest_name = name
    return longest_name


print(
    longest_name_on_list(
        ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
    )
)
