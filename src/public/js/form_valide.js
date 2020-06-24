(function(){

	var form = document.querySelector("form");

	var title = document.querySelector('form input[type="text"]');
	var description = document.querySelector("form textarea");
	var file = document.querySelector('form input[type="file"]');

	fileIndicator = document.querySelector("form b.text-blue");

	var groupTitles = document.querySelectorAll("form b.text-white");

	var redColor = "#FF0202";

	form.addEventListener("submit", function (e){

		if(title.value == ""){

			groupTitles[0].style.color = redColor;

			if(description.value == ""){

				groupTitles[1].style.color = redColor;

				if(file.value == ""){

					groupTitles[2].style.color = redColor;

				}

			}

			e.preventDefault();

		}

		if(description.value == ""){

			groupTitles[1].style.color = redColor;

			if(file.value == ""){

				groupTitles[2].style.color = redColor;

				}

			e.preventDefault();

		}

		if(file.value == ""){

			groupTitles[2].style.color = redColor;

			e.preventDefault();

		}

	});

	file.addEventListener("change", function(e){

		fileIndicator.innerHTML = this.value;
		groupTitles[2].style.color = "";

	});
	
})();