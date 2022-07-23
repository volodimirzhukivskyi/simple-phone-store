import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { clearItem } from "../../modules/ReduxApp/AppReducer/actionsApp";
import {
  addShopForm,
  addShopModal,
} from "../../modules/ReduxApp/ModalReducer/modalAction";
import { useDispatch } from "react-redux";
const FormShop = (props) => {
  const { click, card } = props;
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "Это поле должно быть строкой")
      .min(2, "Слишком короткое имя!")
      .max(50, "Слишком длинное имя!")
      .required("Обязательно"),
    secondName: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "Это поле должно быть строкой")
      .min(2, "Слишком короткая фамилия!")
      .max(50, "Слишком длинная фамилия!")
      .required("Обязательно"),
    age: yup
      .number()
      .typeError("Этот текст не является числом")
      .required("Обязательно"),
    address: yup.string().required("Обязательно"),
    phoneNumber: yup
      .number()
      .min(10, "Слишком короткий номер телефона !")
      .typeError("Этот текст не является номером")
      .required("Обязательно"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          secondName: "",
          age: "",
          address: "",
          phoneNumber: "",
        }}
        validateOnBlur
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(
            ...card.map(
              (card) =>
                `Вы заказали - ${card.name} в количестве - ${card.count} штук` +
                "\n"
            )
          );
          console.log("Информация о вас -");
          console.log(values);
          dispatch(clearItem());
          dispatch(addShopForm(false));
          dispatch(addShopModal(true));
          actions.resetForm({
            values: {
              name: "",
              secondName: "",
              age: "",
              address: "",
              phoneNumber: "",
            },
          });
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          isValid,
          handleSubmit,
          handleReset,
          handleBlur,
          dirty,
        }) => (
          // <div className="wrapperForm" onClick={click}>
          <div
            className="register-form-container"
            onClick={(e) => e.stopPropagation()}
          >
            <form action="src/components/FormShop/FormShop">
              <h1 className="form-title">Сделать заказ</h1>
              <div className="form-fields">
                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Имя"
                    name={"name"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />{" "}
                  {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                  )}
                </div>

                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Фамилия"
                    name={"secondName"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.secondName}
                  />
                  {touched.secondName && errors.secondName && (
                    <p className="error">{errors.secondName}</p>
                  )}
                </div>
                <div className="form-field">
                  <input
                    type="number"
                    placeholder="Возраст пользователя"
                    name={"age"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                  />
                  {touched.age && errors.age && (
                    <p className="error">{errors.age}</p>
                  )}
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Адрес доставки"
                    name={"address"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  {touched.address && errors.address && (
                    <p className="error">{errors.address}</p>
                  )}
                </div>
                <div className="form-field">
                  <input
                    type="tel"
                    placeholder="Мобильный телефон"
                    name={"phoneNumber"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <p className="error">{errors.phoneNumber}</p>
                  )}
                </div>
              </div>
              <div className="form-buttons">
                <button
                  className="button"
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Отправить заявку
                </button>
                <div className="divider"> </div>
                {click && (
                  <button onClick={click} type="button" className="button ">
                    Закрыть
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};
export default FormShop;
