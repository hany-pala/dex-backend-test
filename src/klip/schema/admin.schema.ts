import * as Joi from 'joi';

export const adminSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'io'] },
  }),
  age: Joi.number().integer().min(1900).max(2013),
});
