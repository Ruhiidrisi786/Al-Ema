// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Envelope, Telephone, GeoAlt } from "react-bootstrap-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const validationSchema = Yup.object().shape({
//   fullName: Yup.string().min(2).required('Full Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   mobile: Yup.string().matches(/^\+?\d{7,15}$/, 'Invalid mobile').required('Mobile is required'),
//   whatsapp: Yup.string().matches(/^\+?\d{7,15}$/, 'Invalid WhatsApp').required('WhatsApp is required'),
//   city: Yup.string().min(2).required('City is required'),
//   district: Yup.string().min(2).required('District is required'),
//   state: Yup.string().min(2).required('State is required'),
//   country: Yup.string().min(2).required('Country is required'),
//   message: Yup.string().min(10).required('Message is required'),
// });

// const Contact = () => {
//   // form states
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [whatsapp, setWhatsapp] = useState("");
//   const [city, setCity] = useState("");
//   const [district, setDistrict] = useState("");
//   const [state, setState] = useState("");
//   const [country, setCountry] = useState("");
//   const [message, setMessage] = useState("");


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       fullName,
//       email,
//       mobile,
//       whatsapp,
//       city,
//       district,
//       state,
//       country,
//       message,
//     };

//     try {
//       const res = await fetch("http:localhost:5173/send-message", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await res.json();

//       if (result.success) {
//         alert("Message saved successfully!");

//         // Clear form
//         setFullName("");
//         setEmail("");
//         setMobile("");
//         setWhatsapp("");
//         setCity("");
//         setDistrict("");
//         setState("");
//         setCountry("");
//         setMessage("");
//       } else {
//         alert("Failed to save message.");
//       }
//     } catch (err) {
//       alert("Error connecting to server.");
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ background: "#f8f9fa", padding: "80px 0" }}>
//       <Container className="text-center">
//               <h1 className="fw-semibold mb-3 text-center">Get in Touch</h1>
//               <p className="text-muted mb-5 fs-5 text-center">
//                 Ready to discuss your crude oil requirements? Contact us today
//               </p>
      
//               <Row className="g-4 justify-content-center">
//                 {/* Email */}
//                 <Col xs={12} md={4} className="text-center">
//                   <Envelope size={32} className="text-info mb-2" />
//                   <h5 className="fw-semibold">Email</h5>
//                   <p className="text-muted">contact@alema-industries.com</p>
//                 </Col>
      
//                 {/* Phone */}
//                 <Col xs={12} md={4} className="text-center">
//                   <Telephone size={32} className="text-info mb-2" />
//                   <h5 className="fw-semibold">Phone</h5>
//                   <p className="text-muted">+1 (555) 123-4567</p>
//                 </Col>
      
//                 {/* Location */}
//                 <Col xs={12} md={4} className="text-center">
//                   <GeoAlt size={32} className="text-info mb-2" />
//                   <h5 className="fw-semibold">Location</h5>
//                   <p className="text-muted">
//                     1234 Industrial Way, Houston, TX 77001, USA
//                   </p>
//                 </Col>
//               </Row>
//             </Container>

//      <div className='mt-5 px-4'>
//       <h2 className='text-center'>Contact Form</h2>
//        <Formik
//         initialValues={{
//           fullName: '',
//           email: '',
//           mobile: '',
//           whatsapp: '',
//           city: '',
//           district: '',
//           state: '',
//           country: '',
//           message: '',
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values, { resetForm }) => {
//           console.log(values);
//           alert('Form submitted successfully!');
//           resetForm();
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form onSubmit={handleSubmit}>
//             {/* Full Name */}
//             <div className="mb-3">
//               <label className="form-label">Full Name</label>
//               <Field name="fullName" className={`form-control ${errors.fullName && touched.fullName ? 'is-invalid' : ''}`} />
//               <ErrorMessage name="fullName" component="div" className="invalid-feedback" />
//             </div>

//             {/* Email */}
//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <Field name="email" type="email" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} />
//               <ErrorMessage name="email" component="div" className="invalid-feedback" />
//             </div>

//             {/* Mobile & WhatsApp */}
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Mobile</label>
//                 <Field name="mobile" className={`form-control ${errors.mobile && touched.mobile ? 'is-invalid' : ''}`} />
//                 <ErrorMessage name="mobile" component="div" className="invalid-feedback" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">WhatsApp</label>
//                 <Field name="whatsapp" className={`form-control ${errors.whatsapp && touched.whatsapp ? 'is-invalid' : ''}`} />
//                 <ErrorMessage name="whatsapp" component="div" className="invalid-feedback" />
//               </div>
//             </div>

//             {/* City & District */}
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">City</label>
//                 <Field name="city" className={`form-control ${errors.city && touched.city ? 'is-invalid' : ''}`} />
//                 <ErrorMessage name="city" component="div" className="invalid-feedback" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">District</label>
//                 <Field name="district" className={`form-control ${errors.district && touched.district ? 'is-invalid' : ''}`} />
//                 <ErrorMessage name="district" component="div" className="invalid-feedback" />
//               </div>
//             </div>

//             {/* State & Country */}
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">State</label>
//                 <Field name="state" className={`form-control ${errors.state && touched.state ? 'is-invalid' : ''}`} />
//                 <ErrorMessage name="state" component="div" className="invalid-feedback" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Country</label>
//                 <Field name="country" className={`form-control ${errors.country && touched.country ? 'is-invalid' : ''}`} />
//                 <ErrorMessage name="country" component="div" className="invalid-feedback" />
//               </div>
//             </div>

//             {/* Message */}
//             <div className="mb-3">
//               <label className="form-label">Message</label>
//               <Field as="textarea" name="message" className={`form-control ${errors.message && touched.message ? 'is-invalid' : ''}`} rows="4" />
//               <ErrorMessage name="message" component="div" className="invalid-feedback" />
//             </div>

//             <button type="submit" className="btn btn-primary btn-center">Submit</button>
//           </Form>
//         )}
//       </Formik>
//      </div>
//     </div>
//   );
// };

// export default Contact;

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import { Envelope, Telephone, GeoAlt } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().min(2).required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .matches(/^\+?\d{7,15}$/, "Invalid mobile")
    .required("Mobile is required"),
  whatsapp: Yup.string()
    .matches(/^\+?\d{7,15}$/, "Invalid WhatsApp")
    .required("WhatsApp is required"),
  city: Yup.string().min(2).required("City is required"),
  district: Yup.string().min(2).required("District is required"),
  state: Yup.string().min(2).required("State is required"),
  country: Yup.string().min(2).required("Country is required"),
  message: Yup.string().min(10).required("Message is required"),
});

