## Backend

Install nodejs or bun

```javascript
npm init -y
```

( -y is a linux command for forcefually )

Semantic versioning [https://semver.org/]

Third party libraries: syntax (require or import)

Add in package.json for use import (ES6)

```javascript
"type": "module",

"scripts": {
    "dev": "nodemon index.js"
},
```

Backend hosting provider - Render, aws, digitalociean

npm packages -

```
npm install express
npm install -D nodemon
npm install dotenv
npm install cors
```

Run project

```
npm run dev
node index.js

http://localhost:8000
http://127.0.0.1:8000
```

Note: route start with "/"

We put the path inside dotenv.config(); if the .env file is not in the root directory.

dotenv.config({ path: './config/.env' });

laravel/php write down frontend and backend in same place so cors not error

CORS should be handled in the backend, not in the frontend.
during fetch

---

frontend or postman ----> backend or login ----> database

---

use mongodb database using mongoose (odm, orm)

```
npm install mongoose
```

mongodb login and create cluster and get connection url

ip_whitelisting <br>
username-password

Password me special case ka letter nhi use krna hai

May be some time import krte time file name me .js add krna jruri hota hai

Make a auth system then first write down flow of data and data fields

User fileds -->
name
email
password
role: USER, ADMIN
isVerified
verificationOTP
passwordResetToken
passwordResetExpiryTime
// both are created with timestamps
createdAt
updatedAt

Kya kya krna hai -

1. User register
2. User verify email
3. User login
4. Password reset

User register -> send otp

Password reset -> generate token (using crypto or own algorithm) from backend and save token in database and send same token to user via email. check token then reset password

Note: add then see value --> 0.1 + 0.2 add when those value then unispected result

send env file using this website [https://infisical.com/]

Database is always in another contenent so use try catch and asyn await

Data comes from following method ----> 
1. url ya params ya query se
2. body as a json
3. cookies se

use zod or express-validater for email validation

create token using crypto (crypto is the feature of node)

send mail using nodemailer and use platform for email 
[https://mailtrap.io] or [https://resend.com/]

```
npm install nodemailer
```

bcryptjs use for hash password

```
npm install bcryptjs
```

    hooks use in models
    pre hooks and use next flag

different between hash vs incryption decryption

There are two method for user login session

1. session token
   [https://jwt.io/]

2. jwt token

```npm i jsonwebtoken

```

set or control cookies because cookies are scure store data

```npm i cookie-parser

```

Event-driven programming (EDP) is a paradigm where a program's execution flow is determined by external events, such as user actions, system messages, or sensor inputs, triggering specific functions (event handlers) to respond


Tools for api call
    postman
    thunderclient
    apidog