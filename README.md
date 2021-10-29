This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.   
On the server side, uses [json-server](https://github.com/facebook/create-react-app)

## Instalation notes
### React*-Bootstrap  

### `npm install react-bootstrap bootstrap@5.1.3`  


### json-server
### `npm install -g json-server`   


## Available Scripts

In the project directory, **Advertisements/client**, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

In the project directory, **Advertisements/api**, you can run:

### `json-server --watch db.json --port 3004`
Runs the app in the development mode.<br />
Open [http://localhost:3004/advertisements](http://localhost:3004/advertisements) to view it in the browser.



# API access data

GET

http://localhost:3004/advertisements

http://localhost:3004/advertisements/:id

POST

http://localhost:3004/advertisements

Header: Content-Type: application/json header

Body:
{
"title ": "your title",
"valid_until": "you date",
"link": "you link"
}

PUT, DELETE



