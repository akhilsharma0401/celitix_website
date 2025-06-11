import axios from "axios";

export async function POST(request) {
  try {
    const { token } = await request.json();
    const url = process.env.CLOUDFLARE_URL;
    const secretKey = process.env.CLOUDFLARE_SECRET_KEY;

    const paylaod = {
      secret: secretKey,
      response: token,
    };

    const response = await axios.post(url, paylaod, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!response?.data?.success) {
      return new Response(
        JSON.stringify({
          message:
            "Unable to verify captcha. Please Contact Site Administrator",
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
