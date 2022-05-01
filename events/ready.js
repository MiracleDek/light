module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`!Help | Official Bot Made By Light Store Team`, {
    type: "WATCHING",
  });
};
