require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
   
  console.log('Kigu, am I alive?')
  let activities = [`within The Infinite Library | k.help`, `Cyanide Heights | k.help`, `with the nexus star | k.help`, `with Astral Sorcery | k.help`, `inside the Cyanide Spire | k.help`  ],i = 6;
  setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"PLAYING",}), 60000)
});

const prefix = "k."
const BotOwner = "690565986696429619"

client.on("message", (message) => {
    
    

    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send(":bell: I am still awake!")
    } else 
    if (message.content.startsWith(prefix + "info")) {
        message.channel.send({embed: {
            color: 14725375,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            description: "Salutations, I am KyurenAI, a standard information bot for Cyanide Heights. I am made using discord.js by <@690565986696429619> and more functions will come in the future for me. Use `k.help` for a command list!",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Discord.js v12 | Bot version 3.1"
            }
          }
        });
    } else
    if (message.content.startsWith(prefix + "invite")) {
        message.channel.send("ahh, I am glad that you wanted to let your friends join. Use this link here. Thanks!\nhttps://discord.gg/VrJAvgddbx")
    } else
    if (message.content.startsWith(prefix + "support")) {
        message.channel.send({embed: {
            color: 14725375,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Cyanide Heights Support Tab",
            description: "Salutations. How may I be of assistance?",
            fields: [{
                name: "Official Twitter",
                value: "Click/tap [here](https://twitter.com/CyanideHeights) to visit our twitter!"
              },
              {
                name: "Visit our official website",
                value: "Click/tap [here](https://cyanideheights.blogspot.com/) to head to The Cyanide Archives."
              },
              {
                name: "FAQs",
                value: "Click/tap [here](https://cyanideheights.blogspot.com/p/faq-thread-06012021.html) to get FAQs! (note: this is yet to be updated.)"
              },
              {
                  name: "Make an Offline Report Ticket" ,
                  value: "Click/Tap [here](https://forms.gle/2xmmi7eJD99SrBANA) to access the system."
              },
              {
                  name: "Server Statistics (December 2020)",
                  value: "Click/tap [here](https://cyanideheights.blogspot.com/2020/12/server-statistics-december-2020.html) to view last month's stats."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Cyanide Heights - Offline Support and Information Tab"
            }
          }
        });
    } else
    if (message.content.startsWith(prefix + "help")) {
        message.channel.send("Here is a list of commands as of date:\n\n```k.support - Access the support tab.\nk.ping - check to see if I am awake.\nk.info - Check who made me and what I am running on.\nk.invite - invite your friends to Cyanide Heights.\nk.botinvite - invite me to your guild!\n\n[CyanideHeights Members Only commands]\n\nk.vote - Support us by voting/rating our server!```")
    } else
    if (message.content.startsWith(prefix + "botinvite")) {
        message.channel.send("Were you hoping that you can get an invite? Sorry. I do not want to go anywhere else.")
    } else
    if (message.content.startsWith(prefix + "endmirinae")){
        message.delete()
        message.channel.send("Disconnecting from Discord. Good day, everyone."),
        setTimeout(function(){ 
            client.destroy() 
         }, 3000); 
    } else
    if (message.content.startsWith(prefix + "luki")) {
      message.channel.send("Luki is cute! and no one can change the way I am programmed to say it!")
    } else
    if (message.content.startsWith(prefix + "vote")) {
      message.channel.send({embed: {
        color: 14725375,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "CHST - Vote/Rate Cyanide Heights",
        description: "Salutations, and thank you for opening this tab.\nhere are the available sites for you to vote or rate our server!",
        fields: [{
            name: "Disboard",
            value: "Click/tap [here](https://disboard.org/server/747124490101588068) to rate us on Disboard!"
          },
          {
            name: "Top.gg (DSL)",
            value: "Click/tap [here](https://top.gg/servers/747124490101588068/vote) to vote for our server!"
          },
          {
            name: "Discordservers.me",
            value: "Click/tap [here](https://discordservers.me/servers/747124490101588068/upvote) to give our server an upvote!"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Cyanide Heights - Voting/Rating Tab"
        }
      }
    })      
    } else
        message.channel.send("Sorry, I do not understand you. Use `k.help` for the list!")
})