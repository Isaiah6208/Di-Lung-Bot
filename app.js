// Loads the discord.js library
const Discord = require("discord.js");
const client = new Discord.Client();

//    <-- JSON File Documentation -->
// config.token contains the bot's token
// config.prefix contains the message prefix.
const config = require("./config.json");

client.on("ready", () => 
{
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels.`); 
});

client.on("message", async message => 
{  
  // Ignores other bot commands.
  if(message.author.bot) return;
  
  // Ignores messages not set by the prefix.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    
  if(command === "help") 
  {
    message.channel.send("Commands: 'bio', 'praise', 'yiff', 'woof', 'bark', 'grr', summon1', 'summon2', 'summon3', 'bully', 'secret'.\n\nbio - Informs the user about Di Lung.\npraise - Praise Di Lung!\nyiff, woof, bark - Provoke Di Lung.\ngrr - Make Di Lung have enough of you.\nsummon1 - Video 1 featuring Di Lung.\nsummon2 - Video 2 featuring Di Lung.\nsummon3 - Video 3 featuring Di Lung.\nbully - Get revenge on Di Lung.\nsecret - Find out : ^ )\n\nType '+COMMAND' to have Di Lung follow up with a command (note that this is not case sensitive).\nExample Input: '+yiff'\nTo have him say something, type '+say DESIRED-TEXT'. It's important to leave a space after the command call.\nExample Input: '+say Watch where you're going ya fool!'");
  }
  
  if(command === "praise") 
  {
    message.channel.send("I'm better than you aHaHaAhaAhaahahaA!!!!");
  }

  if(command === "say") 
  {
    const sayMessage = args.join(" "); 
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  if(command === "boop") 
  { 
    message.channel.send("WATCH WHERE YOU'RE GOING YA FOOL!");
  }

  if(command === "grr") 
  { 
    message.channel.send("As dog, you NO GOOD!");
  }

  if(command === "yiff") 
  {
    message.channel.send("No stick? You no good ass dog! TWO TIME!!!");
  }

  if(command === "woof") 
  { 
    message.channel.send("No stick? You no good ass dog! TWO TIME!!!");
  }

  if(command === "bark") 
  {
    message.channel.send("No stick? You no good ass dog! TWO TIME!!!");
  }

  if(command === "summon1") 
  {
    message.channel.send("https://www.youtube.com/watch?v=gwHzUW01CS0&t=1s");

  }

  if(command === "summon2") 
  {
    message.channel.send("https://www.youtube.com/watch?v=cUV3JK_IfvM");
  }

  if(command === "summon3") 
  {
    message.channel.send("https://www.youtube.com/watch?v=atv_ZSdN954");
  }
  
  if(command === "bully") 
  {
    message.channel.send("https://78.media.tumblr.com/dc89ac5f17639410759981c3b3d4143f/tumblr_osbsupFHhk1sipm1io1_500.gif");
  }

  if(command === "bio") 
  {
    message.channel.send("Di Lung is a stuck-up Chinese-American who drives what appears to be a 1950's red Corvette. He was created and voiced by animator Tim Chi Ly. His appearances are usually random and short, and he is usually seen building crazy inventions, which tend to serve as a plot device for the episode.\nhttps://yt3.ggpht.com/-ZHsxJnrdAew/AAAAAAAAAAI/AAAAAAAAAAA/y88nyhPf1wA/s240-c-k-no-mo-rj-c0xffffff/photo.jpg");
  }

  if(command === "secret") 
  {
    message.channel.send("Isaiah is #1");
  }
    
});

client.login(config.token);
