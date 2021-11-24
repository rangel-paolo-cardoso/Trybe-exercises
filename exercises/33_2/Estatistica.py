from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, number_list):
        return sum(number_list) / len(number_list)

    @classmethod
    def mediana(cls, number_list):
        number_list.sort()
        index = len(number_list) // 2
        if len(number_list) % 2 == 0:
            return (number_list[index - 1] + number_list[index - 1]) / 2
        return number_list[index]

    @classmethod
    def moda(cls, number_list):
        return Counter(number_list).most_common()[0][0]


statis = Estatistica()
number_list = [1, 2, 3, 3, 4, 5]
print(statis.moda(number_list))
