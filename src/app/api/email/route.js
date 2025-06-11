import axios from "axios";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
      source,
      designation = null,
      experience = null,
      resume = null,
    } = await request.json();

    if (
      !name ||
      !email ||
      !phone ||
      !company ||
      !service ||
      !message ||
      !source
    ) {
      return new Response(
        JSON.stringify({
          message: "All fields are required",
          status: false,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    var mailOptions = {};

    mailOptions = {
      from: "ads@proactivedigital.in",
      // to: "info@proactivedigital.in, sales@proactivesms.in, yogendra@proactivesms.in",
      to: "dummymail12hai@gmail.com",
      subject: `Celitix ${source} Enquiry`,
      html: `Name: ${name}<br>Email: ${email}<br>Phone: ${phone}<br>Message: ${message}`,
    };

    if (designation || experience || resume) {
      const data = `<br>Designation: ${designation}<br>Experience: ${experience}<br>Resume: ${resume}`;
      mailOptions.html += data;
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return new Response(
          JSON.stringify({ message: "Internal Server Error", status: false }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        return new Response(
          JSON.stringify({ message: "Email sent successfully", status: true }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
    });

    return new Response(JSON.stringify({ status: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        status: false,
        error: e.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
