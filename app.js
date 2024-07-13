import express from 'express';
import sequelize from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import logger from './config/logger.js';
import bodyparser from "body-parser"

const app = express();

app.use(express.json());
app.use(bodyparser.json())

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync({force:false})
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
      console.log( `Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Unable to connect to the database:', error);
    logger.error('Unable to connect to the database:', error);
  });
