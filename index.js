require('dotenv').config()

const ms = require('ms')
const Discord = require('discord.js')
const client = new Discord.Client();

var http = require('http');  //Hosting on places like repl.it, recommended!
http.createServer(function (req, res) {   
  res.write("I'm Alive");   
  res.end(); 
}).listen(8080);

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
   
  console.log('I have reconnected to the Spire. Awaiting orders.')

  let activities = [`in the Library | k.help`, `Cyanide Heights | k.help`, `with the nexus star | k.help`, `with Astral Sorcery | k.help`, `between rifts | k.help`, `with the Sephirah | k.help`  ],i = 6;
  setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"PLAYING",}), 30000)

});

client.on("guildMemberAdd", member => {
  
  const role1 = member.guild.roles.cache.find(r => r.name === "silenced");
  const role2 = member.guild.roles.cache.find(r => r.name === "Dyno Phase");
  const role3 = member.guild.roles.cache.find(r => r.name === "Special Passes ----------------------------------------------");
  const role4 = member.guild.roles.cache.find(r => r.name === "Information --------------------------------------------------");
  const role5 = member.guild.roles.cache.find(r => r.name === "Region -------------------------------------------------------");
  const chss = client.channels.cache.find(c => c.name === "❗-holding-area")
  const silenced = client.channels.cache.find(c => c.name === "🔐-silenced-users")
  if (Date.now() - member.user.createdAt < 1000*60*60*24*10) { 

    member.roles.add(role1);
    member.roles.add(role2);
    member.roles.add(role3);
    member.roles.add(role4);
    member.roles.add(role5);
chss.send('Salutations, your account age seems to be below the threshold set, which counts you as being new to Discord. Please seek staff assistance at <#771304054236119050> before we allow you to verify for Phase 01. We thank you for your cooperation!');
silenced.send(`Good day, <@${member.user.id}> . Here is the question the bureau would like to ask you:\n\n> What is a fandom, and what does one usually do in a fandom? (Minimum of 5 sentences)`);
silenced.send("Do answer the said questions and wait for further notice. We thank you for your patience!")
  } else {
    member.roles.add(role2);
    member.roles.add(role3);
    member.roles.add(role4);
    member.roles.add(role5);
chss.send(`Salutations <@${member.user.id}>, and welcome to Cyanide Heights! To begin with verification, type **k.begin** and we shall start making your verification request. Once done, please wait for a notification either within this channel or via me, KyurenAI for updates.\n\nWe hope you enjoy your stay after the 2FA Verification process, and thank you for your patience!`)
  }
  });




