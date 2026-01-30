import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { email, name, eventTitle, eventDate, eventLocation } = await req.json();

        const apiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL;
        const senderName = process.env.BREVO_SENDER_NAME || 'interACT Team';

        if (!apiKey || !senderEmail) {
            console.error('!!! [API ERROR] Missing configuration! BREVO_API_KEY or BREVO_SENDER_EMAIL is not set in .env.local');
            return NextResponse.json({
                error: 'Email service configuration missing on server',
                configPresent: { apiKey: !!apiKey, senderEmail: !!senderEmail }
            }, { status: 500 });
        }

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
            body: JSON.stringify({
                sender: {
                    name: senderName,
                    email: senderEmail,
                },
                to: [
                    {
                        email: email,
                        name: name,
                    },
                ],
                subject: `Registration Confirmed: ${eventTitle}`,
                htmlContent: `
          <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #333; line-height: 1.6;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2A9D8F; margin: 0; font-size: 28px; font-weight: 700;">You're Registered!</h1>
              <p style="font-size: 16px; color: #666; margin-top: 10px;">We're excited to have you join us for this interACT event.</p>
            </div>
            
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for registering for <strong>${eventTitle}</strong>. Your spot is confirmed! Below are the details for your records:</p>
            
            <div style="background-color: #f8f9fa; border-left: 4px solid #2A9D8F; padding: 25px; border-radius: 8px; margin: 30px 0;">
              <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #2A9D8F; text-transform: uppercase; letter-spacing: 1px;">Event Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; width: 100px;"><strong>Date:</strong></td>
                  <td style="padding: 8px 0;">${eventDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Location:</strong></td>
                  <td style="padding: 8px 0;">${eventLocation}</td>
                </tr>
              </table>
            </div>

            <p style="margin-bottom: 30px;">If you have any questions or need to change your registration, simply reply to this email or visit our website.</p>
            
            <div style="border-top: 1px solid #eee; padding-top: 30px; margin-top: 30px;">
              <p style="margin: 0; font-weight: 600; color: #2A9D8F;">Best regards,</p>
              <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: 700;">The interACT Team</p>
            </div>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #f0f0f0; text-align: center; font-size: 12px; color: #999;">
              <p>© ${new Date().getFullYear()} interACT Global. All rights reserved.</p>
              <p>You received this email because you registered for an event on theinteract.org.</p>
            </div>
          </div>
        `,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('!!! [API ERROR] Brevo API rejected the request:', JSON.stringify(errorData, null, 2));
            return NextResponse.json({
                error: 'Brevo API Error',
                details: errorData.message || 'Unknown error'
            }, { status: response.status });
        }

        console.log('>>> [API SUCCESS] Email sent successfully via Brevo');
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email registration error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
