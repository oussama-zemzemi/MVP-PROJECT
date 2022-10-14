const db = require('mysql2');

const config ={
    host: "localhost",
    user: "oz13",
    password:"oz13",
    database:"anime_storm"
}


const conn = db.createConnection(config);

conn.connect ((err)=> {
    err ? console.log(err) : console.log("db Connected");
});
module.exports =  conn