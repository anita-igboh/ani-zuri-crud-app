### CRUD app

A basic crud app which creates user, get, updates and delete user

C -> Create
R -> Read
U -> Update
D -> Delete/Destroy


#route path description

request:POST
path: /user
description: creates a user

request:DELETE
path: /user/:userId
description: deletes a user


request:GET
path: /user/get-user
description: gets a user


 request:PUT
path: /user/:userId
description: updates a user   

heroku link: https://ani-zuri-crud-app.herokuapp.com/