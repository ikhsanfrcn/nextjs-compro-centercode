import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../atoms/InputField';
import TextArea from '../atoms/TextArea';
import { Button } from '../atoms/Button';

interface ContactFormProps {
  formData: { name: string; email: string; message: string; phone: string };  // Add phone to formData
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: (values: any) => void;  // Update handleSubmit type
  status: 'idle' | 'sending' | 'sent' | 'error';
  selectedMethod: 'email' | 'whatsapp';
  handleMethodChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Phone number is not valid')  // Validate phone number format
    .required('Phone number is required'),
});

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  handleSubmit,
  status,
  selectedMethod,
  handleMethodChange,
}) => (
  <Formik
    initialValues={formData}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ values, handleChange, handleBlur, errors, touched }) => (
      <Form className="space-y-4">
        <div>
          <InputField
            label="Full Name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={touched.name && errors.name ? errors.name : undefined}  // Pass error as string or undefined
          />
        </div>
        <div>
          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={touched.email && errors.email ? errors.email : undefined}  // Pass error as string or undefined
          />
        </div>
        <div>
          <InputField
            label="Phone Number"
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={touched.phone && errors.phone ? errors.phone : undefined}  // Pass error as string or undefined
          />
        </div>
        <div>
          <TextArea
            label="Message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={touched.message && errors.message ? errors.message : undefined}  // Pass error as string or undefined
          />
        </div>
        
        {/* Radio buttons to select method */}
        <div className="flex gap-5 mt-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="email"
              name="method"
              value="email"
              checked={selectedMethod === 'email'}
              onChange={handleMethodChange}
              className="mr-2"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="whatsapp"
              name="method"
              value="whatsapp"
              checked={selectedMethod === 'whatsapp'}
              onChange={handleMethodChange}
              className="mr-2"
            />
            <label htmlFor="whatsapp">WhatsApp</label>
          </div>
        </div>

        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </Button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
