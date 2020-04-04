const fs = require("fs");
const storage = require("./storage.json");

module.exports = (Client) => {
	
	fs.readdir(`./${storage.files.commandFolder}/`, (err, files) => {
		if(err) return console.log("[Error] "+err);
		let commands = files.filter(file => file.split(".").pop() === "js");
		if(commands.length <= 0) return console.warn("[Warning] No command files were found.");
	
		commands.forEach((f, i) => {
			const command = require(`./${storage.files.commandFolder}/${f}`);
			Client.commands.set(command.config.name, command);
		})
	})

	fs.readdir(`./${storage.files.eventFolder}/`, (err, files) => {
		if(err) return console.log("[Error] "+err);
		let jsfiles = files.filter(f => f.split(".").pop() === "js");
		if (jsfiles.length <= 0) return console.warn("[Warning] No event files were found.");
	
		jsfiles.forEach((f, i) => {
			require(`./events/${f}`);
		});
	});
	
}