const Contact = () => {
  const backendURL = "http://localhost:5000/send-message"; 

  return (
    <div className="container mt-5" style={{ background: "#f8f9fa", padding: "80px 0" }}>
      {/* Top Contact Info */}
      <Container className="text-center">
        <h1 className="fw-semibold mb-3">Get in Touch</h1>
        <p className="text-muted mb-5 fs-5">
          Ready to discuss your crude oil requirements? Contact us today
        </p>

        <Row className="g-4 justify-content-center">
          <Col xs={12} md={4} className="text-center">
            <Envelope size={32} className="text-info mb-2" />
            <h5 className="fw-semibold">Email</h5>
            <p className="text-muted">info@alemaindustries.com</p>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <Telephone size={32} className="text-info mb-2" />
            <h5 className="fw-semibold">Phone</h5>
            <p className="text-muted">+91 9004707592</p>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <GeoAlt size={32} className="text-info mb-2" />
            <h5 className="fw-semibold">Location</h5>
            <p className="text-muted">Malad (W), India</p>
          </Col>
        </Row>
      </Container>

      <div className="mt-5 px-4">
        <h2 className="text-center">Contact Form</h2>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            mobile: "",
            whatsapp: "",
            city: "",
            district: "",
            state: "",
            country: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const res = await fetch(backendURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });

              const result = await res.json();

              if (result.success) {
                alert("Message sent successfully!");
                resetForm();
              } else {
                alert("Failed to send message.");
              }
            } catch (error) {
              alert("Error connecting to server.");
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <Field
                  name="fullName"
                  className={`form-control ${
                    errors.fullName && touched.fullName ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage name="fullName" component="div" className="invalid-feedback" />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <Field
                  name="email"
                  type="email"
                  className={`form-control ${
                    errors.email && touched.email ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>

              {/* Mobile + WhatsApp */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Mobile</label>
                  <Field
                    name="mobile"
                    className={`form-control ${
                      errors.mobile && touched.mobile ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage name="mobile" component="div" className="invalid-feedback" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">WhatsApp</label>
                  <Field
                    name="whatsapp"
                    className={`form-control ${
                      errors.whatsapp && touched.whatsapp ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage name="whatsapp" component="div" className="invalid-feedback" />
                </div>
              </div>

              {/* City + District */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <Field
                    name="city"
                    className={`form-control ${
                      errors.city && touched.city ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage name="city" component="div" className="invalid-feedback" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">District</label>
                  <Field
                    name="district"
                    className={`form-control ${
                      errors.district && touched.district ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage name="district" component="div" className="invalid-feedback" />
                </div>
              </div>

              {/* State + Country */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">State</label>
                  <Field
                    name="state"
                    className={`form-control ${
                      errors.state && touched.state ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage name="state" component="div" className="invalid-feedback" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Country</label>
                  <Field
                    name="country"
                    className={`form-control ${
                      errors.country && touched.country ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage name="country" component="div" className="invalid-feedback" />
                </div>
              </div>

              {/* Message */}
              <div className="mb-3">
                <label className="form-label">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  rows="4"
                  className={`form-control ${
                    errors.message && touched.message ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage name="message" component="div" className="invalid-feedback" />
              </div>

              <button type="submit" className="btn btn-primary d-block mx-auto">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;