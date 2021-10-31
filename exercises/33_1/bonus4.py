def calculate_fuel_charge(sold_liters, fuel_type):
    alcohol_price = 1.9
    petrol_price = 2.5
    final_price = 0
    if fuel_type == "A":
        final_price = sold_liters * alcohol_price
        if sold_liters <= 20:
            final_price -= final_price * (3 / 100)
        else:
            final_price -= final_price * (5 / 100)
    elif fuel_type == "G":
        final_price = sold_liters * petrol_price
        if sold_liters <= 20:
            final_price -= final_price * (4 / 100)
        else:
            final_price = final_price * (6 / 100)
    else:
        return "Error"
    return final_price


print(calculate_fuel_charge(20, "G"))
