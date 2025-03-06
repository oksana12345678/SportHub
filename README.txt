SportPoint Backend

Це серверна частина веб-платформи для пошуку спортивних клубів і тренерів.

📌 Стек технологій
	•	Node.js – серверне середовище
	•	Express.js – фреймворк для створення API
	•	MongoDB – база даних
	•	Mongoose – ODM для роботи з MongoDB
	•	JWT (jsonwebtoken) – аутентифікація користувачів
	•	Cloudinary – зберігання зображень
	•	Multer – завантаження файлів
	•	Nodemailer – відправлення email

📦 Встановлені бібліотеки

🛠 DevDependencies (бібліотеки для розробки)
	•	@eslint/js – лінтер для підтримки якості коду
	•	eslint – аналізатор коду
	•	globals – список глобальних змінних
	•	nodemon – автоматичний перезапуск сервера при зміні файлів
	•	pino-pretty – покращене логування

🚀 Dependencies (основні бібліотеки)
	•	bcryptjs – хешування паролів
	•	cloudinary – хмарне зберігання зображень
	•	cookie-parser – обробка cookie
	•	cors – підтримка CORS-запитів
	•	dotenv – збереження конфігурацій у .env
	•	express – серверний фреймворк
	•	http-errors – створення помилок HTTP
	•	joi – валідація даних
	•	jsonwebtoken – генерація та перевірка JWT
	•	mongodb – драйвер для MongoDB
	•	mongoose – ODM для MongoDB
	•	multer – обробка файлів
	•	nodemailer – відправка email
	•	pino-http – логування HTTP-запитів
	•	uuid – створення id яку ми використовуємо для підтвердження реєстрації користувача

📜 Запуск проєкту

1. Клонування репозиторію

git clone https://github.com/your-repo/sportpoint-backend.git
cd sportpoint-backend

2. Встановлення залежностей

npm install

3. Запуск сервера
	•	У режимі розробки (з nodemon)

npm run dev
	•	У звичайному режимі

npm start

📌 Структура проєкту

/sportpoint-backend
│-- /node_modules
│-- /src
│   │-- /constants
│   │-- /controllers
│   │-- /db
│   │-- /middlewares
│   │-- /routers
│   │-- /services
│   │-- /templates
│   │-- /utils
│   │-- /validation
│   └── index.js
│-- server.js
│-- .editorconfig
│-- .env
│-- .env.example
│-- .gitignore
│-- .prettierrc
│-- eslint.config.mjs
│-- package-lock.json
│-- package.json
│-- README.txt


📌 Додаткові можливості

✅ Підтримка CORS
✅ Завантаження зображень у Cloudinary
✅ Відправка email через Nodemailer
✅ Валідація запитів через Joi

