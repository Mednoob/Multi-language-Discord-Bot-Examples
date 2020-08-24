import discord

prefix = ""
token = ""
client = discord.Client()

@client.event
async def on_ready():
    print('{0.user} is Ready!'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content == prefix + "help":
        helpembed = discord.Embed()
        helpembed.title = "Help Command"
        helpembed.description = "List of **Commands** of this bot.\nLook **Below**."
        helpembed.add_field(name="Basic Commands", value="`help`", inline=True)
        helpembed.add_field(name="More Commands", value="Coming soon!", inline=False)
        helpembed.set_footer(text="Discord.Py Example")
        await message.channel.send(embed=helpembed)

client.run(token)