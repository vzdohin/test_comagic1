import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputMask from "react-input-mask";
import * as Yup from "yup";
import "./FormComponent.css";

const phoneRegExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  phone: Yup.string()
    .matches(
      phoneRegExp,
      "Номер телефона должен быть в формате +7 (XXX) XXX-XX-XX"
    )
    .required("Обязательное поле"),
  email: Yup.string()
    .email("Неверный формат электронной почты")
    .required("Обязательное поле"),
});

function FormComponent() {
  const [submittedData, setSubmittedData] = useState("");

  return (
    <Formik
      initialValues={{ name: "", phone: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Прямое сохранение данных формы в состояние
        setSubmittedData(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue, errors, touched }) => (
        <>
          <Form className="form">
            <div>
              <Field
                name="name"
                type="text"
                className={`input ${
                  errors.name && touched.name ? "errorBorder" : ""
                }`}
                placeholder="Имя"
              />
              <div
                className={`errorMessage ${
                  errors.name && touched.name ? "show" : ""
                }`}
              >
                {errors.name && touched.name ? errors.name : ""}
              </div>
            </div>

            <div>
              <Field name="phone">
                {({ field }) => (
                  <InputMask
                    {...field}
                    mask="+7 (999) 999-99-99"
                    placeholder="+7 (XXX) XXX-XX-XX"
                    className={`input ${
                      errors.phone && touched.phone ? "errorBorder" : ""
                    }`}
                    onChange={(event) => {
                      setFieldValue("phone", event.target.value);
                    }}
                  />
                )}
              </Field>
              <div
                className={`errorMessage ${
                  errors.phone && touched.phone ? "show" : ""
                }`}
              >
                {errors.phone && touched.phone ? errors.phone : ""}
              </div>
            </div>

            <div>
              <Field
                name="email"
                type="email"
                className={`input ${
                  errors.email && touched.email ? "errorBorder" : ""
                }`}
                placeholder="email@example.com"
              />
              <div
                className={`errorMessage ${
                  errors.email && touched.email ? "show" : ""
                }`}
              >
                {errors.email && touched.email ? errors.email : ""}
              </div>
            </div>

            <button type="submit" className="button" disabled={isSubmitting}>
              Отправить
            </button>
          </Form>
          {submittedData && (
            <div className="submittedData">
              <h3>Отправленные данные:</h3>
              <p>Имя: {submittedData.name}</p>
              <p>Телефон: {submittedData.phone}</p>
              <p>Email: {submittedData.email}</p>
            </div>
          )}
        </>
      )}
    </Formik>
  );
}

export default FormComponent;
