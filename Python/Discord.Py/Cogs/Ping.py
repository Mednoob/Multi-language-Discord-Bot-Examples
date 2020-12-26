import discord
import time
from discord.ext import commands


class Ping(commands.Cog):
    def __init__(self, client):
        self.client = client

    @commands.command()
    async def ping(self, ctx): # This was inside '__init__' before
        before_typing = time.monotonic()
        await ctx.trigger_typing()
        after_typing = time.monotonic()
        ms = int((after_typing - before_typing) * 1000)
        msg = '*{}*, ***PONG!*** (~{}ms)'.format(ctx.message.author.mention, ms)
        em = discord.Embed(color = 0XFF8C00, description = msg)
        em.set_footer(text = "{}#{}".format(ctx.author.name, ctx.author.discriminator),
                      icon_url = "{}".format(ctx.author.avatar_url))
        await ctx.channel.send(embed = em)
        return

def setup(client):
    client.add_cog(Ping(client))
