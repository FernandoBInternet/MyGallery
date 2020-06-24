const express = require("express");
const path = require("path");

const router = express.Router();

const Uploads = require("../mongo/models/uploads");

router.get("/", async (req, res) => {

	const publics = await Uploads.find();

	res.render("index", { publics });

	console.log(publics)

});

router.get("/upload", (req, res) => {

	res.render("upload");

});

router.post("/save", (req, res) => {

	if(req.file == undefined){

		res.redirect("/err");

	} else {

		var imageName = req.file.filename;
		var title = req.body.title
		var description = req.body.description;

		const newUpload = new Uploads({

			title,
			description,
			image: imageName

		});

		newUpload.save();

		res.redirect("/");

	}

});

router.get("/err", (req, res) => {

	res.render("not_soported");

});

router.get("/image/:id", async (req, res) => {

	const id = req.params.id;

	const data = await Uploads.findById(id);

	res.render("image", {down : "view", data: data});

});

module.exports = router;