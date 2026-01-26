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
        const chatIdsEnv = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatIdsEnv) {
            console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing from environment variables.");
            return NextResponse.json({ error: "Server configuration error. Please check environment variables." }, { status: 500 });
        }

        // Split by comma and clean up whitespace
        const chatIds = chatIdsEnv.split(",").map(id => id.trim()).filter(id => id.length > 0);

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

        // Send to all admins
        const results = await Promise.allSettled(chatIds.map(async (chatId) => {
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
                throw new Error(result.description || "Unknown error");
            }
            return result;
        }));

        const failures = results.filter(r => r.status === "rejected");

        if (failures.length === chatIds.length) {
            // All failed
            console.error("All Telegram API requests failed:", failures);
            return NextResponse.json({
                error: "All notification attempts failed",
                details: failures.map((f: any) => f.reason.message) || "Unknown error"
            }, { status: 502 });
        }

        return NextResponse.json({
            success: true,
            partial_failure: failures.length > 0 ? failures.length : undefined
        });
    } catch (error: any) {
        console.error("Builder Submission Route Error:", error);
        return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
    }
}
