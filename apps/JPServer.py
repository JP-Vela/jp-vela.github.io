import os

fileName = raw_input("Enter Your File Name: ")
location = raw_input("Enter Your File Location: ")
os.system("scp "+fileName+" "+location)
#os.system("scp "+fileName+"  pi@192.168.0.15:/media/pi/ONETOUCH")
# replace "pi@192.168.0.15:" with your server's ssh login and replace "/media/pi/ONETOUCH" to your file destination on your server
# Makes sure your drive connected to your server is read and write
