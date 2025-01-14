import React, { Fragment } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { ErrorMessage, Field, Form, withFormik} from "formik";
import * as Yup from "yup"; //install yup for validation
import PropTypes from "prop-types";
import "./contactform.css";

const ContactForm = (props) => {
  const { errors, touched, handleSubmit } = props;
  return (
    <Fragment>
      <div className="container mt-4">
        <Card className="mb-3 card-shadow">
          <div className="card-header">
            <h2 className="contactform-title">Contact Us!</h2>
          </div>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} sm={12}>
                  <div className="mb-3">
                    <FloatingLabel controlId="formFirstName" label="First Name">
                      <Field
                          className={`form-control ${
                            errors.firstName && touched.firstName ? "is-invalid" : ""
                          }`}
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                        />
                    </FloatingLabel>
                    <ErrorMessage name="firstName" component="div" className="has-error" />
                  </div>
                </Col>

                <Col md={6} sm={12}>
                  <div className="mb-3">
                    <FloatingLabel controlId="formLastName" label="Last Name">
                    <Field
                          className={`form-control ${
                            errors.lastName && touched.lastName ? "is-invalid" : ""
                          }`}
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                        />
                    </FloatingLabel>
                    <ErrorMessage name="lastName" component="div" className="has-error" />
                  </div>
                </Col>

                <Col md={6} sm={12}>
                  <div className="mb-3">
                    <FloatingLabel controlId="formEmailAddress" label="Email Address">
                    <Field
                          className={`form-control ${
                            errors.email && touched.email ? "is-invalid" : ""
                          }`}
                          name="email"
                          type="email"
                          placeholder="Email"
                        />
                    </FloatingLabel>
                    <ErrorMessage name="email" component="div" className="has-error" />
                  </div>
                </Col>

                <Col md={6} sm={12}>
                  <div className="form-group mb-3">
                    <FloatingLabel controlId="formPhoneNumber" label="Phone Number">
                      <Field
                        className={`form-control ${
                          errors.phone && touched.phone ? "is-invalid" : ""
                        }`}
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                      />
                    </FloatingLabel>
                    <ErrorMessage name="phone" component="div" className="has-error" />
                  </div>
                </Col>

                <Col md={12} sm={12}>
                  <div className="form-group mb-3">
                    <FloatingLabel controlId="formSubject" label="Subject">
                      <Field as="select" name="subject" className="form-control">
                        <option value="">Choose...</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Support">Support</option>
                      </Field>
                    </FloatingLabel>
                    <ErrorMessage name="subject" component="div" className="has-error" />
                  </div>
                </Col>

                <Col md={12} sm={12}>
                  <div className="form-group mb-3">
                    <FloatingLabel controlId="formMessage" label="Message">
                      <Field as="textarea" name="message" className="form-control" rows={3} />
                    </FloatingLabel>
                    <ErrorMessage name="message" component="div" className="has-error" />
                  </div>
                </Col>

                <Col md={12} sm={12}>
                  <button type="submit" className="btn btn-secondary float-end">
                    Submit
                  </button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}
// prop types for validation
ContactForm.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
};

//validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

//HOC for Formik

export default withFormik({
  mapPropsToValues: () => ({
    firstName: "",
    lastName: "", 
    email: "",
    phone: "",
    subject: "",
    message: "",
  }),

  validationSchema,

  handleSubmit: (values, { props }) => {
    console.log("Form submitted with values: ", values);
  }
})(ContactForm);
