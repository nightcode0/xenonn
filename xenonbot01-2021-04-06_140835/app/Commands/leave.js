module.exports = class leave {
    constructor() {
        this.name = "leave",
        this.alias = [],
        this.usage = "x!leave"
    }

    async run(client, message, args) {
        try{
            message.channel.send("Bye ;(")
            message.guild.leave();
        }catch(e) {
            throw e;
        }
    }
}