const express = require("express");
const path = require("path");
const morgan = require("morgan");
const uuid = require("./mongo/uuid");
const multer = require("multer");

const app = express();

//connect to db with mongoose
require("./mongo/connection.js");

//multer storage
const multerDest = path.join(__dirname, "public/uploads/img/");

const storage = multer.diskStorage({

	filename: (req, file, cd) => {

		cd(null, uuid(20) + path.extname( file.originalname ) );

	}, destination: multerDest

});

//settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))

app.set("port", process.env.PORT | 1000);

//midleawers
app.use( morgan("dev") );
app.use( express.static( path.join(__dirname, "public") ) );
app.use( express.urlencoded({ extended: true }) )
app.use( multer({

	storage,
	dest: multerDest,
	fileFilter: (req, file, cb) => {

		const fileTypes = /jpeg|jpg|png|gif/;
		const mimeType = fileTypes.test( file.mimetype );

		const extName = fileTypes.test(path.extname( file.originalname ))

		if( mimeType && extName){

			return cb(null, true);

		} else {

			cb(null/*"Ugly Alert: your file is not soported :( \ngo back and try agaim..."*/)

		}

	}
}).single("image") );

//routes
app.use( require("./routes/main.js") )

app.listen(app.get("port"), () => {

	console.log(`Ready on port ${ app.get("port") }`);

});