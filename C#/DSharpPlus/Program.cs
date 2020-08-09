using System;
using DSharpPlus;
using Newtonsoft.Json;
using System.IO;
using System.Threading.Tasks;

namespace DiscordDSharp
{
	class Program
	{

		static DiscordClient botclient; 
		static void Main(string[] args)
		{
			MainAsync(args).ConfigureAwait(false).GetAwaiter().GetResult();
		}
		static async Task MainAsync(string[] args)
		{
			string prefix = "";
			string token = "";
			botclient = new DiscordClient(new DiscordConfiguration
			{
				Token = token,
				TokenType = TokenType.Bot
			});
			botclient.Ready += async client =>
			{
				Console.WriteLine(botclient.CurrentUser.Username + " is Ready!");
			};
			botclient.MessageCreated += async msg =>
			{
				if(msg.Message.Content == prefix + "help") {
					var helpembed = new DSharpPlus.Entities.DiscordEmbedBuilder(){
						Color = new DSharpPlus.Entities.DiscordColor(299646),
						Author = new DSharpPlus.Entities.DiscordEmbedBuilder.EmbedAuthor
						{
							Name = msg.Author.Username,
							IconUrl = msg.Author.AvatarUrl
						},
						Title = "Help Command",
						Description = "List of **Commands** of this bot.\nLook **Below**.",
						Footer = new DSharpPlus.Entities.DiscordEmbedBuilder.EmbedFooter
						{
							Text = "DSharpPlus Example"
						},
					};
					helpembed.AddField("Basic Commands", "`help`", true);
					var helpembedbuild = helpembed.Build();
					await msg.Message.Channel.SendMessageAsync(embed: helpembedbuild);
				}
			};
				await botclient.ConnectAsync();
				await Task.Delay(-1);
		}
	}
}
