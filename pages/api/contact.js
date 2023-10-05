import nodemailer from 'nodemailer';

export default async (req, res) => {
    // Replace with your Mailgun API key and domain

    const { name, message, phone, email } = req?.body

    // Create a Nodemailer transporter using Mailgun SMTP settings
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false, // Set to true if your Mailgun plan supports it
        auth: {
            user: process.env.DOMAIN,
            pass: process.env.SMPT_PASSWORD,
        },
    });

    // Email message details
    const mailOptions = {
        from: email,
        to: 'intiaj.dev@gmail.com',
        subject: `Message From ${name}, sent from Portfolio Webiste`,
        text: `Message:- ${message}, /n Phone:- ${phone}`,
    };

    try {
        // Send the email
        if (name, email, phone, message) {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } else {
            return 'error'
        }


    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
};