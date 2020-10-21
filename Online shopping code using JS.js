const readline = require('readline');
question = 0;
name = "";
cart = [];
cart_cost = 0;
return_to_beggining = 0;
add_delete = 0;

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Please enter your name:");

rl.on('line', (input) => {

	if(question == 5)
	{
		switch(parseInt(input))
		{
			case 1:
					main_menu();
					return_to_beggining = 1;
					break
			case 2:
					show_cart();
					add_delete = 1;
					console.log("Enter id to delete item");
					break
			default:
					 console.log("Your Final Cost is " + cart_cost);
 					console.log ("Thanks " + name + "'s' for Choosing Us and Visit us again.\n");
 					rl.close();
 					break;
		}
	}

	if(question == 4)
	{
		if(parseInt(input) <= cart.length && cart.length >= 0)
		{
		numb = parseInt(input);
		cost_removed = cart[numb][1];
		cart_cost = cart_cost - cost_removed;
		cart.splice(parseInt(input),1);
			
		console.log("Revised Items\n");

		show_cart();
		console.log("If you wish to buy anything more Enter\n1 to Add Item\n2 to Delete Items \nAny other number to Exit\n");
		question = 5;
		}
	}

	if(add_delete == 1)
	{
		question = 4;
		add_delete = 0
	}

	if(question == 3)
	{
		switch(parseInt(input))
		{
			case 1:
					switch(subquestion)
					{
						case "1:1":
									item_name = "Sandisk 16GB";
					 				cost = 355;
					 				add_to_cart(item_name,cost);
									console.log("Your cost in cart is " + cart_cost);
									show_cart_and_message(cart_cost,cost);
									question = 5;
									break
						case "1:2":
									item_name = "Logitech Mouse";
									cost = 500;
									add_to_cart(item_name,cost);
									console.log("Your cost in cart is " + cart_cost);
									show_cart_and_message(cart_cost,cost);
									question = 5;
									break
						case "1:3":
									item_name = "Pendrive 16GB";
									cost = 550;
									add_to_cart(item_name,cost);
									console.log("Your cost in cart is " + cart_cost);
									show_cart_and_message(cart_cost,cost);
									question = 5;
									break
						case "2:1":
									item_name = "Adidas Shoes";
					 				cost = 3550;
					 				add_to_cart(item_name,cost);
					 				console.log("Your cost in cart is " + cart_cost);
					 				show_cart_and_message(cart_cost,cost);
					 				question = 5;
					 				break;
					 	case "2:2":
					 				item_name = "Nike Shoes";
									cost = 5000;
					 				add_to_cart(item_name,cost);
					 				console.log("Your cost in cart is " + cart_cost);
					 				show_cart_and_message(cart_cost,cost);
					 				question = 5;
					 				break
					 	case "2:3":
					 				item_name = "Leecooper Shoes";
									cost = 2800;
					 				add_to_cart(item_name,cost);
					 				console.log("Your cost in cart is " + cart_cost);
					 				show_cart_and_message(cart_cost,cost);
					 				question = 5;
					 				break
					 	case "3:1":
					 				 item_name = "Mi Note 3";
					 				 cost = 11000;
					 				 add_to_cart(item_name,cost);
					 				console.log("Your cost in cart is " + cart_cost);
					 				show_cart_and_message(cart_cost,cost);
					 				question = 5;
					 				break
					 	case "3:2":
					 				item_name = "Nokia 3";
									cost = 9866;
					 				add_to_cart(item_name,cost);
					 				console.log("Your cost in cart is " + cart_cost);
					 				show_cart_and_message(cart_cost,cost);
					 				question = 5;
					 				break
					 	case "3:3":
					 	 			item_name = "Samsung";
									cost = 12800;
					 	 			add_to_cart(item_name,cost);
					 				console.log("Your cost in cart is " + cart_cost);
					 				show_cart_and_message(cart_cost,cost);
					 				question = 5;
					 				break

					}
					break
		
			default:
					switch(subquestion)
					{
					case "1:1":
					case "1:2":
					case "1:3":
					console.log("Exit from Computer Accessories");
					return_to_beggining = 1;
					main_menu();
					break
					case "2:1":
					case "2:2":
					case "2:3":
					console.log(" Exit from Shoes Category");
					return_to_beggining = 1;
					main_menu();
					break;
					case "3:1":
					case "3:2":
					case "3:3":
					console.log("Exit from Mobile Category");
					return_to_beggining = 1;
					main_menu();
					break;

					}

					break
			

		}
	}


	if(question == 2)
	{
		if(subquestion == 1)
		{

		switch(parseInt(input))
		{
			case 1:
					 console.log("You chose Sandisk 16GB with Rs.355.Are you sure to buy.If 'Yes' Enter 1 else any number");
					subquestion = "1:1";
					question = 3;
					 break;
			case 2:
					console.log("You chose Logitech Mouse with Rs.500.Are you sure to buy.If 'Yes' Enter 1 else any number");
					subquestion = "1:2";
					question = 3;
					break;
			case 3:
					console.log("You chose Pendrive 16GB with Rs.550.Are you sure to buy.If 'Yes' Enter 1 else any number");
					subquestion = "1:3";
					question = 3;
					break
			default:
			
					console.log("Exit from Computer Accessories");
					return_to_beggining = 1;
					break
					
		}

		}
		else if(subquestion == 2)
		{
			switch(parseInt(input))
			{
			case 1:
					 console.log("You chose Adidas Shoes for Rs.3550.Are you sure to buy.If 'Yes' Enter 1 else any number\n");
					question = 3;
					subquestion = "2:1";
					 break;
			case 2:
					 console.log("You chose Nike Shoes for Rs.5000.Are you sure to buy.If 'Yes' Enter 1 else any number\n");
					question = 3;
					subquestion = "2:2";
					break;
			case 3:
					console.log("You chose Leecooper Shoes for Rs.2800.Are you sure to buy.If 'Yes' Enter 1 else any number\n");
					question = 3;
					subquestion = "2:3"
					break
			default:
					console.log("Exit from Shoes Category");
					return_to_beggining = 1;
					break
			}
		}
		else if(subquestion == 3)
		{
				switch(parseInt(input))
			{
			case 1:
					  console.log("You chose to buy Mi Note 3 for Rs.11000.Are you sure to buy.If 'Yes' Enter 1 else any number\n");
					 question = 3;
					subquestion = "3:1";
					 break;
			case 2:
					 console.log("You chose to buy Nokia 3 for Rs.9866.Are you sure to buy.If 'Yes' Enter 1 else any number\n");
					question = 3;
					subquestion = "3:2";
					break;
			case 3:
					 console.log("You chose to buy Samsung for Rs.12800.Are you sure to buy.If 'Yes' Enter 1 else any number\n");
					question = 3;
					subquestion = "3:3"
					break
			default:
					console.log("Exit from Mobiles Category");
					return_to_beggining = 1;
					break
			}
		}

		
	}




	if(question == 1)
	{
		switch(parseInt(input))
		{
			case 1:
			
			console.log("Enter\n1 - Sandisk 16 GB - Rs.355\n2 - Logitech Mouse- Rs.500\n3 - Pendrive 16 GB - Rs.550\nAny other number to exit\n");
 			question = 2;
 			subquestion = 1;
 			break
 			case 2:
 			 console.log("Enter\n1 - Adidas - Rs.3550\n2 - Nike - Rs.5000\n3 - Leecooper - Rs.2800\nAny other number to exit\n");
 			question = 2;
 			subquestion = 2;
 			 break
 			case 3:
 			 console.log("Enter\n1 - Mi Note 3 - Rs.11000\n2 - Nokia 3 - Rs.9866\n3 - Samsung - Rs.12800\nAny other number to exit\n");
 			question = 2;
 			subquestion = 3;
 			 break;
 			 default:
					console.log("Enter Valid Category Choice");
					break
 			}

	}

	if(return_to_beggining == 1)
	{
		question = 1;
		return_to_beggining = 0;
	}

	if(question == 0)
	{
		name = input;
		console.log("Hello " + name + " Welcome to our Online Shopping.");
		console.log("Enter\n1 - Computer Accessories\n2 - Shoes\n3 - Mobiles\nAny other number to exit")
		question = 1;
	}


	});



