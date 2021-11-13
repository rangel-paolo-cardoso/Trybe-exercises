import pytest
from exercise4 import validate_emails


def test_validate_email_verifying_correct_functionality():
    emails_list = [
        "nome@dominio.com",
        "errad#@dominio.com",
        "outro@dominio.com"
    ]
    correct_answer = ["nome@dominio.com", "outro@dominio.com"]
    error_message = "Algo de errado aconteceu! Verifique o formato da lista de email."

    assert validate_emails(emails_list) == correct_answer

    assert validate_emails(0) == error_message
