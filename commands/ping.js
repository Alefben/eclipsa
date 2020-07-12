module.exports = {
	run: function(Client, message) {
		return message.channel.send("Pong!");
	},
	
	config: {
		name: "ping",
		usage: "[prefix]ping",
		isOwnerOnly: false
	}
}
