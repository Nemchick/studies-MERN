import { body } from 'express-validator';

export const registerValidation = [
    body('email','Неверная форма почты').isEmail(),
    body('password','Пароль должен содержать минимум 5 символа').isLength({min:5}),
    body('fullName','Укажите имя').isLength({min:3}),
    body('avatarUrl','Неверная ссылка на аватарку').optional().isURL(),
];