import React, { Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./contactform.css";

function ContactForm() {
  return (
    <Fragment>
      <div className="container mt-4">
        <Card className="mb-3 card-shadow">
          <div className="card-header">
            <h2 className="contactform-title">Contact Us!</h2>
          </div>
          <Card.Body>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <FloatingLabel controlId="floatingInputGrid" label="First Name">
                    <Form.Control type="text" placeholder="First Name" required />
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col md={6} sm={12}>
                <Form.Group className="mb-3" controlId="formLastName">
                  <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                    <Form.Control type="text" placeholder="Last Name" required />
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col md={6} sm={12}>
                <Form.Group className="mb-3" controlId="formEmailAddress">
                  <FloatingLabel controlId="floatingInputGrid" label="Email Address">
                    <Form.Control type="email" placeholder="Email" required />
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col md={6} sm={12}>
                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                    <Form.Control type="tel" placeholder="Phone" required />
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formSubject">
                  <FloatingLabel controlId="floatingInputGrid" label="Subject">
                    <Form.Control as="select" placeholder="Select" required>
                      <option>Choose...</option>
                      <option>General Inquiry</option>
                      <option>Feedback</option>
                      <option>Support</option>
                    </Form.Control>
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formMessage">
                  <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control as="textarea" placeholder="Message" rows={3} />
                  </FloatingLabel>
                </Form.Group>
              </Col>

              <Col md={12} sm={12}>
                <Button variant="secondary" type="submit" className="float-end">
                  Submit
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}

export default ContactForm;
