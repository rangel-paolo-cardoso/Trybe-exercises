class Television:
    def __init__(self, inch_size, colour, screen_technology):
        self.is_on = False
        self.volume = 0
        self.bright = 50
        self.contrast = 50
        self.sharpness = 50
        self.inch_size = inch_size
        self.colour = colour
        self.screen_technology = screen_technology

    def turn_on_off_tv(self):
        self.is_on = not self.is_on

    def turn_up_volume(self, volume_levels):
        self.volume += volume_levels

    def turn_down_volume(self, volume_levels):
        self.volume -= volume_levels

    def change_bright(self, bright_level):
        self.bright = bright_level

    def change_contrast(self, contrast_level):
        self.contrast = contrast_level

    def change_sharpness(self, sharpness_level):
        self.sharpness = sharpness_level


my_tv = Television(32, "Black", "LCD")
print(my_tv)
print("Ligada?", my_tv.is_on)
my_tv.turn_on_off_tv()
print("Ligada?", my_tv.is_on)

print("Volume:", my_tv.volume)
my_tv.turn_up_volume(40)
my_tv.turn_down_volume(20)
print("Volume:", my_tv.volume)
