
const Address = require('./models/Address');
const User = require('./models/User');

User.hasOne(Address);
Address.belongsTo(User);