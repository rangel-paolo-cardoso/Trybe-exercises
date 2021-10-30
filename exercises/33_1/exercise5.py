from math import ceil


def painting_cost(square_meters):
    can_liters = 18
    can_cost_reais = 80
    paint_amoun_liters = square_meters // 3
    can_amount = 0
    if paint_amoun_liters > can_liters:
        can_amount = ceil(paint_amoun_liters / can_liters)
    else:
        can_amount = 1
    return (can_amount, can_amount * can_cost_reais)


print(painting_cost(70))
