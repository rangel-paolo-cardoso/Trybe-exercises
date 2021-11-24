from abc import ABC, abstractmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(cls, message):
        raise NotADirectoryError


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, message):
        with open("log.txt", mode="a") as arquivo:
            print(message, file=arquivo)


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, message):
        print(message)


class Log:
    def __init__(self, manipuladores):
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, message):
        self.__log("INFO", message)

    def alerta(self, message):
        self.__log("ALERTA", message)

    def erro(self, message):
        self.__log("ERRO", message)

    def debug(self, message):
        self.__log("DEBUG", message)

    def __log(self, nivel, message):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, message))

    def __formatar(self, nivel, message):
        data = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f"[{nivel} - {data}]: {message}"


logger = Log({LogEmArquivo, LogEmTela})
print(logger.erro("Hello"))
