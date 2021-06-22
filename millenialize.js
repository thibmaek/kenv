// Menu: Millenialize
// Description: 👏🏻 Millenialize a message

const msg = await arg("Message?");
copy(`👏🏻 ${msg.split(' ').join(' 👏🏻 ')} 👏🏻`);
