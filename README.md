# ВТБ Relations (Frontend)

[Ссылка на бэкенд](https://github.com/MaxTube-dot/BackendUni)

ВТБ Relations - это платформа геймификаци, направленная на повышение мотивации и вовлечённости сотрудников в корпоративные события банка ВТБ, а также на развитие софт- и хард- скиллов работников.

## Веб-адрес
Нашу платформу можно открыть, перейдя ао веб-адресу http://www.unimvp.ru:81/

### Параметры для входа
- Логины сотрудников - alex, andrey, ilya
- Логин администратора - ivan
- Пароли для всех пользоателей - 0000


## Разработка
### При разработке серверной части платформы были использованы такие технологии, как:
- C#
- ASP.NET
- EntityFramework Core

В качестве БД использовалась PostgreSQL.

### Стек фронтенд части:
- Vue.JS
- Bootstrap
- Scss
- Axios 

## Инструкция по запуску 
### Frontend:

1. В файле конфигурации /src/config/index.js проекта FrontUni ввести корректный url бэкенда
```js
export default {
  baseUrl: 'http://www.unimvp.ru:4021/BackendUni',
}
```
2. npm install
3. npm run build
4. Запустить проект /dist/index.html

## Краткая схема компонентов системы
![Alt-текст](https://sun9-72.userapi.com/impg/1MjRoaNewXpIa1tpNYLi3Rz_hSxF90C30w8eVA/V75AmSVQHVM.jpg?size=378x230&quality=95&sign=4c148294afedc0c232cdf360a1cfb9ce&type=album)
