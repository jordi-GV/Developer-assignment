This project was created with:  

React  

React-Redux  https://react-redux.js.org/  

React Bootstrap
 
json-server  https://github.com/typicode/json-server


# Scripts



 ## React
 stand in folder **Advertisements/client**  
 ``npm start``  
 Open http://localhost:3000 to view it in the browser.

 ## json server
stand in folder **Advertisements/api**  
Install JSON Server  

``npm install -g json-server``  

Start JSON Server  

``json-server --watch db.json --port 3004``

 Open http://localhost:3004/advertisements to view it in the browser.

## API access data

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

http://localhost:3004/advertisements/:id
