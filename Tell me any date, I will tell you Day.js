const readline = require('readline');
const months = ["Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb"];
const week_days = ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
question = 0;
recorded_day = 0
recorded_month = null;
m = 0;


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Please insert date:");


rl.on('line', (input) => {

	

	if(question == 2)
	{
		
		const year = parseInt(input);

		if(m == 11 || m == 12)
		{
			const year = parseInt(input) - 1;
		}
		
		const D = year % 100;
		const C = year / 100;
		const f = (recorded_day+(((13*m)-1)/5)+D+(D/4)+(C/4))-(2*C);

		if(f>=0)
		{
 			finalday = f % 7;
		}
		else
		{
 			finalday = ( (f % 7) + 7) % 7;

		}

		console.log("The Day for given " + recorded_day + "," + recorded_month + " " + year + " is " + week_days[parseInt(finalday)]);
	}

	if(question == 1)
	{
		for (var i = 0; i < months.length; i++) {
			month = months[i];

			if(month == input)
			{
				m = i + 1;
				valid_month = 1;
				recorded_month = input;
				console.log("Enter year:");
				question = 2;
				break
			}
		}

		if(valid_month != 1)
		{
			console.log("Invalid month!");
		}

		valid_month = 0;
	}

	if(question == 0)
	{
		
		if(parseInt(input) <= 0 || parseInt(input) > 31)
		{
			console.log("Invalid date!");
		}

		if(parseInt(input) > 0 && parseInt(input) <= 31)
		{
			recorded_day = parseInt(input);
			console.log("Enter first 3 letters of month of the year ex:-for January enter Jan!");
			question = 1;
		}
		
	}

});


function letters_month()
{

}