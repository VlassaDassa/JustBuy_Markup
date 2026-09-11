# JustBuy Markup

Первая статическая версия интерфейса JustBuy, выполненная на HTML/SCSS со сборкой через Gulp.

Эта версия появилась до переноса проекта на React и подключения Django REST API. Репозиторий сохранён как исторический этап развития JustBuy и используется в портфолио как дополнительная ссылка, а не как отдельный основной проект.

- Основной проект: https://github.com/VlassaDassa/JustBuy
- Исходники верстки: https://github.com/VlassaDassa/JustBuy_Markup
- Демо верстки: https://justbuy-markup.vlassadassa.ru

---

## Технологии

- HTML
- SCSS / Sass
- Gulp 4
- Panini
- BrowserSync
- jQuery
- Autoprefixer
- CSS и JavaScript minification
- Image optimization

---

## Структура репозитория

```text
JustBuy_Markup/
├── Build/
│   └── JustBuy/
│       └── готовая статическая сборка
│
└── Gulp_build/
    └── JustBuy/
        ├── src/
        ├── gulpfile.js
        ├── package.json
        └── package-lock.json
```

`Build/JustBuy` содержит готовую статическую версию сайта.

`Gulp_build/JustBuy` содержит исходники и Gulp-конфигурацию.

---

## Локальный запуск

Требуются Node.js и npm.

```powershell
git clone https://github.com/VlassaDassa/JustBuy_Markup.git
cd JustBuy_Markup\Gulp_build\JustBuy
npm install
npx gulp
```

Команда `npx gulp` запускает BrowserSync и режим слежения за изменениями.

Для production-сборки:

```powershell
npx gulp build
```

Результат сборки создаётся в папке:

```text
dist/
```

---

## Связь с JustBuy

Эта верстка стала основой дальнейшей React-версии JustBuy.

Позже в проекте появились:

- React-компоненты;
- клиентская маршрутизация;
- работа с REST API;
- авторизация и профиль пользователя;
- корзина и другие динамические сценарии;
- Django REST backend.

Поэтому этот репозиторий сохранён как ранний этап развития одного проекта, а не как отдельный продукт портфолио.
