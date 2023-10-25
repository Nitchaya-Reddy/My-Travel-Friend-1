import requests as re
response = re.get('https://tripnotes.ai/app')
html = response.text
print(html)
