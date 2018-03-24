To launch this web app you should have Mongodb and Nodjs installed on your computer and all the files from my git repository downloaded in one folder.


To restore MongoDB database:

1.In the folder mongoDb find dump files (needed to restore my database collections on your PC)

2.In cmd switch to the folder with executable mongorestore file (folder bin of mongoDb)

3.In cmd run:  mongorestore -h localhost -d anheloCV path_to_the_folder_with_dump_files

4.Run your database server

*now you should find a new collection "anheloCV" installed to your database


To launch a website:

1.In the folder of the project install node modules and other needed packages(with a help of package.json)

2.Find the file serverCV.js In the line 7 var db = monk('localhost:27017/anheloCV'); check if your database server listens to the same port 27017 if not, change it to yours.

3.Run serverCV.js

PS.The file with ajax it is located here - "public/js/myJs/login.js"

