# Blog Post API

1. A user can register with firstname, lastname, email and password.
2. A user can login using email and password.
3. A user can make public, private and protected post.
4. A post have title and content and type(visibility[public or private or protected]) and user(posted by).
5. A post can be public or private or protected.
6. Private post can be seen by the user only.
7. Protected post can be seen by all logged in users.
8. Public post can be seen by everyone.

## Plan & Structure

Model:
    ->User(Mongoose Model of User)
           ->FirstName
           ->LastName
           ->Email
           ->Password
    ->Post
           ->Mongoose Model of Post

Controller
    ->UserController
        ->Register
        ->UserLogin
    ->PostController
        ->GetPost
        ->GetPostByUserID
        ->CreatePost

//Routes will call the Controller based upon the endpoint. You will decide which method/controller to call.

Routes
    ->UserRoutes
    ->PostRoutes

Auth
    ->This folder will handle User Authentication.