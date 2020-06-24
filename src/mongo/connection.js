const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/mygallery", {

	useNewUrlParser: true,
	useUnifiedTopology: true

})

.then(data => {console.log("ready! conected to db")})

.catch(err => {console.log("Can not conect to db")});

module.exports = connection;