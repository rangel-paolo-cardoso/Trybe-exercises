from exercise3 import validate_email


def validate_emails(email_list):
    valida_emails = []
    try:
        for email in email_list:
            if validate_email(email) == None:
                valida_emails.append(email)
    except Exception:
        return "Algo de errado aconteceu! Verifique o formato da lista de email."
    else:
        return valida_emails


# print(validate_emails(
#     ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]
# ))
# print(validate_emails(
#     0
# ))
