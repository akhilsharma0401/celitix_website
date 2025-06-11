import path from "path";
import { promises as fs } from "fs";

export async function POST(request) {
  try {
    const filePath = path.join(process.cwd(), "public/backend/data.txt");
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
      source,
      designation,
      experience,
    } = await request.json();

    const payload = {
      Name: name,
      Email: email,
      Phone: phone,
      Company: company,
      Service: service,
      Message: message,
      Timestamp: new Date().toISOString("GMT+0530 (India Standard Time)"),
      Source: source || "Website",
      Experience: experience || "N/A",
      Designation: designation || "N/A",
    };

    if (!name || !email || !phone || !company || !service || !message) {
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

    const fileUrl = "";

    const textContent = `${payload.Name},${payload.Email},${payload.Phone},${payload.Company},${payload.Service},${payload.Message},${payload.Timestamp},${payload.Source},${payload.Experience},${payload.Designation},${fileUrl}`;

    await fs.appendFile(filePath, textContent + "\n", (err) => {
      if (err) {
        return new Response(
          JSON.stringify({
            message: "Failed to save data",
            status: false,
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      //   res.send("Data saved");
    });
    return new Response(
      JSON.stringify({
        message: "Data saved successfully",

        status: true,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
