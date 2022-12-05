const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;


require('./config/mongoose.config')

app.use(cors());



// --- Middleware ---
app.use(express.json(), express.urlencoded({extended: true}));

require('./routes/product.routes') (app)



app.listen (port, () => console.log('listening on port 8000...'));