import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xvovqwjz"
        method="POST"
      >
        <FormGroup>
        <Label>Email:</Label>
        <Input type="email" name="email" />
        </FormGroup>
      

        <FormGroup>
        <Label>Subject:</Label>
        <Input type="text" name="subject" />
        </FormGroup>

        <FormGroup>
        <Label>Message:</Label>
        <Input type="textarea" name="message" />
        <br/>
        <div className="text-center">
        {status === "SUCCESS" ? <alert>Thanks!</alert> : <Button className="button1">Submit</Button>}
        {status === "ERROR" && <alert>Ooops! There was an error. Please fill out all fields.</alert>}
        </div>
        </FormGroup>
      </Form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}