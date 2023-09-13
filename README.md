# HNG backend track stage 2
This API provides CRUD (Create, Read, Update, Delete) operations for managing a "person" resource. It allows you to create, retrieve, update, and delete person records in a MongoDB database


# Setup instructions
Node.js and npm installed on your system.
MongoDB installed and running.
Postman or a similar tool for API testing.

# installation
Clone the repository ""

Create a .env file in the project root and specify your MongoDB connection string: "mongodb+srv://<username>:<password>@cluster0.we0x91f.mongodb.net/"
Install the dependencies using:  npm install
# starting server
To start the API we run npm start
The API will be available at "http://localhost:<PORT>"
# API endpoints
Adding a Person
Endpoint: /api
HTTP Method: POST
Request Body:
{
    "name": "Mark Essien"
}
Response:
{
        "_id": "<user_id>",
        "name": "Mark Essien",
        "createdAt": "2023-09-13T08:35:59.735Z",
        "updatedAt": "2023-09-13T12:06:32.914Z",
        "__v": 0
    }

Fetching details a Person
Endpoint: /api/user_id
HTTP Method: GET
Response:
{ 
  "name": "Mark Essien",
}

Update a Person
Endpoint: /api/user_id
HTTP Method: PUT
Request Body:
{
  "name": "updated name"
}
Response:
{
        "_id": "<user_id>",
        "name": "updated name",
        "createdAt": "2023-09-13T12:03:39.900Z",
        "updatedAt": "2023-09-13T12:03:39.900Z",
        "__v": 0
    },

Remove a Person
Endpoint: /api/user_id
HTTP Method: DELETE
Response:
{
  "message: "person deleted successfully"
}

## Assumptions
This API assumes that each person has a unique identifier (id) that is automatically generated when a person is created.

Input validation is performed for the name field to ensure it's a string. Other fields or additional validation rules can be added as needed.

## License

This project is open source and available under the [MIT License](LICENSE).