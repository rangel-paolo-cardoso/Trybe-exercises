import requests
from parsel import Selector

URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(
  "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)

selector = Selector(text=response.text)
title = selector.css("h1::text").get()
price = selector.css(".price_color::text").re_first(r"\d*\.\d{2}")
description = selector.css(
  "#product_description ~ p::text"
).get()[:-len("...more")]
image_url = URL_BASE + selector.css(".item.active img::attr(src)").get()
in_stock = selector.css(".product_main .availability::text").re_first("\d")

print(title, price, description, image_url, in_stock, sep=",")
