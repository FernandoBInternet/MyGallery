const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://uwukoqedat5s9zghf8ag:1TAUENboQYuQI8RN8XWB@bvddcx2fmgx4cuo-mongodb.services.clever-cloud.com:27017/bvddcx2fmgx4cuo", {

	useNewUrlParser: true,
	useUnifiedTopology: true

})

.then(data => {console.log("ready! conected to db")})

.catch(err => {console.log("Can not conect to db")});

module.exports = connection;