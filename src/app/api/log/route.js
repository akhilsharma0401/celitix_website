import {  NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const logsDir = path.join(process.cwd(), "logs");
fs.mkdirSync(logsDir, { recursive: true });

const logStream = fs.createWriteStream(path.join(logsDir,  "access.log"), {
  flags: "a",
});

export async function POST(req) {
  const body = await req.json();
  logStream.write(JSON.stringify(body) + "\n");
  return NextResponse.json({ ok: true });
}