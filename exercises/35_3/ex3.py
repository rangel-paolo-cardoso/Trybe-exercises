import requests

response = requests.get(
  "https://scrapethissite.com/pages/advanced/?gotcha=headers",
  headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
print(response)

assert "bot detected" not in response.text
