def validate_user_name(user_name):
    is_user_name_valid = True
    if not user_name[0].isalpha():
        return False
    for char in user_name:
        if (not char.isdigit()) and (not char.isalpha()) and char != "-" and char != "_":
            is_user_name_valid = False
            break
    return is_user_name_valid


def validate_website(website_name):
    is_website_valid = True
    for char in website_name:
        if (not char.isdigit()) and (not char.isalpha()):
            is_website_valid = False
            break
    return is_website_valid


def validate_email(email):
    try:
        user_name = email.split("@")[0]
        website_name = email.split(".")[0].split("@")[1]
        extension = email.split(".")[1]

        if not validate_user_name(user_name):
            return "Nome de usuário inválido!"
        if not validate_website(website_name):
            return "Nome de website inválido!"
        if len(extension) > 3:
            return "O tamanho máximo da extensão é de 3 caracteres!"
    except IndexError:
        return "String inserida não é um email!"
    return


print(validate_email("nomesuario@nomewebste.com"))