function show_cart_and_message(cart_cost,cost) {
	

	console.log(name + "'s cart");
	console.log("ID          Items          Quantity          Cost");

	for (var i = 0; i < cart.length; i++) {
		cart_item_name = cart[i][0];
		cart_item_cost = cart[i][1];

		console.log(i + "          " + cart_item_name + "        1" + "              " + cart_item_cost);
		

	}

	console.log("\nTotal Cost                                    " + cart_cost);
 	console.log("If you wish to buy anything more Enter\n1 to Add Item\n2 to Delete Items \nAny other number to Exit\n");
   
}


function add_to_cart(item_name,cost)
{
		

	if(cart.length == 0)
	{
		cart[0] = new Array(2);
		cart[0][0] = item_name;
		cart[0][1] = cost;
		cart_cost += cost;
		
	}
	else
	{
		const cart_size = cart.length;
		cart[cart_size] = new Array(2);
		cart[cart_size][0] = item_name;
		cart[cart_size][1] = cost;
		cart_cost += cost;
		
	}
		
	
}

function check_cart_cost(cart_cost,cost)
{
	if(cart_cost == undefined)
	{
		cart_cost = cost;
	}
	else
	{
		cart_cost += cost;
	}
}

function show_cart()
{
	console.log(name + "'s cart");
	console.log("ID          Items          Quantity          Cost");

	for (var i = 0; i < cart.length; i++) {
		cart_item_name = cart[i][0];
		cart_item_cost = cart[i][1];

		console.log(i + "          " + cart_item_name + "        1" + "              " + cart_item_cost);
		

	}

		console.log("\nTotal Cost                                    " + cart_cost);
	
}

function main_menu()
{
	console.log("Enter\n1 - Computer Accessories\n2 - Shoes\n3 - Mobiles\nAny other number to exit");
	question = 1;
}


