import React from "react";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <h3 className="main__title">
        Создать react приложение без state менеджеров.
      </h3>

      <ul className="main__list">
        <li className="main__text">
          <p>
            Необходимо создать приложение с использованием хуков useState и
            useEffect.
          </p>
        </li>
        <li className="main__text">
          <p>
            Компонент должен отображать текущий год и иметь возможность его
            обновления путем нажатия на кнопку.
          </p>
        </li>
        <li className="main__text">
          <p>
            Необходимо создать функциональный компонент кнопки. Которая меняет
            цвет и текст внутри себя при нажатии.
          </p>
        </li>
        <li className="main__text">
          <p>
            Необходимо создать форму с полями ввода, текстовым полем и кнопкой
            отправки. Форма должна обрабатывать введенные данные и отображать их
            на экране после отправки.
          </p>
        </li>
        <li className="main__text">
          <p>
            Создание роутеров: разработчик должен изучить и применить на
            практике подход React Router для создания нескольких страниц
            приложения с возможностью перехода между ними.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Main;
