import { body } from 'express-validator';

export const registerValidation = [
    body('email','Неверная форма почты').isEmail(),
    body('password','Пароль должен содержать минимум 5 символа').isLength({min:5}),
    body('fullName','Укажите имя').isLength({min:3}),
    body('avatarUrl','Неверная ссылка на аватарку').optional().isURL(),
];

export const loginValidation = [
    body('email','Неверная форма почты').isEmail(),
    body('password','Пароль должен содержать минимум 5 символа').isLength({min:5}),
];

export const postCreateValidation = [
    body('title','Выберете заголов статьи').isLength({min:3}).isString(),
    body('text','Введите текст статьи').isLength({min:10}).isString(),
    body('tags','Неверный формат тэгов (Укажите массив)').optional().isString(),
    body('imageUrl','Неверная ссылка на изображение').optional().isString(),
];