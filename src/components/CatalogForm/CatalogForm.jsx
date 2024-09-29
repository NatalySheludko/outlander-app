import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import clsx from "clsx";
import * as Yup from "yup";
import { useId } from "react";
import DatePicker from "react-datepicker";
import BtnComponent from "../BtnComponent/BtnComponent";
import "react-datepicker/dist/react-datepicker.css";
import "./datePickerStyles.css";
import css from "./CatalogForm.module.css";

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is Required!"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  date: Yup.date().required("Booking date is required"),
  comment: Yup.string().max(300, "Comment is too long!").optional(),
});

export default function CatalogForm() {
  const fieldId = useId();

  const handleBookingSubmit = ({ resetForm }) => {
    toast.success("Booking successful!");
    resetForm();
  };

  return (
    <div className={css.container}>
      <div className={css.formContainer}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            date: "",
            comment: "",
          }}
          validationSchema={BookingSchema}
          onSubmit={handleBookingSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className={css.form} noValidate>
              <h2 className={css.formTitle}>Book your campervan now</h2>
              <p className={css.formText}>
                Stay connected! We are always ready to help you.
              </p>
              <div className={css.formFields}>
                <label htmlFor={`${fieldId}-name`}></label>

                <Field
                  className={clsx(css.input, values.name && css.filled)}
                  type="text"
                  name="name"
                  id={`${fieldId}-name`}
                  placeholder="Name&#42;"
                />

                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="span"
                />
              </div>

              <div className={css.formFields}>
                <label htmlFor={`${fieldId}-email`}></label>

                <Field
                  className={clsx(css.input, values.email && css.filled)}
                  type="email"
                  name="email"
                  id={`${fieldId}-email`}
                  placeholder="Email&#42;"
                />
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="span"
                />
              </div>

              <div>
                <label htmlFor={`${fieldId}-date`}></label>
                <DatePicker
                  selected={values.date}
                  onChange={(date) => setFieldValue("date", date)}
                  className={css.inputDate}
                  placeholderText="Booking date&#42;"
                  dateFormat="yyyy-MM-dd"
                />
                <ErrorMessage
                  className={css.error}
                  name="date"
                  component="span"
                />
              </div>

              <div>
                <label htmlFor={`${fieldId}-comment`}></label>

                <Field
                  as="textarea"
                  className={clsx(css.textarea, values.comment && css.filled)}
                  name="comment"
                  id={`${fieldId}-comment`}
                  placeholder="Comment"
                />
              </div>
              <div className={css.btnWrap}>
                <BtnComponent
                  className={css.btn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send
                </BtnComponent>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

