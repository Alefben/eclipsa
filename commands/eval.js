exports.run = async (Client, message, args) => {
	
	try {
		const code = args.join(" ");
		let evaledCode = eval(code);
			
		if (typeof evaledCode !== "string")
		evaledCode = require("util").inspect(evaledCode);
		message.channel.send("Output:"+evaledCode);
	} catch (err) { message.channel.send(err); }
	
}

exports.config = {
	
	name: "eval",
	usage: "[prefix]eval [arguments]",
	isOwnerOnly: true
	
}
