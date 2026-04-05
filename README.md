# 🌦️ Weather App (React + Vite)

A simple and responsive weather application built using React and Vite that fetches real-time weather data using the OpenWeather API.

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Displays temperature in Celsius
- 🌤️ Shows weather condition and icon
- 🌍 Displays city and country
- ⚡ Fast performance using Vite
- ⏳ Loading indicator while fetching data
- ⚠️ Error handling for invalid city and API failures
- 🎨 Modern UI with glassmorphism design

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Language:** JavaScript (ES6)
- **API:** OpenWeather API
- **HTTP Client:** Axios
- **Styling:** CSS

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-weather-app.git
```

2. Navigate to the project folder:

```bash
cd react-weather-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

---

## 🔑 API Configuration

1. Create an account at: [https://openweathermap.org/api](https://openweathermap.org/api)
2. Generate your API key
3. Replace the API key in `App.jsx`:

```js
const API_KEY = "YOUR_API_KEY";
```

---

## 📂 Project Structure

```
src/
 ├── App.jsx
 ├── App.css
 ├── main.jsx
```

---

## ⚙️ How It Works

1. User enters a city name
2. The app sends a request to the OpenWeather API
3. The API returns weather data in JSON format
4. Data is stored in React state
5. UI updates dynamically to display the result

---

## 🧠 Key Concepts Used

- React Hooks (`useState`)
- Asynchronous JavaScript (`async/await`)
- API Integration using Axios
- Conditional Rendering
- Error Handling (`try-catch`)
- Dynamic UI updates

---

## 🚀 Future Enhancements

- 📍 Auto-detect user location (Geolocation API)
- 🌙 Dark mode
- 📱 Responsive mobile design
- 📊 Additional weather details (humidity, wind speed)
- 🔄 Search history

---

## 📄 License

This project is open-source and free to use.

---

## 🙌 Author

Developed by **Hanson Vaz**
