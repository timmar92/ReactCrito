import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { json } from 'react-router-dom';



const ContactForm = () => {

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required')
                .min(2, 'Name must be at least 3 characters'),
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required')
                .matches(
                    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    'Email is invalid'
                ),
            message: Yup.string()
                .required('Message is required')
                .test('wordCount', 'Message must be at least 5 words', (value) => {
                    if (value) {
                        let wordCount = value.split(' ').filter(word => word).length;
                        return wordCount >= 5;
                    }
                    return false;
                })
        }),
        onSubmit: async (values) => {
            const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (response.status !== 200) {
                alert(`Error: ${response.status}`);
                return;
            }

            alert('Message sent!');
            form.resetForm();
        }
    });



    return (
        <section className="message-section">
            <div className="container">
                <div className="info">
                    <h2>Leave us a message for any information.</h2>
                </div>
                <form onSubmit={form.handleSubmit} className="form" noValidate>
                    <div className="name">
                        <label className={form.errors.name && form.touched.name ? 'error' : ''}>{form.errors.name && form.touched.name ? form.errors.name : 'Name'}</label>
                        <input className="form-input" type="text" name="name" placeholder="Name..." value={form.values.name} onBlur={form.handleBlur} onChange={form.handleChange} />
                    </div>
                    <div className="email">
                        <label className={form.errors.email && form.touched.email ? 'error' : ''}>{form.errors.email && form.touched.email ? form.errors.email : 'Email'}</label>
                        <input className="form-input" type="email" name="email" placeholder="Email..." value={form.values.email} onBlur={form.handleBlur} onChange={form.handleChange} />
                    </div>
                    <div className="message">
                        <label className={form.errors.message && form.touched.message ? 'error' : ''}>{form.errors.message && form.touched.message ? form.errors.message : 'Message'}</label>
                        <textarea className="form-input" name="message" placeholder="Message..." value={form.values.message} onBlur={form.handleBlur} onChange={form.handleChange} />
                    </div>
                    <button className="btn-yellow" type="submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;