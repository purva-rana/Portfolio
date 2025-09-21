import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request, response) {
  const { name, email, message } = request.body;

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['purvarana1617@gmail.com'], // Your email here
      subject: `New Message from ${name} via Portfolio`,
      reply_to: email,
      html: `<div><p>Name: ${name}<br/>Email: ${email}<br/>Message: ${message}</p></div>`,
    });

    response.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error); 
    response.status(500).json({ message: 'Error sending email' });
  }
}