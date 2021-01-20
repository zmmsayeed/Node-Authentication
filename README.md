# NodeJs Authentication

This repository consists of JSON web token authentication functionality developed in **JavaScript** and **TypeScript** using **express**,  **jsonwebtoken**, and **mongoose**.

To run the application: 
1. Rename the ```.env-exmample``` file to ```.env``` and populate it with your mongodb atlas url and token secret.
2. To install the dependencies: 
```npm install```
3. To run the application: 
```npm run dev```

### Vanila JavaScript Authentication:
**Branch:** main
*Will update the routes to test*

### TypeScript Authentication:
**Branch:** **[auth-typescript](https://github.com/zmmsayeed/Node-Authentication/tree/auth-typescript "auth-typescript")**
**Routes:**
localhost:3000/api/user/get/all
> Type: GET
> List all the user in the database along with a count.

localhost:3000/api/user/login
> TYPE: POST
>  BODY: raw/json
>  ``` { "email": "zimamsayeed@test.com", "password": "mypassword"} ```
>  RESPONSE: returns a token if the user is verified along with the user details and 'Authorized!' message

localhost:3000/api/user/register
> TYPE: POST
> BODY: raw/json
`{ "email": "zimamsayeed@test.com", "password": "mypassword"}`
> REPONSE: returns the inserted user object if the user is inserted

localhost:3000/api/user/validate
> TYPE: GET
> HEADERS: 
> ```auth-token: <token-received-after-login>```

