export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let data;
  try {
    const body = await req.json();
    data = body.payload && body.payload.data;
  } catch (err) {
    return new Response("Invalid payload", { status: 400 });
  }

  const toEmail = data && data.email;
  const toName = data && data.name;

  if (!toEmail) {
    return new Response("No recipient email, skipped", { status: 200 });
  }

  const resendApiKey = Netlify.env.get("RESEND_API_KEY");
  const fromAddress = Netlify.env.get("CONFIRMATION_FROM_EMAIL");

  if (!resendApiKey || !fromAddress) {
    console.error("Missing RESEND_API_KEY or CONFIRMATION_FROM_EMAIL env var");
    return new Response("Email service not configured", { status: 500 });
  }

  const subject = "Đã nhận brief của bạn — XQuang / Denoise Production House";
  const text = `Xin chào ${toName || "bạn"},

Cảm ơn bạn đã gửi brief dự án cho XQuang / Denoise Production House. Brief đã được ghi nhận và XQuang sẽ phản hồi trong vòng 1 ngày làm việc để xác nhận và hẹn bước trao đổi tiếp theo.

Nếu cần bổ sung thông tin, bạn có thể trả lời trực tiếp email này.

Trân trọng,
XQuang`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: fromAddress, to: toEmail, subject, text }),
    });

    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return new Response("Failed to send confirmation", { status: 500 });
    }

    return new Response("Confirmation sent", { status: 200 });
  } catch (err) {
    console.error("send-confirmation error", err);
    return new Response("Failed to send confirmation", { status: 500 });
  }
};
