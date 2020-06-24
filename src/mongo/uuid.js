var unique = function (length){

	var characters = "abcdefghijklmnopqrstuvwxyz1234567890";
	var id = "";

	var min = 0;
	var max = characters.length - 1;

	for( i = 0; i <= length - 1; i++ ){

		var random = Math.floor( Math.random() * (min + max) - min);

		id += characters.charAt( random );

	}

	return id;

}

module.exports = unique;