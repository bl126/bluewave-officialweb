import { NextRequest, NextResponse } from "next/server";

// Helper to escape Markdown special characters
function escapeMarkdown(text: string) {
    if (!text) return "N/A";
    return text.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { fullName, telegramHandle, xHandle, role, experience, portfolio, activityLevel, additionalInfo } = body;

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing from environment variables.");
            return NextResponse.json({ error: "Server configuration error. Please check environment variables." }, { status: 500 });
        }

        const message = `
🌊 *New Builder Application* 🌊

👤 *Name*: ${escapeMarkdown(fullName)}
📱 *Telegram*: ${escapeMarkdown(telegramHandle)}
🐦 *X (Twitter)*: ${escapeMarkdown(xHandle)}
🛠 *Role*: ${escapeMarkdown(role)}

📄 *Experience*:
${escapeMarkdown(experience)}

📂 *Portfolio*:
${escapeMarkdown(portfolio)}

⏰ *Activity*: ${escapeMarkdown(activityLevel)}

📝 *Additional*:
${escapeMarkdown(additionalInfo)}
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

        const result = await response.json();

        if (!response.ok) {
            console.error("Telegram API Error:", result);
            return NextResponse.json({
                error: `Telegram Error: ${result.description || "Unknown error"}`,
                details: result
            }, { status: 502 });
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Builder Submission Route Error:", error);
        return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
    }
}
