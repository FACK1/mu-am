### Pray Times

## About:
   A website app that when a visitor visit a palestine city, it **shows to the visitor the posts that inserted by who visited the city, and allows to him add his post.**    

## User journey:
   In our website you (user) can see the posts about the visited city. **For get the posts**, the user just select the city. 
   And **for posting**, the user just input his name (if want) and his post for the selected city.

## Website Link: [Palestinian Cities](https://palcity.herokuapp.com/)

## Site design :

 # Architecture :
  
  - we create **public** folder and put inside its client side files:
  
      - index.html
      - style.css
      - main.js
      
  - we create **src** folder and put back-end files:
      
      - server.js
      - router.js
      - handlers.js
      - test.js
      
      - we create sub folder called **database** and add db_files:
        - db_build.js
        - db_build.sql
        - dB_connection.js
        
           - database schema as shown in the below figure:
           
                ![Schema](https://user-images.githubusercontent.com/26909309/49441285-c0840000-f7ce-11e8-8cff-c148d790e535.png)
        
      - we create other sub folder called **queries** and add:
        - getCities.js
        - getCitiesInfo.js
        - setData.js
        
   - .gitignore
   - travis.yml
   
## Test Coverage:
   - We use istanbul test tool for Code Coverage which is Pass.
   
## User Interface : 
   - our website is a page contains a **title** for website with background , **selectlist** to choose the visited city then it returns all the posts of selected city. and the visitor two **input fields** to enter the visitor his name and post .and submit button that when clicked will handle input and unsert into database.

## Team Members:
  - [Amin Talahmeh](https://github.com/ameentalahmeh)
  - [AlMutaz Mohtaseb](https://github.com/alMutazBeAllah)
