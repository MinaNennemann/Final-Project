import React from 'react';
import { Form, Input, Button } from 'antd';
import './Contact.css';

const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  };

  return (
    <div className="contact-container">
    <h1>Contact Form</h1>
    <Form
      name="contact"
      layout="vertical"
      onFinish={onFinish}
      className="contact-form"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Your Name" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input placeholder="Your Email" />
      </Form.Item>
      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, message: 'Please enter your message' }]}
      >
        <TextArea rows={4} placeholder="Your Message" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="contact-submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);
};

export default Contact;
