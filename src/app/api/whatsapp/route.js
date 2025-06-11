import axios from "axios";

export async function POST(request) {
  try {
    const { phone, name, service } = await request.json();

    if (!phone || !name || !service) {
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

    const payload = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: `91${phone}`,
      type: "template",
      template: {
        name: "enquiry_response",
        language: {
          code: "en",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text", //name
                text: name,
              },
              {
                type: "text", //service
                text: service,
              },
            ],
          },
        ],
      },
    };


    const config = {
      headers: {
        key: process.env.WHATSAPP_KEY,
        wabaNumber: process.env.WHATSAPP_NUMBER,
        // "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "https://api.celitix.com/wrapper/waba/message",
      payload,
      config
    );

    if (response?.data?.messages[0]?.message_status === "accepted") {
      return new Response(JSON.stringify({ status: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response(
        JSON.stringify({ status: false, message: response.data }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

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
