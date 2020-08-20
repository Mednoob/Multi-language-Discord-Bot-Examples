const eris = require("eris");                                                                                                               //Eris | Required as a Lib/Wrapper for the javascript code
const { token } = require("./Config/Token.json");                                                                                          //Token | Required for logging in the bot
const { prefix } = require("./Config/Prefix.json");                                                                                       //Prefix | Required to call the bot
const { Message } = require("eris");                                                                                                     //Message | Dunno where is this thing from. It's automatically inside this file
const prettyms = require("pretty-ms");                                                                                                   //
                                                                                                                                         //
if(token === "") {                                                                                                                       //
    console.log("Please, put the bot's token in the Token.json");                                                                        //
    return;                                                                                                                              //
}                                                                                                                                        //Cancel out the current logging attempt if the bot's token is null
                                                                                                                                         //
if(prefix === "") {                                                                                                                      //
    console.log("Please, put the bot's prefix in the Prefix.json");                                                                      //
    return;                                                                                                                              //
}                                                                                                                                        //Cancel out the current logging attempt if the bot's prefix is null
                                                                                                                                         //
                                                                                                                                         //
var client = new eris(token);                                                                                                            //New connection client made using eris with the Bot's Token
let clientuptime = client.uptime                                                                                                         //
client.on("ready", () => {                                                                                                               //When the bot is ready
    console.log(client.user.username + " is ready!");                                                                                    //Add log in the console: "Bot is ready!"
});                                                                                                                                      //
client.on("messageCreate", (msg) => {                                                                                                    //
    if(!msg.content.startsWith(prefix)) return;                                                                                          //The bot will not respond any message that is not started with its prefix. This code usually use to prevent someone using the bot to spam by just typing non-prefixed message. You may delete this code
    if(msg.content === prefix + "help") {                                                                                                //If the message content is prefix and help
        client.createMessage(msg.channel.id, {                                                                                           //Create a message
            embed: {                                                                                                                     //Embed Message Properties
                title: "Help Command",                                                                                                   //Embed Title
                description: "List of **Commands** of this bot.\nLook **Below**.",                                                       //Embed Description. Use "\n" to put the text in a new line
                author: {                                                                                                                //Embed Author Properties
                    name: msg.author.username,                                                                                           //Embed Author Name
                    icon_url: msg.author.avatarURL                                                                                       //Embed Author Icon
                },                                                                                                                       //
                color: 299646,                                                                                                           //Embed Color. May be shown in Hex or a Base-10 Integer
                fields: [                                                                                                                //Embed Fields Array
                    {                                                                                                                    //First Embed Field Properties
                        name: "Basic Commands",                                                                                          //First Embed Field Name
                        value: "`help`",                                                                                                 //First Embed Field Context/Value
                        inline: true                                                                                                     //First Embed Field Inline Boolean. Set to 'true' if you want to put the field in the same line as before. Set to 'false' if you want to put the field in a new line.
                    },                                                                                                                   //
                    {                                                                                                                    //Second Embed Field Properties
                        name: "Statistic Commands",                                                                                      //Second Embed Field Name
                        value: "`uptime`",                                                                                               //Second Embed Field Context/Value
                        inline: false                                                                                                    //Second Embed Field Inline Boolean. Set to 'true' if you want to put the field in the same line as before. Set to 'false' if you want to put the field in a new line.
                    }                                                                                                                    //
                ],                                                                                                                       //
                footer: {                                                                                                                //Embed Footer Properties
                    text: "Eris Example"                                                                                                 //Embed Footer Text
                }                                                                                                                        //
            }                                                                                                                            //
        });                                                                                                                              //
    }                                                                                                                                    //
    if(msg.content == prefix + "uptime"){                                                                                                //If the message content is prefix and uptime
        const uptimecmduptime = prettyms(client.uptime, {verbose: true})                                                                 //Create a new variable that includes the bot uptime. Variable name is `uptimecmduptime`
        client.createMessage(msg.channel.id, {                                                                                           //Create a Message
            embed: {                                                                                                                     //Embed Properties
                description: "**Bot Uptime:** " + uptimecmduptime,                                                                       //Embed Description including bot uptime in it
                color: 299646                                                                                                            //Embed Color
            }                                                                                                                            //
        })                                                                                                                               //
    }                                                                                                                                    //
});                                                                                                                                      //med_update=1
client.connect();                                                                                                                        //The bot log in to Discord
