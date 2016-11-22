#RESTexpress
RESTful API Server Sceleton build with expressjs a configurable Database connection with mongoose.
`npm` and `nodejs` are required.

I'm quite new to this kind of stuff and this was just thought for me to start projects faster. But feel free to use it as well, but use it with care.

These things are prebuild:

1. User Model (`./models/user.js`).
2. User Routing (`./routing/users.js`) with
  * get all users
  * get specific user
  * put
  * delete
  * post
  
  request methods.
  
Anything is easily adoptable and changeble.

Don't forget to change `app.js` as well:

```javascript
//Routes
var index = require('./routes/index');
var users = require('./routes/users');
//[...]
app.use('/', index);
app.use('/users', users);
```
___
##Installation
###1. Clone repository:
```
$ git clone https://github.com/posporus/RESTexpress
```
###2. Install dependencies:
```
$ cd RESTexpress

$ npm install
```
###3. Configuration
Rename `_config.json` to `config.json` and do your configurations:

```json
{
  "mongo":{
    "url":"localhost",
    "port":"8080",
    "user":"user",
    "pass":"password",
    "db":"database"
  },
  "port":"3000",
  "debugPrefix":"myAPI"
}
```
###4. Start Server
```
$ npm start
```
or using nodemon:
```
$ nodemon start
```
