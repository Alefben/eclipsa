exports.run = (Client, message) => {
	
	return message.channel.send("Pong!");
	
}

exports.config = {
	
	name: "ping",
	usage: "[prefix]ping",
	isOwnerOnly: false
	
}
