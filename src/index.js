require('../public/main.sass');
require('../public/fonts/font.sass');
require('!style-loader!css-loader!normalize.css');

(function(window, document, undefined){

	window.onload = init;

	function init(){

		var modal = document.getElementById('modal');
		var span = document.getElementById('modal-close');

		span.onclick = function() {
			modal.style.display = "none";
		};

		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		};

		window.validateForm = function(event) {
			event.preventDefault();

			modal.style.display = "block";

			var errors = document.getElementById('errors');
			//remove errors
			if (errors) {
				document.getElementById("modal-content").removeChild(errors);
			}
			var invalidFields = document.getElementsByClassName('invalid-field');

			if (invalidFields) {
				var ulNode = document.createElement("ul");
				ulNode.id = 'errors';
				var liNode, textnode;
				[].forEach.call(invalidFields, function (invalidField) {
					liNode = document.createElement("li");
					textnode = document.createTextNode(invalidField.id + " is invalid!");

					liNode.appendChild(textnode);
					ulNode.appendChild(liNode);
					document.getElementById("modal-content").appendChild(ulNode);
				});
			}

		};

		window.validate = function(event, val, id) {
			if (event.key === 'Backspace') {
				val = val.slice(0, -1);
			} else {
				val += event.key;
			}
			//TODO validation only for english alphabet names
			var regex = /^[a-z ,.'-]+$/i;
			var input = document.getElementById(id);
			if (!regex.test(val) && val.length > 0) {
				input.className = 'invalid-field';
				input.nextElementSibling.style.display = 'block';
			} else {
				input.className = '';
				input.nextElementSibling.style.display = 'none';
			}
		};

	}

})(window, document, undefined);