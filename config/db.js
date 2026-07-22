const db = require('../mysql2');

async function connectToDatabase() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');

    await db.sequelize.sync({ force: true });
    console.log('Database synchronized.');

    } catch (error) {   
        console.error('Database connection failed:', error.message);
    }
}

module.exports =  connectToDatabase;