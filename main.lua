local http = game:GetService("HttpService")
local response = http:GetAsync("https://api.ipify.org")
print(response)
