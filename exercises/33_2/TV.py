class TV:
    def __init__(self, tamanho):
        self.__volume = 1
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, novo_canal):
        if 1 <= novo_canal <= 99:
            self.__canal = novo_canal
        else:
            raise ValueError("Valor fora dos limites")

    def ligar_desligar(self):
        self.ligada = not self.ligada
