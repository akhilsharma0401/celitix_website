import path, { join } from "path";
import { promises as fs } from "fs";

const filesDir = path.join(process.cwd(), "public/backend/files");

export async function POST(request, response) {
  try {
    // console.log("name", name);
    const formData = await request.formData();
    const file = formData.get("file");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const company = formData.get("company");
    const service = formData.get("service");
    const message = formData.get("message");
    const source = formData.get("source");
    const designation = formData.get("designation");
    const experience = formData.get("experience");

    // const {
    //   name,
    //   email,
    //   phone,
    //   company,
    //   service,
    //   message,
    //   source,
    //   designation,
    //   experience,
    // } = formData;

    console.log("name", name);

    const fileName = file.name;
    const ext = path.extname(fileName);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;

    const filePath = path.join(filesDir, uniqueName);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(filePath, buffer);

    let fileUrl = `${process.env.NEXT_PUBLIC_API_URL}/backend/files/${uniqueName}`;

    // console.log("File saved:", filePath);

    const dataFilePath = path.join(process.cwd(), "public/backend/data.txt");

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

    const textContent = `${payload.Name},${payload.Email},${payload.Phone},${payload.Company},${payload.Service},${payload.Message},${payload.Timestamp},${payload.Source},${payload.Experience},${payload.Designation},${fileUrl}`;

    await fs.appendFile(dataFilePath, textContent + "\n", (err) => {
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
