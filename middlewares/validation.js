import logger from '../config/logger.js';

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      logger.error('Validation error', { error: error.details });
      return res.status(400).json({ error: error.details });
    }
    next();
  };
};

export default validate;