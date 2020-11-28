const express = require('express');
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User');





const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.get('/', (req, res) => {
  
    User.create({
        name: "Anton",
        birthday: new Date(199,4,6)
    }).then(user => {
        res.json(user);
    })
    
})

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`)

  sequelize.sync({ force: false }).then(() => {
    console.log('DB Connected');
    }).catch(error => {
        console.log('Error', error);
    })

})