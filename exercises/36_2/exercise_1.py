class TV():
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False
    
    def aumentar_volume(self):
        if (self.__volume < 99):
            self.__volume += 1

    def diminuir_volume(self):
        if (self.__volume > 0):
            self.__volume -= 1

    def modificar_canal(self, canal):
        if (1 <= canal <= 99):
            self.__canal = canal
        else:
            raise ValueError

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    # def show_channel(self):
    #     print(self.__canal)


# tv = TV(50)
# tv.ligar_desligar()
# for number in range(51):
#     tv.diminuir_volume()
# tv.modificar_canal(0)
# tv.show_channel()