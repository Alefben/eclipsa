const { Client, storage } = require("../index.js");

Client.on("message", async message => {
	
	let args = message.content.slice(storage.client.defaultPrefix.length).split(' ');
	let command = args.shift().toLowerCase();
	let localCommand = Client.commands.get(command);
	
	if(message.author.bot) return;
	
	if(message.content.startsWith(storage.client.defaultPrefix)) {
		try {
			if(localCommand.config.isOwnerOnly === true && message.author.id !== storage.client.ownerID) return;
				localCommand.run(Client, message, args)
		} catch(err) { console.log("[Error] "+err) }
	}
	
})