client.on("message", async message => {

  const prefixes = ['K.', 'k.']
  let hasPrefix = false;
    prefixes.some(p => message.content.startsWith(p)) ? hasPrefix = true : null;
    if(!hasPrefix) return;
  const args = message.content.slice(prefixes.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

    if (message.author.bot) return;
     

    if (command === "ping") {
        message.channel.send(`:bell: I am still awake. Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    } else 
        if (command === "info") {
        message.channel.send({embed: {
            color: 14725375,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            description: "Salutations, I am KyurenAI, the Public Information and Security bot exclusive for Cyanide Heights. I am made using discord.js by <@BOT_OWNER> and more functions will come in the future for me. Use `k.help` for a command list!",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Discord.js v12 | Cyanide Heights Security and Information Bot"
            }
          }
        });
    } else
    if (command === "invite") {
        message.channel.send("ahh, I am glad that you wanted to let your friends join. Use this link here. Thanks!\nhttps://discord.gg/bjKGf7F8pT")
    } else
    if (command === "links") {
        meliki(message)
    } else
    if (command === "help") {
      menu(message)
    } else
    if(command === "help-general"){
      help(message)
    } else
    if(command === "help-social"){
      helpsocial(message)
    } else
    if (command === "endmirinae"){
 endbot(message)
    } else
    if (command === "cute") {
      nou(message)
    } else
    if (command === "vote") {
      vote(message)
    } else
    if (command === "apply"){
      applications(message)
    } else 
    if (command === "begin") {
      seguridad(message)
    } else
    if (command === "decline") {
      nope(message)
    } else 
    if (command === "accept") {
      toregistry(message)
    } else
       if (command === "support"){
          reported(message)
       } else
       if (command === "validate"){
         feelings(message)
       } else
       if(command === "lore-fact"){
         lore(message)
       } else
       if(command === "destroy"){
         destroyed(message)
       } else
        message.channel.send("Sorry, I do not understand you. Use `k.help` for the list!")
})

function meliki(message){
  message.channel.send({embed: {
    color: 14725375,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Cyanide Heights Information Tab",
    description: "Official Links of Cyanide Heights.",
    fields: [{
        name: "Official Twitter",
        value: "Click/tap [here](SERVER_TWITTER) to visit our twitter!"
      },
      {
        name: "Visit our official website",
        value: "Click/tap [here](SERVER_WEBSITE_WIX) to head to the website."
      },
      {
        name: "FAQs",
        value: "Click/tap [here](SERVER_WEBSITE_FAQ_WIX) to get FAQs!"
      },
      {
          name: "Server Statistics",
          value: "Click/tap [here](SERVER_WEBSITE_STATS_WIX) to view last month's stats."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Cyanide Heights - Information Tab"
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
        name: "Discords.com (Formerly Discordservers.me)",
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
  if (message.author.id !== 'BOT_OWNER') {
    message.channel.send("Hey! You are not my developer! >_>")
  } else
  message.channel.send("Disconnecting from Discord. Good day, everyone."),
  setTimeout(function(){ 
      client.destroy() 
   }, 3000);
}

function applications(message){
   message.reply("You seem to be a brave user. I have sent the requirements of staffs and the link to the applications in DMs.")
  message.author.send({embed: {
    color: 14725375,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "CHST - CHMB Staff Applications",
    description: "here are the positions you can attain in the server staff team.",
    fields: [{
        name: "General Requirements",
        value: "You must have the following requirements:\n-is trustworthy\n-has no violations from past month\n-must be in the server for a month\n-has knowledge of <#753782403486449806>\n-fluent in english\n-age is 16+ (18+ for Admin)"
      },
      {
        name: "Specific Requirements (Administrator)",
        value: "\n-has some experience of being staff"
      },
      {
        name: "Specific Requirements (Developer)",
        value: "-has knowledge in developing servers"
      },
      {
        name: "Specific Requirements (Counsellor)",
        value: "-has knowledge in giving support to people who seek help/advice"
      },
      {
        name: "Specific Requirements (Events Coordinator)",
        value: "-has knowledge in developing events or giveaways"
      },
      {
        name: "Apply here",
        value: "[click/tap me](https://tinyurl.com/CHMB-Application-Forms) to get to the applications."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Cyanide Heights - Staff Applications Tab"
    }
  }
})      
   message.author.send("Are you up for the challenge? Good Luck!")
}

function seguridad(message){

  const staffchan =  client.channels.cache.find(c => c.name === "applications")

 const questions = {
    firstQuestion: "First question, where did you come from? If it was from a friend, do type their Name and Discriminator (example: Wumpus#1234).\n\n> If I stopped midway, please run the command again. Thanks!",
    secondQuestion: "Alright, let's proceed. What brings you to join this server?\n\n> If I stopped midway, please run the command again. Thanks!",
    thirdQuestion: "I see. Have you been to a furry community or in any other community? like Anime or Undertale perhaps?\n\n> If I stopped midway, please run the command again. Thanks!",
    fourthQuestion: "Noted. Do you happen to have a fursona? If so, what would your cute sona be?\n\n> If I stopped midway, please run the command again. Thanks!",
    fifthQuestion: "Got it, a cutie indeed. Anyhow, how long have you been staying in your respective fandom?\n\n> If I stopped midway, please run the command again. Thanks!",
    sixthQuestion: "Okay. Give at least three rules that this server is currently enforcing.\n\n> If I stopped midway, please run the command again. Thanks!",
    seventhQuestion: "Last thing before I send this to the gatekeepers: What is the Server Authentication Code? If you have read the rules, you should be able to say it.\n\n> If I stopped midway, please run the command again. Thanks!",
  }


  message.reply("let's begin. Please visit me in DMs (make sure it's open or this won't work!). Type `cancel` if you made a mistake in the process, or you don't wanna start now.")
        message.author.send(questions.firstQuestion).then(msg => {
            const filter1 = m => m.author.id === message.author.id
            msg.channel.awaitMessages(filter1, {
                time: 5 * 60000,
                max: 1
              }).then(messages => {
                let msg1 = messages.first().content
                if(msg1.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.begin` if you are going to try again.")
                message.author.send(questions.secondQuestion).then(msg => {
                    const filter1 = m => m.author.id === message.author.id
                    msg.channel.awaitMessages(filter1, {
                        time: 5 * 60000,
                        max: 1
                      }).then(messages => {
                        let msg2 = messages.first().content
                        if(msg1.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.begin` if you are going to try again.")
                        message.author.send(questions.thirdQuestion).then(msg => {
                            const filter1 = m => m.author.id === message.author.id
                            msg.channel.awaitMessages(filter1, {
                                time: 5 * 60000,
                                max: 1
                              }).then(messages => {
                                let msg3 = messages.first().content
                                if(msg1.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.begin` if you are going to try again.")
                                message.author.send(questions.fourthQuestion).then(msg => {
                                    const filter1 = m => m.author.id === message.author.id
                                    msg.channel.awaitMessages(filter1, {
                                        time: 5 * 60000,
                                        max: 1
                                      }).then(messages => {
                                        let msg4 = messages.first().content
                                        if(msg1.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.begin` if you are going to try again.")
                                        message.author.send(questions.fifthQuestion).then(msg => {
                                            const filter1 = m => m.author.id === message.author.id
                                            msg.channel.awaitMessages(filter1, {
                                                time: 5 * 60000,
                                                max: 1
                                              }).then(messages => {
                                                let msg5 = messages.first().content
                                                if(msg1.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.begin` if you are going to try again.")
                                                message.author.send(questions.sixthQuestion).then(msg => {
                                                    const filter1 = m => m.author.id === message.author.id
                                                    msg.channel.awaitMessages(filter1, {
                                                        time: 5 * 60000,
                                                        max: 1
                                                      }).then(messages => {
                                                        let msg6 = messages.first().content
                                                        if(msg1.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.begin` if you are going to try again.")
                                                        message.author.send(questions.seventhQuestion).then(msg => {
                                                            const filter1 = m => m.author.id === message.author.id
                                                            msg.channel.awaitMessages(filter1, {
                                                                time: 5 * 60000,
                                                                max: 1
                                                              }).then(messages => {
                                                                let msg7 = messages.first().content
                                                                if(msg5.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.begin` if you are going to try again.")
                                                                message.author.send("Looks like my job is done, I have sent your responses to the Bureau's Office. Should we have additional questions, we will ask you in the holding area. Thank you for your patience!\n\n> If your request has not been entertained for 10-30 minutes, please alert any online Admins (Library Sephirahs), Co-Owner (Library Directors), or the Library Regent (Owner) to fast track, as slim chances are that it may or may not have been delivered. Thanks!").then(msg => {
                                                                    staffchan.send(
                                                                        new Discord.MessageEmbed()
                                                                            .setTitle('New Verification Request!')
                                                                            .setColor('#e0b0ff')
                                                                            .setDescription(`This application was submitted by ${message.author.tag} (${message.author.id}).\nCreated: ${message.author.createdAt}`)
                                                                            .addField(questions.firstQuestion, "Answer: " + msg1)
                                                                            .addField(questions.secondQuestion, "Answer: " + msg2)
                                                                            .addField(questions.thirdQuestion, "Answer: " + msg3)
                                                                            .addField(questions.fourthQuestion, "Answer: " + msg4)
                                                                            .addField(questions.fifthQuestion, "Answer: " + msg5)
                                                                            .addField(questions.sixthQuestion, "Answer: " + msg6)
                                                                            .addField(questions.seventhQuestion, "Answer: " + msg7)
                                                                            .addField("instructions:", "`k.accept` to accept - `k.decline` to decline - remember to ask additional questions when in doubt!\n\nGATEKEEPERS ONLY, OTHER STAFF MAY REVIEW VIA THE STAFF CHAT.")
                                                                            
                                                                            )
                                                                    })
                                                                  })
                                                                })
                                                              })
                                                            })
                                                          })
                                                        })
                                                      })
                                                    })
                                                  })
                                                })
                                              })
                                            })
                                          })
                                        })
                                      }

                                      function nope(message){
                                        message.delete()
                                          let User = message.mentions.users.first()
                                          if(!User) { message.channel.send("Erm, you forgot to target the user you want to decline their application tho- :eyes: (tip: use `<@(insert user id here)>` if you wanna use it far away! Kigu has yet to resolve this")
                                          } else if(message.member.roles.cache.find(r => r.name === "silenced")) 
                                      {
                                        message.channel.send("Denied. User is a new account and is not allowed to bypass validation (1/3). Make sure they passed through the first phase (removing the silenced role) then use it once their application arrived at the applications channel.")
                                      } else{
                                          message.channel.send("User is on hold and have been notified that their applications were denied. pay them a visit at the holding area! ")
                                          User.send(`Your application to ${message.guild.name} got declined by the Sephirahs, it could be that they may have additional security questions. Please do wait for their instructions!`)
                                    }}

                                    function toregistry(message){
                                      message.delete()
                                        let User = message.mentions.users.first()
                                        
                                        if(!User) 
                                        {message.channel.send("Erm, you forgot to target the user you want to accept their application tho- :eyes: (tip: use `<@(insert user id here)>` if you wanna use it far away! Kigu has yet to resolve this issue.")
                                      } else if(message.member.roles.cache.find(r => r.name === "silenced")) 
                                      {
                                        message.channel.send("Denied. User is a new account and is not allowed to bypass validation (1/3). Make sure they passed through the first phase (removing the silenced role) then use it once their application arrived at the applications channel.")
                                      }else{
                                        const member = message.guild.members.cache.get(User.id)
                                        message.channel.send("User has been notified and moved to the registry.")
                                        member.roles.remove('UNVERIFIED_ROLE')
                                        User.send(`Your application to ${message.guild.name} has been accepted and you have been moved to phase two.Type "furregister" in the registry and my companion, Sheri, will take it from here. arrivederci!\n\nIf you have issues with the registry, please do not hesitate to reach out to any available staffs.`)
                                      }}
                                      function help(message) {
                                        message.reply("I have sent a list of my commands in DMs.")
                                      message.author.send({embed: {
                                        color: 14725375,
                                        author: {
                                          name: client.user.username,
                                          icon_url: client.user.avatarURL
                                        },
                                        title: "KyurenAI Help Tab",
                                        description: "General Commands List for KyurenAI",
                                        fields: [{
                                            name: "Information Tab `k.links`",
                                            value: "Opens the tab for this server's twitter, website, FAQ Page, and Stats Page."
                                          },
                                          {
                                            name: "Request assistance `k.support`",
                                            value: "Noticed anything unusual, wanting to partner up, or a private feedback? open up a ticket on the spot."
                                          },
                                          {
                                            name: "Status Checker `k.ping`",
                                            value: "Just making sure to see if I continue to respond."
                                          },
                                          {
                                              name: "Invite a friend `k.invite`" ,
                                              value: "use this to access the server's official yet permanent invite link."
                                          },
                                          {
                                              name: "Vote/rate Cyanide Heights `k.vote`",
                                              value: "Vote/rate our server on different server listings!"
                                          },
                                          {
                                            name: "Apply for Staff `k.apply`",
                                            value: "Opens the tab for the list of positions attainable, as well as the referral link for applicatons" 
                                          },
                                          {
                                            name: "About me `k.info`",
                                            value: "Learn about what am I and who made me!"
                                          }
                                        ],
                                        timestamp: new Date(),
                                        footer: {
                                          icon_url: client.user.avatarURL,
                                          text: "Cyanide Heights - General Commands List"
                                        }
                                      }
                                    });
                                    }
                                    function reported(message){

                                      const alerti =  client.channels.cache.find(c => c.name === "report-tickets")
                                    
                                      const questions = {
                                        firstQuestion: "Please indicate the type of your report: Member report(member violation), CHMB Report(staff violation), Private Feedback, or Partnership Inquiry.\n\n> If I stopped midway, please run the command again. Thanks!",
                                        secondQuestion: "Alright, may I ask if you would like to involve users in this ticket? type their server nickname, or their name and discriminator (ex: Wumpus/Wumpus#1234)\n\n> If I stopped midway, please run the command again. Thanks!",
                                        thirdQuestion: "Okay, Please type here the details of your ticket. The more accurate this can be, the faster it can get to the right personnel!\n\n> If I stopped midway, please run the command again. Thanks!",
                                        fourthQuestion: "mhm, got it. Now, is there a place where the situation occured (reporting)? Type `in DMs` if it happened in DMs, or `none` if none.\n\n> If I stopped midway, please run the command again. Thanks!",
                                        fifthQuestion: "If this is a partnership inquiry, please type a short description of your server and its invite link here. If not, type `skip`\n\n> If I stopped midway, please run the command again. Thanks!",
                                        sixthQuestion: "(reporting, optional) Did it happen in a channel? get its discord message link and send it here.\n\nnote: you can get it by right-clicking the message and `copy message link` (Desktop Client) or holding the message, press `share` and copy it to clipboard (Mobile Client). If none, type `none`. If I stopped midway, please run the command again. Thanks!",
                                      }
                                      message.delete()
                                      message.channel.send("how may I be of assistance? You seemed troubled. Please visit me in DMs(make sure it's open or this won't work!). Type `cancel` if you made a mistake in the process, or you opened me by accident.")
                                            message.author.send(questions.firstQuestion).then(msg => {
                                                const filter1 = m => m.author.id === message.author.id
                                                msg.channel.awaitMessages(filter1, {
                                                    time: 5 * 60000,
                                                    max: 1
                                                  }).then(messages => {
                                                    let msg1 = messages.first().content
                                                    if(msg1.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.support` if you are going to try again.")
                                                    message.author.send(questions.secondQuestion).then(msg => {
                                                        const filter1 = m => m.author.id === message.author.id
                                                        msg.channel.awaitMessages(filter1, {
                                                            time: 5 * 60000,
                                                            max: 1
                                                          }).then(messages => {
                                                            let msg2 = messages.first().content
                                                            if(msg2.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.support` if you are going to try again.")
                                                            message.author.send(questions.thirdQuestion).then(msg => {
                                                                const filter1 = m => m.author.id === message.author.id
                                                                msg.channel.awaitMessages(filter1, {
                                                                    time: 5 * 60000,
                                                                    max: 1
                                                                  }).then(messages => {
                                                                    let msg3 = messages.first().content
                                                                    if(msg3.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.support` if you are going to try again.")
                                                                    message.author.send(questions.fourthQuestion).then(msg => {
                                                                        const filter1 = m => m.author.id === message.author.id
                                                                        msg.channel.awaitMessages(filter1, {
                                                                            time: 5 * 60000,
                                                                            max: 1
                                                                          }).then(messages => {
                                                                            let msg4 = messages.first().content
                                                                            if(msg4.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.support` if you are going to try again.")
                                                                            message.author.send(questions.fifthQuestion).then(msg => {
                                                                                const filter1 = m => m.author.id === message.author.id
                                                                                msg.channel.awaitMessages(filter1, {
                                                                                    time: 5 * 60000,
                                                                                    max: 1
                                                                                          }).then(messages => {
                                                                                            let msg5 = messages.first().content
                                                                                            if(msg5.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.support` if you are going to try again.")
                                                                                            message.author.send(questions.sixthQuestion).then(msg => {
                                                                                                const filter1 = m => m.author.id === message.author.id
                                                                                                msg.channel.awaitMessages(filter1, {
                                                                                                    time: 5 * 60000,
                                                                                                    max: 1
                                                                                                  }).then(messages => {
                                                                                                    let msg6 = messages.first().content
                                                                                                    if(msg6.toLowerCase() === "cancel") return message.author.send("Alright, I'll stop. use `k.support` if you are going to try again.")
                                                                                                    message.author.send("Alright, your ticket has been made and noted, and I have sent it to the Bureau's Office. I swear on my tail that the report won't get anywhere else and deleted once dealt with. Thanks!\n\nnote: Abuse of this system may or may not get the bureau to take action on your account. You may also contact the Library Staff for assistance if there are any of them online, as there is a slim chance that it may not be delivered properly. Thanks!").then(msg => {
                                                                                                        alerti.send(
                                                                                                            new Discord.MessageEmbed()
                                                                                                                .setTitle('Ticket Received!')
                                                                                                                .setColor('#e0b0ff')
                                                                                                                .setDescription(`This ticket was submitted by ${message.author.tag} (${message.author.id}).\nCreated: ${message.author.createdAt}`)
                                                                                                                .addField("Type of Ticket:", "Answer: " + msg1)
                                                                                                                .addField("Involved users:", "Answer: " + msg2)
                                                                                                                .addField("Details:", "Answer: " + msg3)
                                                                                                                .addField("Location of Incident (reporting):", "Answer: " + msg4)
                                                                                                                .addField("Partner description/link (Partnership Inquiry)", "Answer: " + msg5)
                                                                                                                .addField("(Optional) Discord Message Link:", "Answer: " + msg6)
                                                                                                                .addField("Instructions:", "Tickets that already have been dealt with are scheduled for deletion (reacting with :wastebasket: can help us identify if the case is closed and is marked for deletion). React with :white_check_mark: if the issue is noticed (onto the embeds), and :x: if this ticket has been voided or will not be entertained. If it is being dealt with or on pending, react with :bookmark: .")
                                                                                                                )
                                                                                                        })
                                                                                                      })
                                                                                                    })
                                                                                                  })
                                                                                                })
                                                                                              })
                                                                                            })
                                                                                          })
                                                                                        })
                                                                                      })
                                                                                    })
                                                                                  })
                                                                                })
                                                              
                                                                          }

function feelings(message){
                                      message.delete()
                                        let User = message.mentions.users.first()
                                        if(!User) 
                                        {message.channel.send("Erm, you forgot to target the user you want to accept their application tho- :eyes: (tip: use `<@(insert user id here)>` if you wanna use it far away! Kigu has yet to resolve this issue.")
                                      } else {
                                        const member = message.guild.members.cache.get(User.id)
                                        message.channel.send("User has been validated and moved back to Phase 01.")
                                        member.roles.remove('SILENCED_ROLE')
                                        User.send("You have been validated to proceed with the 2FA Verification. To begin, type `k.begin` in the holding area and I will start making your verification request for Cyanide Heights.")
                                      }}

function nou(message){
let User = message.mentions.users.first()
  const cutieresp = ["is a cutie~!", "is not the cutie, but I bet you are, kind sir.", "is undeniably cute!", "is a cutie, and no one can change the way I am programmed to say this.", "is cute, hell, Lord Myrox approves this message.", "is a cutie, the Regent surely agrees with me!", "is not cute, you are!", "is not yet a cutie, but you are and it is undeniable!"]
const reply = cutieresp[Math.floor(Math.random() * cutieresp.length)];
const member = message.guild.members.cache.get(User.id)

  if(!User) {
    message.channel.send("sir, you dropped your target! (user not found)")
  } else {
 message.channel.send(`<@${member.user.id}>` + ' ' + reply)
  }
}

function lore(message){
  const loreresp = ["Iruna Kiguroki isn't actually a person, but an AI. She just looks like she had a female body hologram.", "Kigu is very hesitant to be the Spire's regent, but rather just wanted to remain as one of the Sairai Library's Directors. That way, when Iruna steps down/retires because of her maintenance being its final, Wulfus will now conduct the operations of the Library and have a stable communication with Kyuren when he returns to the Regency.", "The Spire has an entrance from the Heights, it's just inside Ultimea. This is so that the current Prime Minister can contact the Director of the Hall of Kira and the Hall of Artamiel, physically.", "If you are trying to look for where the Nexus Star is with my database, chances are, you won't be able to find it.", "Are you aware what kind of experiments does the Spire's Hall of Kyu Hou Kai are doing? It's....kinda top-secret. Some say that test subjects there often never return back to the Heights, alive. Others say that the employees there sometimes loses their mind, and turns into unexplainable monsters. Hence, they defeat them in a form of a suppression.", "Wulfus and Kyuren are not the only ones in the Library with the name 'Kiguroki'. There might be around 4-5 of them, and as far as I know, I think majority of them are wolves.", "How does a librarian in the Archives store a record from the Spire in the millions of aisles in the Sairai Grand Archives? They often use Magic to teleport their way through but we have special hallways underneath the library for faster access of Librarians.", "The Rifts are endless, more boundaries can be made when their representatives has reached out to the spire. I wonder how many can there be in the observable universe?", "What do demons and guardians in the Inferno do on their time as the spirits of war are absent? they hang around in opposite territories and interact with each other. I did saw one of the guardian ambassadors there, Melody, reading a book while some of his men are playing Poker with the other demons.", "If anyone is wondering what I run on as Kyuren's remains, am running on a tablet. Quite interesting for an AI with huge memory to be stored in a tablet. Don't ask Kyuren how when he gets back.", "*psst, I took one of the Spire's AI from Nora as Kyuren was permitted to. Those AI can be dangerous, depending on how they are programmed. Don't tell anyone or Kigu will shut me down >w>;;;*", "How many containment breaches happened within Kyu Hou Kai? more than 50 and around 75. Some of which had forced the Spire to request assistance from Outer Ultimea, hence the Rabbit Protocols, Rhino Protocols, and the Deer Protocols.", "Yes, there are many protocols and instructions a Spire Employee should know before getting in. Same goes with the National Guards of Ultimea and their respective offices. For Wulfus, an example he can give is that when there are uninvited guests inside the hidden corridors, they are to ~~kill them and turn them into books~~ Welcome them warmly into the hallways and grant the wisdom that which those guests seek.", "If you are reading this, I bet there are other tidbits of intel I can share but they are pretty hard to reach. RNG amiritre? X3 (Also you are adorable!)", "How does the library's hidden corridors be accessed? through invitations. Iruna generates one and sends it to the person the invite wanted to go to, in their pockets. Signing the invite means that you agree that you wanted to fight for the price of knowledge.", "Mirinae had the most number of visitors, people wanted to see the hidden secrets the city has. I think kigu knows some, but he probably had forgotten it.", "Flip-Zones are the most dangerous things a soldier of the Spire encounters during the War of Astatos. it flips the identity of one man to its opposite. One way I can put it is a kind man turning evil."]
const reply = loreresp[Math.floor(Math.random() * loreresp.length)]
 message.channel.send(reply)
}

function destroyed(message){
  let User = message.mentions.users.first()
  const User2 = message.author;
  const member = message.guild.members.cache.get(User.id)
  const member2 = message.guild.members.cache.get(User2.id)
    const cutieresp = [ `<@${member.user.id}>`  + ' **Has been destroyed by'+ ' ' + `<@${member2.user.id}>` +'!**', `<@${member.user.id}>`  + ' **was crushed by'+ ' ' + `<@${member2.user.id}>` + '!**', '**SIKE!! ' + `<@${member.user.id}>` + ` successfully breaks ` + `<@${member2.user.id}>` + "'s kneecaps!**", '**After dodging ' + `<@${member2.user.id}>` + "'s attack, " + `<@${member.user.id}>` + ' strikes back with vengeance!**', `<@${member2.user.id}>` + ' **brutally attacks ' + `<@${member.user.id}>` + '!!**' ]
    const giffu = ['https://cdn.discordapp.com/attachments/799471513639845899/833505320013267004/youtube-video-gif.gif', 'https://media.discordapp.net/attachments/824833954334638141/833508269951287306/youtube-video-gif_1.gif', 'https://media.discordapp.net/attachments/747133757575921806/797297698314780722/Hnet-image.gif', 'https://tenor.com/view/library-of-ruina-boundary-of-death-gif-19867096', 'https://cdn.discordapp.com/attachments/799471513639845899/833533339389919251/youtube-video-gif_2.gif', 'https://cdn.discordapp.com/attachments/799471513639845899/833533690713735219/youtube-video-gif_3.gif', 'https://cdn.discordapp.com/attachments/799471513639845899/833643640177819658/youtube-video-gif_6.gif', 'https://cdn.discordapp.com/attachments/799471513639845899/833643730996953108/youtube-video-gif_5.gif', 'https://media.giphy.com/media/A4vwCG8p3eJOXViX5i/giphy.gif', 'https://tenor.com/view/library-of-ruina-gif-21147361', 'https://media.discordapp.net/attachments/671671812500750373/836187005527523328/youtube-video-gif_7.gif']
  const reply1 = cutieresp[Math.floor(Math.random() * cutieresp.length)];
  const reply2 = giffu[Math.floor(Math.random() * giffu.length)];
  
  
    if(!User) {
      message.channel.send("sir, you dropped your target! (user not found)")
    } else {
   message.channel.send(' ' + reply1 + '\n' + reply2)
    }
  }

                                        function menu(message) {
                                        message.reply("I have sent a list of my commands in DMs.")
                                      message.author.send({embed: {
                                        color: 14725375,
                                        author: {
                                          name: client.user.username,
                                          icon_url: client.user.avatarURL
                                        },
                                        title: "KyurenAI Help Tab",
                                        description: "Commands List for KyurenAI. Please select which tab you want to see.",
                                        fields: [{
                                            name: "General Commands `k.help-general`",
                                            value: "The main commands of KyurenAI."
                                          },
                                          {
                                            name: "Social Commands `k.help-social`",
                                            value: "The current social commands of KyurenAI."
                                          
                                          }
                                        ],
                                        timestamp: new Date(),
                                        footer: {
                                          icon_url: client.user.avatarURL,
                                          text: "Cyanide Heights - Commands List Menu"
                                        }
                                      }
                                    });
                                    }

                                      function helpsocial(message) {
                                        message.reply("I have sent a list of my commands in DMs.")
                                      message.author.send({embed: {
                                        color: 14725375,
                                        author: {
                                          name: client.user.username,
                                          icon_url: client.user.avatarURL
                                        },
                                        title: "KyurenAI Help Tab",
                                        description: "Social Commands List for KyurenAI",
                                        fields: [{
                                            name: "Tell someone they're cute `k.cute`",
                                            value: "usage: k.cute <user mention>\nShall we tell someone that they're can't cute? btw you're a cutie as well~"
                                          },
                                          {
                                            name: "Destroy someone `k.destroy`",
                                            value: "usage: k.destroy <user mention>\nDestroys a user in...questionable ways :eyes:"
                                          },
                                          {
                                            name: "Cyanide Heights Lore Facts `k.lore-fact`",
                                            value: "Looking for tidbits about the lore? use this command to learn more!"
                                          },
                                          {
                                              name: "Note: Social Commands are a WIP!" ,
                                              value: "there may be more in the future. Stay tuned~!"
                                          }
                                        ],
                                        timestamp: new Date(),
                                        footer: {
                                          icon_url: client.user.avatarURL,
                                          text: "Cyanide Heights - Social Commands List"
                                        }
                                      }
                                    });
                                    }
