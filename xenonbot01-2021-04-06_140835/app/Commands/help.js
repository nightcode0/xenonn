const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "help",
        this.alias = [""],
        this.usage = "**g!!help"
    }

    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Creating**__")
            .setDescription(`
            
            __**Security**__
            
            **x!backup**          Create & load backups of your servers
            
            __**Others**__
            
            **b!!help**            Shows this message
            **b!!info**            Get Information about AngelGUARD
            **b!!invite**          Invite Angel Family
            **b!!leave**           Let the bot leave
            **b!!ping**            Ping
            
            `)
            .setFooter(`Use \`**b!!help [command]\` for more info on a command.
            You can also use \`**b!!help [category]\` for more info on a category.`)
            .setColor("#5DBCD2")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "backup") {
                const embed = new RichEmbed()
                    .setTitle(`**g!!backup**

Create & load backups of your servers

__**Commands**__
`)
                    .setDescription(`
                b!!backup create        Create a backup
                b!!backup delete        Delete one of your backups
                b!!backup info          Get information about a backup
                b!!backup list          Get a list of your backups
                b!!backup load          Load a backup
                b!!backup purge         Delete all your backups`)
                    .addBlankField()
                    .setFooter(`Use \`b!!help [command]\` for more info on a command.
You can also use \`g!!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**g!!help [command]**")
                    .setDescription("Shows this message")
                    .addBlankField()
                    .setFooter(`Use \`b!!help [command]\` for more info on a command.
You can also use \`b!!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**g!!info**")
                    .setDescription("Get Information about AngelGUARD")
                    .addBlankField()
                    .setFooter(`Use \`b!!help [command]\` for more info on a command.
You can also use \`b!!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(infoEmbed);
            }

            if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**g!!invite**")
                    .setDescription("Invite Angel Family")
                    .addBlankField()
                    .setFooter(`Use \`b!!help [command]\` for more info on a command.
You can also use \`b!!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(inviteEmbed)
            }

            if (args[1] === "leave") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**g!!leave**")
                    .setDescription("Let the bot leave")
                    .addBlankField()
                    .setFooter(`Use \`b!!help [command]\` for more info on a command.
You can also use \`b!!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "ping") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**g!!ping**")
                    .setDescription("Pong")
                    .addBlankField()
                    .setFooter(`Use \`b!!help [command]\` for more info on a command.
You can also use \`b!!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

        }catch(e) {
            throw e;
        }
    }
}