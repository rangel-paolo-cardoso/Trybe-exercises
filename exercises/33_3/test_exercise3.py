from exercise3 import validate_email


def test_validate_email_if_the_function_validates_it_correctly():
    base_email = "nomeusuario@nomewebsite.com"

    # Emails for test
    user_name_non_start_with_letter = "7nomeusuario@nomewebsite.com"
    user_name_invalid_char = "nome&suario@nomewebsite.com"
    website_name_invalid = "nomesuario@nomewebsite_.com"
    extension_invalid = "nomesuario@nomewebsite.com_"

    # Error messages
    user_name_invalid_message = "Nome de usuário inválido!"
    website_name_invalid_message = "Nome de website inválido!"
    extension_invalid_message = "O tamanho máximo da extensão é de 3 caracteres!"

    assert validate_email(base_email) == None

    assert validate_email(
        user_name_non_start_with_letter) == user_name_invalid_message

    assert validate_email(user_name_invalid_char) == user_name_invalid_message

    assert validate_email(website_name_invalid) == website_name_invalid_message
