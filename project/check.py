import requests

url = 'http://127.0.0.1:8000/tour/user/protected/'  # Đổi URL thành endpoint bảo vệ của bạn
headers = {
    'Authorization': f'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzNDU2NTU2LCJpYXQiOjE2OTM0NTI5NTYsImp0aSI6ImQ5MDZiNDk2ZGRiNjRmOTJhOWNiMjU3MzVmYzg2YWEzIiwidXNlcl9pZCI6M30.AB7s1oPzMs8WhPf0x6_nitheiBZbUuKhLnPRmURIt2c'  # Thay đổi your_access_token thành mã thông báo truy cập của bạn
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print('Access token is valid!')
else:
    print('Access token is invalid!')
