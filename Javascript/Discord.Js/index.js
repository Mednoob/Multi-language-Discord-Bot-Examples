const Discord = require("discord.js");                //Discord.Js | Required as a Lib/Wrapper for the javascript code
const { token } = require("./Config/Token.json");    //Token       | Required for logging in the bot
const { prefix } = require("./Config/Prefix.json"); //Prefix       | Required to call the bot

if(token === "") {
    console.log("Please, put the bot's token in Config/Token.json");
    return;
} //Cancel out the current logging attempt if the bot's token is null

if(prefix === "") {
    console.log("Please, put the bot's prefix in Config/Prefix.json");
    return;
} //Cancel out the current logging attempt if the bot's prefix is null

const client = new Discord.Client({ //New connection client made using Discord.Js 
    disableMentions: "all" //Make the bot unable to mention @everyone or @here
});

client.on("ready", () => { //When the bot is ready
    console.log("Bot is ready!") //Add log in the console: "Bot is ready!"
});
client.on("message", message => {
    if(message.author.bot) return; //The bot will not respond any message that comes from bots
    if(!message.content.startsWith(prefix)) return; //The bot will not respond any message that is not started with its prefix. This code usually use to prevent someone using the bot to spam by just typing non-prefixed messages. You may delete this code
    if(message.content === prefix + "help"){ //If the message includes prefix and help
        let authoravatar = message.author.avatarURL() //Store Message Author's Avatar URL
        const helpembed = new Discord.MessageEmbed() //Create a new Embed Message
            .setTitle("Help Command") //Embed Title
            .setDescription("List of **Commands** of this bot.\nLook **Below**.") //Embed Description
            .setAuthor(message.author.username, authoravatar) //Embed Author Properties
            .setColor("GREEN") //Embed Color
            .addFields( //Embed Fields Properties
            { //First Embed Field Properties
                name: "Basic Commands", //First Embed Field Name
                value: "`help`", //First Embed Field Context/Value
                inline: true //First Embed Field Inline Boolean. Set to 'true' if you want to put the field in the same line as before. Set to 'false' if you want to put the field in a new line.
            },
            { //Second Embed Field Properties
                name: "More Commands", //Second Embed Field Name
                value: "Coming Soon!", //Second Embed Field Context/Value
                inline: false //Second Embed Field Inline Boolean. Set to 'true' if you want to put the field in the same line as before. Set to 'false' if you want to put the field in a new line.
            }
            )
            .setFooter("Discord.Js Example") //Embed Footer
            message.channel.send(helpembed); //Send the Embed Message
    }
})
client.login(token);