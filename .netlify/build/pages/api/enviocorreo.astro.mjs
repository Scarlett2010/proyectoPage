import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
export { renderers } from '../../renderers.mjs';

dotenv.config();
const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { nombres, correo, numero, fecha, especialidad, descripcion } = body;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "Nueva solicitud de asesoría jurídica",
      html: `
        <h2> --------Datos del cliente-------- </h2>
        <p>Se ha recibido una nueva solicitud de asesoría jurídica con los siguientes datos:</p>
        <ul>
            <li><strong>Nombre:</strong> ${nombres}</li>
            <li><strong>Email:</strong> ${correo}</li>
            <li><strong>Teléfono:</strong> ${numero}</li>
            <li><strong>Fecha:</strong> ${fecha}</li>
            <li><strong>Especialidad:</strong> ${especialidad}</li>
            <li><strong>Descripción:</strong> ${descripcion}</li>
        </ul>
        </br>
        <p>Por favor, póngase en contacto con el cliente lo antes posible.</p>
      `
    });
    await transporter.sendMail({
      from: `"${"Jorge Oña Asesoría Jurídica"}" <${process.env.SMTP_USER}>`,
      to: correo,
      subject: "Confirmación de su cita",
      html: `
        <h2>Hola ${nombres},</h2>
        <p>Hemos recibido su solicitud de asesoría jurídica con la siguiente información:</p>
        <ul>
          <li><strong>Especialidad:</strong> ${especialidad}</li>
          <li><strong>Fecha solicitada:</strong> ${fecha}</li>
        </ul>
        <p>Nos pondremos en contacto con usted lo antes posible para confirmar la disponibilidad.</p>
        <p>Gracias por confiar en nosotros.</p>
        <br>
        <p>Atentamente,</p>
        <p><strong>${"Jorge Oña Asesoría Jurídica"}</strong></p>
      `
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Error enviando correo:", err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
