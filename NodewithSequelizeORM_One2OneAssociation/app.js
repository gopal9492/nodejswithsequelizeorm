const express = require('express');
const app = express();
const sequelize = require('./database/db');
require('./database/asociations');

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', function (req, res) {
    res.json("Hello Good..");
});

app.use('/api/users', require('./routes/users'));
app.use('/api/addresses', require('./routes/addresses'));


app.listen(PORT, function () {
    console.log(`The app has started in http://localhost:${PORT}`);

  
    sequelize.sync({ force: false }).then(() => {
        console.log("We have connected to the database");
    }).catch(error => {
        console.log('An error has occurred', error);
    })

});