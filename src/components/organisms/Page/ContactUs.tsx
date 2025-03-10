'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactForm from '../../molecules/ContactForm';
import StatusMessage from '../../atoms/StatusMessage';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [selectedMethod, setSelectedMethod] = useState<'email' | 'whatsapp'>('email');

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '', phone: '' });
  };

  const handleMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(e.target.value as 'email' | 'whatsapp');
  };

  const handleSubmit = async (values: { name: string; email: string; message: string; phone: string }) => {
    setStatus('sending');

    if (selectedMethod === 'email') {
      try {
        const result = await emailjs.send(
          'service_4n99e4h',
          'template_03m1ru6',
          {
            from_name: values.name,
            from_email: values.email,
            from_phone: values.phone, 
            message: values.message,
            to_name: 'CenterCode',
          },
          'O-vV7Nq5tcCJMlaor'
        );

        console.log(result.text);
        setStatus('sent');
        resetForm();
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    } else {
      const phoneNumber = '+62816355340';
      const message = `Hello, I would like to get in touch with you.\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nMessage: ${values.message}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.location.href = whatsappLink;
      setStatus('sent');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <ContactForm
        formData={formData}
        handleSubmit={handleSubmit}
        status={status}
        selectedMethod={selectedMethod}
        handleMethodChange={handleMethodChange}
      />
      {status === 'sent' && <StatusMessage status="sent" />}
      {status === 'error' && <StatusMessage status="error" />}
    </div>
  );
};

export default ContactUs;
