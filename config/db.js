import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Management', 'postgres', 'siva', {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;
