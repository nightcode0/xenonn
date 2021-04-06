const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "info",
        this.alias = [],
        this.usage = "x!info"
    }

    async run(client, message, args) {
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**AngelBACKUP**")
         .setThumbnail("https://cdn.discordapp.com/avatars/416358583220043796/8f702ebf579bce2d7a6f0a4419ac5faf.webp?size=1024")
         .setDescription("Server Backup")
         .addField("İNVİTE", "[CLİCK](https://discord.com/api/oauth2/authorize?client_id=780732225767473164&permissions=8&scope=bot)", true)
         .addField("Discord", "[CLİCK](https://discord.club/discord)")
         .addField("Prefix", "g!! , g! ", true)
         .addField("Servers", client.guilds.size, true)
         .addField("Users:", client.users.size, true)
         .setFooter("Owner ~ ✵『𝒟𝑒𝓈𝓉𝒾𝓃𝓎』ϟ  ♡ℰ#0360")
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}