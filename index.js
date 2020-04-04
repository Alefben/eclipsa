const Discord = require("discord.js");
const storage = require("./storage.json");
const Client = new Discord.Client();

Client.commands = new Discord.Collection();
require("./functions.js")(Client);

module.exports = {
	
	Client: Client,
	storage: storage
	
}

Client.login(storage.client.token).then(() => {
	
	console.log("[Eclipsa] Successfully logged in.")
	Client.user.setActivity(storage.activity.name, {type: storage.activity.type})
	
})
