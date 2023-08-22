# Bakend_Intern_Assignment

This is the assignment for the Backend Intern where I have to make a server which can register user and fetch menu items of a particular hotel, here I have made this server and also host it onRender.com, You can access the website by the link , Here are some http request you can make with postman or other postman like tools.
## Api Documentation

## API Endpoints

### Auth

- **[POST /auth/register](https://server-intern-assignment.onrender.com/api/v1/auth/register)** - Takes name(required),email(required),phone,password(required),profilePic as input and returns the user with their details and a JWT token.(form data).(https://server-intern-assignment.onrender.com/api/v1/auth/register)
- **[POST /auth/login](https://server-intern-assignment.onrender.com/api/v1/auth/login)** -  Takes email(required),password(required) as input and returns the user with their details and a JWT token.(json data).(https://server-intern-assignment.onrender.com/api/v1/auth/login)

- ### Menu

- **[POST /menu/createItem](https://server-intern-assignment.onrender.com/api/v1/menu/createItem)** - Takes name(required),price,type,description,photo as input and returns the details of the product.(form data).(https://server-intern-assignment.onrender.com/api/v1/menu/createItem)
- **[GET /menu/all-items](https://server-intern-assignment.onrender.com/api/v1/menu/all-items)** -  return all the items of the menu present in the mongodb Database.(https://server-intern-assignment.onrender.com/api/v1/menu/all-items)

