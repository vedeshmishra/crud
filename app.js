
import express from 'express'; const app = express();
import connectDB from './db/connectdb.js';
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';
// connect to mongoDB
connectDB(DATABASE_URL);

import bodyParser from 'body-parser';
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

//using middleware
app.use(express.urlencoded({ extended: true }));
//set view engine ejs
app.set('view engine', 'ejs');
// serve static files
app.use(express.static( 'public')); 
//using routes
import web from './routes/web.js';
app.use('/', web);
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});