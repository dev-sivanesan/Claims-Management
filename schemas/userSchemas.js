import Joi from 'joi';
const registerSchema = Joi.object({data:{
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
}});
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
})
const updateSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email().optional(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).optional()
});
export default { registerSchema, loginSchema, updateSchema };