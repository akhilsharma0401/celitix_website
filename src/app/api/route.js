export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Welcome To Celitix API",
      date: new Date(),
      status: true,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
