# OutlanderApp

### Опис
**OutlanderApp** - це фронтенд частина веб-додатку для компанії, що спеціалізується на оренді кемперів. Додаток дозволяє користувачам переглядати каталог кемперів, переглядати деталі окремих кемперів, додавати їх до обраного, читати відгуки, а також здійснювати бронювання.

### Основні функції
1. **Домашня сторінка** - містить банер з основним закликом до дії та кнопку для переходу на сторінку каталогу.
2. **Каталог кемперів** - показує всі доступні транспортні засоби з можливістю фільтрації за такими критеріями, як:
   - Локація
   - Тип кузова
   - Наявність кондиціонера, кухні та інших характеристик
3. **Сторінка окремого кемпера** - детальний опис транспортного засобу, галерея фотографій, відгуки користувачів, форма для бронювання.
4. **Фільтрація** - фільтруйте кемпери за різними параметрами для швидкого пошуку.
5. **Обране** - додавайте кемпери до списку обраних, який зберігається навіть після оновлення сторінки.
6. **Деталі кемпера** - можливість перегляду додаткових характеристик транспортного засобу та детального опису.
7. **Форма бронювання** - заповніть форму, щоб забронювати кемпер та отримати нотифікацію про вдале бронювання.

### Технічні вимоги
- **Фреймворк:** React з використанням бандлеру Vite.
- **Управління станом:** Redux.
- **Маршрутизація:** React Router.
- **Запити до API:** Axios.
- **CSS:** MUI, CSS Modules, Styled Components.
- **Адаптивний дизайн:** реалізовано для десктопу (1440px).
  
### Встановлення та запуск
1. **Клонувати репозиторій**:
   git clone https://github.com/NatalySheludko/outlander-app.git

2. **Встановити залежності**:
   - ```bash 
	 npm install

3. **Запустити локальний сервер**:
   - ```bash
	 npm run dev

4. **Відкрити додаток у браузері за адресою**:   		
   http://localhost:5173

### API
Проєкт використовує бекенд API для роботи з оголошеннями про кемпери. 
**Основні ендпоінти**:
 - GET /campers - отримання списку всіх кемперів.
 - GET /campers/:id - отримання деталей про конкретний кемпер.
**Основні сторінки**
Домашня сторінка: /
Каталог кемперів: /catalog
Сторінка окремого кемпера: /catalog/:id
