import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";

const ContactezNous = ({ title }) => (
  <Card small className="h-100">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">Contactez-nous</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
        {/* Title */}
        <FormGroup>
          <FormInput placeholder="Email" />
        </FormGroup>

        {/* Body */}
        <FormGroup>
          <FormTextarea placeholder="Message..." />
        </FormGroup>

        {/* Create Draft */}
        <FormGroup className="mb-0">
          <Button theme="accent" type="submit">
            Envoyez
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

ContactezNous.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

ContactezNous.defaultProps = {
  title: "New Draft"
};

export default ContactezNous;
