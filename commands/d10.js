module.exports = {
    name: 'd10',
    description: 'rola dado de 10 lados',
  async execute(message, args) {
    if (args < 1){
      args = 1;
    }
    for (let i = 0; i < args; i++) {
      const d10 = Math.floor(Math.random() * 10) + 1
      await message.channel.send('Dado caiu em: ' + d10)
    }
  }
}