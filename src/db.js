// require("dotenv").config();
// const { Sequelize } = require("sequelize");
// const fs = require('fs');
// const path = require('path');
// const {
//   DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT
// } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
//   logging: false, 
//   native: false, 
// });
// const basename = path.basename(__filename);

// const modelDefiners = [];

// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });


// modelDefiners.forEach(model => model(sequelize));
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);
// const { User, Plan, Video, Rating,Chat} = sequelize.models;

// // Aca vendrian las relaciones

// User.hasMany(Plan, { foreignKey: "idUser"});
// Plan.belongsTo(User, { foreignKey: "idUser"});

// User.belongsToMany(Plan, { through: 'Favorite'});
// Plan.belongsToMany(User, { through: 'Favorite'});

// User.belongsToMany(Plan, { through: 'Bought'});
// Plan.belongsToMany(User, { through: 'Bought'});

// User.hasMany(Chat, {  foreignKey: "idUser"});
// Chat.belongsTo(User, { foreignKey: "idUser"});

// User.hasMany(Rating, {  foreignKey: "idUser"});
// Rating.belongsTo(User, { foreignKey: "idUser"});

// Plan.hasMany(Video, { foreignKey: "idPlan"});
// Video.belongsTo(Plan, { foreignKey: "idPlan"});
// // Product.hasMany(Reviews);

// module.exports = {
//   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js'); AL DECIR ... EXPORTO EL CONTENIDO NO EL OBJETO
//   conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
// };
