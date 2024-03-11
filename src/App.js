import "./App.css";
import { BrowserRouter as Route, Routes, Link } from "react-router-dom";

import FullCalendar from "./components/FullCalendar/FullCalendar";
import FormComponent from "./components/Form/FormComponent";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="app">
      <nav className="app__list">
        <ul className="app__list-links">
          <li>
            <Link to="/" className="app__link">
              На главную
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="app__link">
              Календарь
            </Link>
          </li>
          <li>
            <Link to="/toggle-button" className="app__link">
              Кнопка
            </Link>
          </li>
          <li>
            <Link to="/form" className="app__link">
              Форма
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calendar" element={<FullCalendar />} />
        <Route path="/toggle-button" element={<ToggleButton />} />
        <Route path="/form" element={<FormComponent />} />
      </Routes>
    </div>
  );
}

export default App;
