
import { formatCurrency } from "../formatCurrency";
import { createEmailTransport } from "../emailTransport";

interface NewInvoiceProps {
  id: string;
  senderName: string;
  clientName: string;
  clientEmail: string;
  invoiceNumber: number;
  dueDate: Date;
  total: number;
  currency: "USD" | "EUR" | "INR";
}
export const sendNewInvoice = async ({
  id,
  senderName,
  clientName,
  clientEmail,
  invoiceNumber,
  dueDate,
  total,
  currency,
}: NewInvoiceProps) => {
  const transport = createEmailTransport()

  const emailTemplate = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Invoice</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        text-align: center;
        padding: 20px 0;
        background-color: #f8f9fa;
      }
      .logo {
        max-width: 150px;
        height: auto;
      }
      .content {
        padding: 30px 0;
      }
      .button {
        display: inline-block;
        padding: 12px 24px;
        background-color: #0066cc;
        color: #ffffff !important;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        margin: 20px 0;
      }
      .button:hover {
        background-color: #0052a3;
      }
      .footer {
        text-align: center;
        padding: 20px;
        background-color: #f8f9fa;
        font-size: 12px;
        color: #666666;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="content">
        <h2>Invoice for ${clientName}</h2>

        <p>Dear ${clientName},</p>

        <p>
          This is ${senderName}, I hope this email finds you well. Please find attached your invoice
          attached below
        </p>

        <p>Invoice Details:</p>
        <ul>
          <li>Invoice Number: #${invoiceNumber}</li>
          <li>Due Date: ${dueDate}</li>
          <li>Total Amount: ${formatCurrency({ amount: total, currency })}</li>
        </ul>

        <p>You can download your invoice by clicking the button below:</p>

        <a href="${
          process.env.NEXT_PUBLIC_APP_URL
        }/api/invoice/${id}" class="button">Download Invoice</a>

        <p>
          If you have any questions or concerns, please don't hesitate to
          contact us.
        </p>

        <p>Thank you for your business!</p>
      </div>
    </div>
  </body>
</html>
    `;

  await transport.sendMail({
    from: process.env.EMAIL_SERVER_USER,
    to: clientEmail,
    subject: "New Invoice for you",
    html: emailTemplate,
  });
};
