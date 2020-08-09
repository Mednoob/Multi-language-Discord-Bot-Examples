using System;
using System.Threading;
using System.Threading.Tasks;
using Discord;
using Discord.Commands;
using Discord.WebSocket;
using Discord.API;
using System.IO;

namespace Discord.Net_Example
{
	class Program
	{
		private static DiscordSocketClient botclient;

		static void Main(string[] args) => new Program().MainAsync(args).GetAwaiter().GetResult();
		private Task Log(LogMessage msg)
		{
			Console.WriteLine(msg.ToString());
			return Task.CompletedTask;
		}
		public async Task MainAsync(string[] args)
		{
			string token = "";
			botclient = new DiscordSocketClient();
			botclient.Log += Log;
			botclient.MessageReceived += MessageReceived;
			if (token == "")
			{
				Console.WriteLine("Please, put the bot's token in token string. After that, restart the console");
				await Task.Delay(-1);
			}
			else
			{
				await botclient.LoginAsync(TokenType.Bot, token);
				await botclient.StartAsync();


				await Task.Delay(-1);
			}
		}
		private async Task MessageReceived(SocketMessage message)
		{
			string prefix = "";
			if (message.Content == prefix + "help")
			{
				var helpembedbuilder = new EmbedBuilder()
				{
					Color = new Color(299646),
					Author = new EmbedAuthorBuilder
					{
						Name = message.Author.Username,
						IconUrl = message.Author.GetAvatarUrl().ToString()
					},
					Title = "Help Command",
					Description = "List of **Commands** of this bot.\nLook **Below**.",
					Footer = new EmbedFooterBuilder
					{
						Text = "Discord.Net Example"
					}
				};
				helpembedbuilder.AddField("Basic Commands", "`help`", true);
				helpembedbuilder.AddField("More Commands", "Coming Soon!", false);
				var helpembed = helpembedbuilder.Build();
				await message.Channel.SendMessageAsync(embed: helpembed);
			}
		}
	}
}
