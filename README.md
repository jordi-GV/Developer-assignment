This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.   
On the server side, uses [json-server](https://github.com/facebook/create-react-app)

## Instalation notes
### React*-Bootstrap  

npm install react-bootstrap bootstrap@5.1.3  


### json-server
npm install -g json-server   


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

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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



