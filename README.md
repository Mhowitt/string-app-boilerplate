# String-App

A take home full stack app challenge about the creating, showing, and storing strings using .

## Requirements

- Create this app with [React-Boilerplate](https://github.com/react-boilerplate/react-boilerplate)
- One page shall have UI to input a string which saves to a database of your choice.
- One page shall display all strings stored on the database.
- User shall be able to navigate between the two pages.
- The application need not be fully styled, but should be laid out in a meaningful way.
- The application should utilize a Node / Express server.
- No need to deploy the application.

  The application must leverage:

- React Router
- Redux
- Redux Saga
- Reselect
- Styled Components - Use at least one styled component. The component must have a prop passed into the Styled Component for conditional rendering.
- Unit Tests - Write tests for one container. Full test coverage is not required.

## Getting Started

### 1) Clone or fork this repo.

```sh
$ cd string-app-boilerplate
```

### 2) Setting up the backend Express application and seeding the database.

Note: Everything related to the backend is located in string-app-boilerplate/server

```sh
$ cd server
$ npm install
$ psql < ./db/seed.sql
```

In order to start our server:

```sh
$ nodemon server.js
```

I recommend installing nodemon, however if you don't have it please start the server by entering the command below in your CLI

```sh
$ npm start server.js
```

### 2) Setting up the React application.

Note: Everything related to the backend is located in string-app-boilerplate/client

Start by openning another tab or window in your terminal.

Make sure to navigate into the client folder (rather than the express server).

```sh
$ cd string-app-boilerplate/client
$ npm install
```

To start the app please enter the following command

```sh
$ npm start
```

### Client-side routes

|        BROWSER ROUTES         |
| :---------------------------: |
|     http://localhost:3000     |
| http://localhost:3000/strings |

### API Endpoints

My API was designed to follow RESTful routing protocols

| HTTP VERB |           LOCATION            |
| :-------: | :---------------------------: |
|    GET    | http://localhost:5000/strings |
|   POST    | http://localhost:5000/strings |

## Notes and things I would improve upon if allotted more time

- Storing form state in redux with redux-form rather than React state. I began to at least store the form state in redux however
  with the learning curve with Reselect and redux-saga, I decided to
  comment out this work and leave it as a todo.

- More validation and error handing on both the frontend and backend. Validation including you must enter a unique string.

- More tests including some more complicated tests. I was fighting a bit with some of react-boilerplates tests not passing. I'm still looking into why and will continue to push changes up. I started testing my server as well, and will continue to push changes up.

- Creating a more CRUD friendly app. So far you can only Create and Read the resource (strings) but I would like to implement inline updating and deleting.

### Testing

#### Frontend React

Tests are done with Jest and Enzyme

```sh
$ cd string-app-boilerplate/client
$ jest
```

#### Backend Express

Tests are done with Jest and you will have to seed a test database

## Authors

- **Miranda Howitt** - [Mhowitt](https://github.com/Mhowitt)
- **Creators of React-Boilerplate**
