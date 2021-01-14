require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
   
  console.log('I have reconnected to the Spire. Awaiting orders.')

  let activities = [`in the Infinite Library | k.help`, `Cyanide Heights | k.help`, `with the nexus star | k.help`, `with Astral Sorcery | k.help`, `between rifts | k.help`, `Outside the Spire gates | k.help`  ],i = 6;
  setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"PLAYING",}), 30000)

});

client.on("guildMemberAdd", member => {
  
  const role1 = message.guild.roles.cache.find(r => r.name === "silenced");
  const role2 = message.guild.roles.cache.find(r => r.name === "Dyno Phase");
  const role3 = message.guild.roles.cache.find(r => r.name === "Special Passes ----------------------------------------------");
  const role4 = message.guild.roles.cache.find(r => r.name === "Information --------------------------------------------------");
  const role5 = message.guild.roles.cache.find(r => r.name === "Region -------------------------------------------------------");

  if (Date.now() - member.user.createdAt < 1000*60*60*24*10) { 

    member.roles.add(role1);
    member.roles.add(role2);
    member.roles.add(role3);
    member.roles.add(role4);
    member.roles.add(role5);
      client.channels.cache.get('holding area').send('Salutations, your account age seems to be below the threshold set, which counts you as being new to Discord. Please seek staff assistance at <#771304054236119050> before we allow you to verify for Phase 01. We thank you for your cooperation!');
      client.channels.cache.get('silenced users').send('Good day, new user. Here is the question the bureau would like to ask you:\n\n> What is a fandom, and what does one usually do in a fandom? (Minimum of 5 sentences)');
  } else {
    member.roles.add(role2);
    member.roles.add(role3);
    member.roles.add(role4);
    member.roles.add(role5);
    client.channels.cache.get('holding area').send('Salutations, and welcome to Cyanide Heights! To begin with verification, please answer the questions sent by Security (aka Dyno) in this channel.\n\nAfter answering, please do wait for the staff to approve your entry or ask additional security questions. We hope you enjoy your stay after the 2FA Verification process!\n\np.s: Were there no DMs sent? type `begin` to get the questions!');
      }
});
const prefix = "k."
const BotOwner = "Owner"

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
              text: "Discord.js v12 | Bot version 5.0"
            }
          }
        });
    } else
    if (message.content.startsWith(prefix + "invite")) {
        message.channel.send("ahh, I am glad that you wanted to let your friends join. Use this link here. Thanks!\nhttps://discord.gg/VrJAvgddbx")
    } else
    if (message.content.startsWith(prefix + "support")) {
        support(message)
    } else
    if (message.content.startsWith(prefix + "help")) {
        message.channel.send("Here is a list of commands as of date:\n\n```k.support - Access the support tab.\nk.ping - check to see if I am awake.\nk.info - Check who made me and what I am running on.\nk.invite - invite your friends to Cyanide Heights.\nk.botinvite - invite me to your guild!\nk.vote - Support us by voting/rating our server!\nk.apply - check the requirements for staff positions.```")
    } else
    if (message.content.startsWith(prefix + "botinvite")) {
        message.channel.send("Were you hoping that you can get an invite? Sorry. I do not want to go anywhere else.")
    } else
    if (message.content.startsWith(prefix + "endmirinae")){
 endbot(message)
    } else
    if (message.content.startsWith(prefix + "luki")) {
      message.delete()
      message.channel.send("Luki is cute! and no one can change the way I am programmed to say it!")
    } else
    if (message.content.startsWith(prefix + "vote")) {
      vote(message)
    } else
    if (message.content.startsWith(prefix + "apply")){
      applications(message)
    } else 
        message.channel.send("Sorry, I do not understand you. Use `k.help` for the list!")
})

function support(message){
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
        value: "Click/tap [here](twitter here!) to visit our twitter!"
      },
      {
        name: "Visit our official website",
        value: "Click/tap [here](website) to head to The Cyanide Archives."
      },
      {
        name: "FAQs",
        value: "Click/tap [here](site faq) to get FAQs!"
      },
      {
          name: "Make an Offline Report Ticket" ,
          value: "Click/Tap [here](report ticket! google form link) to access the system."
      },
      {
          name: "Server Statistics (December 2020)",
          value: "Click/tap [here](stats here link) to view last month's stats."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Cyanide Heights - Offline Support and Information Tab"
    }
  }
});
}

function vote(message) {
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
}

function endbot(message){
  message.delete()
  if (message.author.id !== 'BotOwner') {
    message.channel.send("Hey! You are not my developer! >_>")
  } else
  message.channel.send("Disconnecting from Discord. Good day, everyone."),
  setTimeout(function(){ 
      client.destroy() 
   }, 3000);
}

function applications(message){
  message.channel.send({embed: {
    color: 14725375,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "CHST - CHMB Staff Applications",
    description: "here are the positions you can attain in the server staff team.",
    fields: [{
        name: "General Requirements",
        value: "You must have the following requirements:\n-is trustworthy\n-has no violations from past month\n-must be in the server for a month\n-has knowledge of <#753782403486449806>\n-fluent in english\n-age is 16+ (moderators), and 18+ (other positions)"
      },
      {
        name: "Specific Requirements (Administrator)",
        value: "\n-has some experience of being staff"
      },
      {
        name: "Specific Requirements (Developer)",
        value: "-has knowledge in developing servers/events"
      },
      {
        name: "Specific Requirements (Counsellor)",
        value: "-has knowledge in giving support to people who seek help/advice"
      },
      {
        name: "Apply here",
        value: "[click/tap me](gform link) to get to the applications."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Cyanide Heights - Staff Applications Tab"
    }
  }
})      
}
