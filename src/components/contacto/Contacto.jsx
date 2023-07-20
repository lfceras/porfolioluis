import styles from "./contacto.module.css";
import map from "../../assets/ubicacion.png";
import { FaPaperPlane, FaMobileAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

const Contacto = () => {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        form.current,
        VITE_PUBLIC_KEY
      )
      .then((result) => console.log(result.text))
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Deja tu nombre!!!")
        .min(3, "Demasiado corto!"),
      phone: Yup.string()
        .required("Deja tu numero de telefono!!!")
        .min(3, "Demasiado corto"),
      email: Yup.string()
        .min(3, "Demasiado corto!")
        .email("Invalid email")
        .required("Deja tu email!!!"),
      subject: Yup.string().required(true),
      message: Yup.string().required("Deja tu mensaje!!!"),
    }),
    onSubmit: (values, { resetForm }) => {
      sendEmail(values),
        resetForm({ values: "" }),
        swal("Listo!", "Tu mensaje ha sido enviado!", "success");
    },
  });

  return (
    <div>
      <section id="contacto" className={styles.contacto}>
        <div className={styles.contenido_seccion}>
          <h2>Contacto</h2>
          <div className={styles.fila}>
            {/* <!-- Formulario --> */}
            <div className={styles.col}>
              <form ref={form} onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu Nombre"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className={styles.errors}>{formik.errors.name}</div>
                ) : null}
                <input
                  type="text"
                  name="phone"
                  placeholder="Numero telefonico"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  maxLength={12}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className={styles.errors}>{formik.errors.phone}</div>
                ) : null}
                <input
                  type="text"
                  name="email"
                  placeholder="Direccion de correo"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={styles.errors}>{formik.errors.email}</div>
                ) : null}
                <input
                  type="text"
                  name="subject"
                  placeholder="Tema"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className={styles.errors}>{formik.errors.message}</div>
                ) : null}
                <button
                  type="submit"
                  disabled={
                    formik.values.name === "" ||
                    formik.values.phone === "" ||
                    formik.values.email === "" ||
                    formik.values.message === "" ||
                    formik.values.subject === ""
                  }
                >
                  Enviar Mensaje
                  <FaPaperPlane
                    size={20}
                    style={{ marginLeft: 10, marginTop: 5 }}
                  />
                  <span className={styles.overlay}></span>
                </button>
              </form>
            </div>
            {/* <!-- Mapa --> */}
            <div className={styles.col}>
              <img src={map} alt="Not found" />
              <div className={styles.info}>
                <ul>
                  <li>
                    <ImLocation size={20} style={{ marginRight: 10 }} />
                    Medellin, Antioquia - Colombia
                  </li>
                  <li>
                    <FaMobileAlt size={20} style={{ marginRight: 10 }} />
                    Telefono: +57 322 645 5432
                  </li>
                  <li>
                    <BsFillEnvelopeAtFill
                      size={20}
                      style={{ marginRight: 10 }}
                    />
                    Email: lcerasanjuan@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
