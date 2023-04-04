import { Sequelize } from 'sequelize';

// Create a new Sequelize instance with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'kaban.sqlite',
});

// Authenticate the Sequelize instance with the database
async function authenticateDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { sequelize, authenticateDatabase };