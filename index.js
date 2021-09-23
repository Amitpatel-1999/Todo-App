
var itemId =0;

function addItems(){

	itemId += 1;

	var text = prompt("Enter Your Todos Right Below !");

	if(text != ""){	
		var div = document.createElement('div');
		var h3 = document.createElement('h3');
		var button = document.createElement('button');
		
		var textContent = document.createTextNode(text);

		h3.appendChild(textContent);
		div.setAttribute('id','itemsId#' + itemId);
		button.setAttribute('id','itemsId#' + itemId);
		button.setAttribute('onclick','removeItems(this.id)');
		button.setAttribute('class','btn-inner')
		button.textContent = 'Remove';
		div.setAttribute('class','content');
		h3.setAttribute('class','text-inner')

		div.appendChild(h3);
		div.appendChild(button);

		document.getElementById('items-content').appendChild(div);
	}
}

function removeItems(id) {
	document.getElementById(id).remove();
}