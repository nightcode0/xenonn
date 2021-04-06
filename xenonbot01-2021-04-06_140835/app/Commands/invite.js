const { RichEmbed } = require("discord.js");
module.exports = class invite {
    constructor() {
        this.name = "invite",
        this.alias = [],
        this.usage = "x!invite"
    }

    async run(client, message, args) {
        try{
            let info = client.emojis.get("655091815401127966") || ":information_source:"
            client.generateInvite(['ADMINISTRATOR']).then(link => {
            let inviteEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`**Angel Family!**
[AngelBACKUP](${link})
[AngelBOT](https://discord.com/oauth2/authorize?client_id=775589008440950795&scope=bot&permissions=2146958847)
[AngelGUARD](https://discord.com/oauth2/authorize?client_id=780732225767473164&permissions=8&scope=bot)`)    
            .setColor("RANDOM")
            message.channel.send(inviteEmbed);
            })
        }catch(e) {
            throw e;
        }
    }
}