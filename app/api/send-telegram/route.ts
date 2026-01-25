import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { fullName, telegramHandle, xHandle, role, experience, portfolio, activityLevel, additionalInfo } = body;

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error("Telegram credentials missing");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        const message = `
🌊 *New Builder Application* 🌊

👤 *Name*: ${fullName}
📱 *Telegram*: ${telegramHandle}
🐦 *X (Twitter)*: ${xHandle}
🛠 *Role*: ${role}

📄 *Experience*:
${experience}

📂 *Portfolio*:
${portfolio || "N/A"}

⏰ *Activity*: ${activityLevel}

📝 *Additional*:
${additionalInfo || "N/A"}
    `.trim();

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown",
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Telegram API error:", errorData);
            return NextResponse.json({ error: "Failed to send message to Telegram" }, { status: 502 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
