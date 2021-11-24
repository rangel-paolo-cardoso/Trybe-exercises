from operator import attrgetter


class Hospede:
    def __init__(self, nome, cpf):
        self.nome = nome
        self.cpf = cpf


class Hotel:
    def __init__(self, nome, quartos, reservas):
        self.nome = nome
        self.quartos = quartos
        self.reservas = reservas

    def check_in(self, *hospedes):
        try:
            quarto = self.quartos_disponiveis(len(hospedes))[0]
        except IndexError:
            raise IndexError(
                "Não há quartos disponíveis para essa quantidade de hospedes"
            )
        else:
            quarto.reservado = True
            for hospede in hospedes:
                self.reservas.append(Reserva(quarto, hospede))

    def check_out(self, quarto):
        quarto.reservado = False
        self.reservas = [
          reserva
          for reserva in self.reservas
          if reserva.quarto != quarto
        ]

    def quartos_disponiveis(self, qtd_hospedes):
        return sorted(
            [
                quarto
                for quarto in self.quartos
                if not quarto.reservado
                and qtd_hospedes <= quarto.quantidade_de_hospedes
            ],
            key=attrgetter("quantidade_de_hospedes"),
        )


class Quarto:
    def __init__(self, numero, andar, quantidade_de_hospedes, preco):
        self.numero = numero
        self.andar = andar
        self.quantidade_de_hospedes = quantidade_de_hospedes
        self.preco = preco
        self.reservado = False


class Reserva:
    def __init__(self, quarto, hospede):
        self.quarto = quarto
        self.hospede = hospede


# eu = Hospede("Rangel", "42200221822")
# alfredo = Hospede("Alfredo", "52200221822")
# felicia = Hospede("Felicia", "62200221822")
# jadison = Hospede("Jadison", "72200221822")

# quarto_1 = Quarto(1, 1, 2, 700)
# quarto_2 = Quarto(2, 1, 2, 650.8)
# quarto_3 = Quarto(3, 1, 4, 730.4)
# quarto_4 = Quarto(4, 2, 1, 900.9)

# reserva_1 = Reserva(quarto_1, alfredo)
# reserva_2 = Reserva(quarto_2, felicia)
# reserva_3 = Reserva(quarto_3, jadison)

# quartos = [quarto_1, quarto_2, quarto_3, quarto_4]
# reservas = [reserva_1, reserva_2, reserva_3]

# hotel = Hotel("FarFra", quartos, reservas)
# hotel.check_in(eu)
# print("")
