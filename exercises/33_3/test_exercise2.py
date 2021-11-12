from exercise2 import telephone_letters


def test_telephone_letters_when_given_a_string_return_a_certain_set_of_numbers():
    given_first_test_string = "1-HOME-SWEET-HOME"
    first_correct_returning_answer = "1-4663-79338-4663"

    given_second_test_string = "MY-MISERABLE-JOB"
    second_correct_returning_answer = "69-647372253-562"

    empty_string = ""
    answer_of_empty_string = "Expressão vazia!"

    thirty_char_length = "1-4663-79338-4663-0985-32568-0923"
    answer_for_thirty_char = "Expressão com mais de 30 caracteres!"

    assert telephone_letters(
        given_first_test_string
    ) == first_correct_returning_answer

    assert telephone_letters(
        given_second_test_string
    ) == second_correct_returning_answer

    assert telephone_letters(empty_string) == answer_of_empty_string

    assert telephone_letters(thirty_char_length) == answer_for_thirty_char
