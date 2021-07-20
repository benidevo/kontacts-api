# Kontacts API 

A REST API with full CRUD implementation and JWT authentication. Kontacts API is the backend service of a phone book management app that enables users to store and manage their phone contacts. Entries are exclusive to the users who created them. Other users are denied access and cannot view the contacts they did not add to their own phone book.


## Technologies 

The following technologies were used in this project:

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Requirements

Before starting, you need to have [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/)installed. Alternatively, you can download the code as a zip file.


## Clone this project

    git clone https://github.com/benidevo/kontacts-api.git


## Install dependencies

    npm install

## Start server

    npm run server



# Endpoints

The endpoints and responses are described below.

## Register User

### Request

`POST api/users`

    curl -i -H 'Accept: application/json' http://localhost:3500/api/users

### Payload

    {
        "name": <string>,
        "email": <string>,
        "password": <string>
    }

### Response

    {
        "token": <string>
    }


## Login

### Request

`POST api/auth`

    curl -i -H 'Accept: application/json' http://localhost:3500/api/auth

### Payload

    {
        "email": <string>,
        "password": <string>
    }

### Response

    {
        "token": <string>
    }


## Get User Profile

### Request

`GET api/auth`

    http://localhost:8000/api/auth

### Response

    {
        "user": {
            "_id": <string>,
            "name": <string>,
            "email": <string>,
            "date": <string>,
            "__v": <number>
        }
    }


## Add New Contact

### Request

`POST api/contacts`

    curl -i -H 'Accept: application/json' http://localhost:3500/api/contacts

### Payload

    {
        "name": <string>,
        "email": <string>,
        "phone": <string>,
        "type": <string>,
    }

### Response

    {
        "contact": {
            "type": <string>,
            "_id": <string>,
            "name": <string>,
            "email": <string>,
            "phone": <string>,
            "user": <string>,
            "date": <string>,
            "__v": <number>
        }
    }


## Get all contacts

### Request

`GET api/contacts`

    http://localhost:3500/api/contacts

### Response

    {
        [
            "type": <string>,
            "_id": <string>,
            "name": <string>,
            "email": <string>,
            "phone": <string>,
            "user": <string>,
            "date": <string>,
            "__v": <number>
        ]
    }


## Update contact by ID

### Request

`PUT api/contacts/:id`

    curl -i -H 'Accept: application/json' http://localhost:3500/api/contacts/:id

### Response

    {
        "contact": [
            {
                "type": <string>,
                "_id": <string>,
                "name": <string>,
                "email": <string>,
                "phone": <string>,
                "user": <string>,
                "date": <string>,
                "__v": <number>
            }
        ]
    }


## Delete contact by ID

### Request

`DELETE api/contacts/:id`

    curl -i -H 'Accept: application/json' http://localhost:3500/api/contacts/:id

### Response

    {
        "msg": "contact deleted successfully"
        
    }