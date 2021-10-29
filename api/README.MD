## json server

stand in folder ``/api``

Listen in port 3004:

`$ json-server --watch db.json --port 3004`

## Request

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
