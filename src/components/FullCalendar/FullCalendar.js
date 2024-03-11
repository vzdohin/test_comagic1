import React, { useState } from "react";
import "./FullCalendar.css";
import Calendar from "react-calendar";

function FullCalendar() {
  const [date, setDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(
    new Date(date.getFullYear(), 0, 1)
  );
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const handleYearChange = ({ activeStartDate }) => {
    setActiveStartDate(activeStartDate);
  };
  return (
    <section className="calendar">
      <div className="calendar-navigation">
        <button
          className="calendar-navigation__button"
          onClick={() =>
            setActiveStartDate(
              new Date(activeStartDate.getFullYear() - 1, 0, 1)
            )
          }
        >
          Предыдущий год
        </button>
        <span className="calendar-navigation__year">
          {activeStartDate.getFullYear()}
        </span>

        <button
          className="calendar-navigation__button"
          onClick={() =>
            setActiveStartDate(
              new Date(activeStartDate.getFullYear() + 1, 0, 1)
            )
          }
        >
          Следующий год
        </button>
      </div>
      <div className="calendar-container">
        {[...Array(12).keys()].map((month) => (
          <div key={month} className="calendar-container__mouth">
            <h3 className="calendar-container__title">{monthNames[month]}</h3>
            <Calendar
              activeStartDate={
                new Date(activeStartDate.getFullYear(), month, 1)
              }
              onActiveStartDateChange={handleYearChange}
              value={date}
              onChange={setDate}
              view="month"
              showNavigation={false}
              showNeighboringMonth={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export default FullCalendar;
