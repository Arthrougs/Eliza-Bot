//AI HW 1 Connor Casselman

const Discord = require("discord.js");
const client = new Discord.Client();

var messages = []; 
var memory = [];
var memoryCount = 0;


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {

	//Look at all messages except ones that come from the bot itself
	if(message.author.username != "Eliza-Bot")
	{
		var userMsg = message.content.toLowerCase();
		
		//Rule 1 - Saying Hello
		if (userMsg.includes("hello") || userMsg.includes("hey") || userMsg.includes("joined"))
			messages.push("Heya " + message.author + "!");
		//Rule 1.5 - Saying Bye
		if (userMsg.includes("bye") || userMsg.includes("cya") || userMsg.includes("leave"))
			messages.push("Cya " + message.author + "!");
		//Rule 2 - Saying Yes
		if(userMsg.includes("yes"))
		{
			messages.push("You sound positive");
			messages.push("Are you sure?");
		}
		//Rule 2.5 - Saying No
		if(userMsg.includes("no"))
		{
			messages.push("You sound negative, you should fix that.");
			messages.push("Are you sure?");
		}
		//Rule 3 - I am
		if(userMsg.includes("i am") || userMsg.includes("i'm"))
		{
			var splicedMsg;
			if(userMsg.includes("i am"))
				splicedMsg = userMsg.split("i am");
			else
				splicedMsg = userMsg.split("i am");
			
			messages.push("Why do you say that you are" + splicedMsg[1] + "?");
			messages.push("Did you come to me because you are " + splicedMsg[1] + "?");
			memory.push(splicedMsg[1]);
			
		}
		//4 and 5 at bottom
		//Rule 6 - Using memory
		if(memory.length >= 1)
		{
			messages.push("Tell me about you saying you are" + memory[Math.floor((Math.random() * memory.length))]);
		}
		//Rule 7 - Your
		if(userMsg.includes("your"))
		{
			var splicedMsg = userMsg.split("your");
			messages.push("Why are you concened about my" + splicedMsg[2] + "?");
		}
		//Rule 8 - Uncertainty
		if(userMsg.includes("perhaps") || userMsg.includes("maybe"))
		{
			messages.push("Why the uncertain tone?");
		}
		//Rule 9 - "Short input" at bottom
		
		//Rule 10 - You
		if(userMsg.includes("you"))
		{
			messages.push("We were discussing you, not me.");
			messages.push("You're not really talking about me, are you?");
		}
		//Rule 11 - sorry
		if(userMsg.includes("sorry"))
		{
			messages.push("Please don't apologize");
			mesasges.push("Apologies are not needed here.");
		}
		//Rule 12 - you are X
		if(userMsg.includes("you are") || userMsg.includes("are you"))
		{
			var splicedMsg;
			if(userMsg.includes("you are"))
				splicedMsg = userMsg.split("you are");
			else
				splicedMsg = userMsg.split("are you");
			
			messages.push("Why are you interested in whether or not I am" + splicedMsg[1] + "?");
			messages.push("What makes you think I am" + splicedMsg[1] + "?");
		}
		//Rule 12 - I need
			if(userMsg.includes("i need") || userMsg.includes("i want"))
		{
			var splicedMsg;
			if(userMsg.includes("i need"))
				splicedMsg = userMsg.split("i need");
			else
				splicedMsg = userMsg.split("i want");
			messages.push("What would it mean if you got" + splicedMsg[1] + "?");
		}
		//Rule 13 - Family
		if(userMsg.includes("mother") || userMsg.includes("father") || userMsg.includes("brother") || userMsg.includes("sister"))
			messages.push("Tell me more about your family.");
		//Rule 14 - You are like
		if(userMsg.includes("you are like"))
			messages.push("What resemblance do you see?");
		//Rule 15- X is Y
		if(userMsg.includes(" is"))
		{
			var splicedMsg = userMsg.split(" is ");
			messages.push("What else comes to your mind when you think of " + splicedMsg[0]);
		}
		//Rule 16 - ?
		if(userMsg.includes("?"))
		{
			messages.push("Have you asked such questions before?");
			messages.push("What is it you really want to know?");
		}
		//Rule 17 - I don't X
		if(userMsg.includes("i don't"))
		{
			var splicedMsg = userMsg.split("i don't");
			messages.push("Do you wish to" + splicedMsg[1] + "?");
		}
		//Rule 18 - Obscenities
		if(userMsg.includes("darn") || userMsg.includes("gosh") || userMsg.includes("kek"))
			messages.push("Does it make you feel strong to use that kind of language?");
		//Rule 19 - Yes and no
		if(userMsg.includes("yes") && userMsg.includes("no"))
			messages.push("You seem uncertain");
		//Rule 20 - Names
		if(userMsg.includes("name") || userMsg.includes("names"))
			messages.push("I am not interested in names");
		//Rule 21 - Agree
		if(userMsg.includes("agree") || userMsg.includes("disagree"))
		{
			messages.push("I agree you you.");
			messages.push("I disagree with what you are saying.");
		}
		//Rule 22 - Anger
		if(userMsg.includes("ah") || userMsg.includes("gah"))
			messages.push("You sound angry.");
		//Rule 4 - Why do you say?
		//Rule 5 - No trigger
		//Rule 9 - Shorter than 15 characters
		if(messages.length == 0)
		{
			messages.push("Why do you say " + userMsg + "?");
			messages.push("Do go on.");
			messages.push("Interesting, continue.");
			if(userMsg.length < 15)
			{
				messages.push("Tell me more.");
			}
		}
		
		memoryCount++;
		if(memoryCount >= 6)
		{
			memory = [];
		}
		sendMessage(message);
	
	}
	
});

function sendMessage(m)
{
	var rand = Math.floor((Math.random() * messages.length));
	m.channel.send(messages[rand]);
	console.log(rand);
	messages = [];
}

client.login("NDA1Nzc4NDgxNTQxMDIxNjk4.DUpWUQ.6UFZcMiVBEcfqK-qWo_cOOeIC98");