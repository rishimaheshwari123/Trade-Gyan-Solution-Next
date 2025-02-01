const paymentSuccessEmail = (
    name, serviceName, enrollmentDate, expirationDate
) => {
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Payment Successful</title>
        <style>
            body {
                background-color: #f4f4f4;
                font-family: 'Arial', sans-serif;
                color: #333;
                margin: 0;
                padding: 0;
            }

            .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 30px;
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            }

            .header {
                text-align: center;
                margin-bottom: 20px;
            }

            .logo {
                max-width: 200px;
                margin-bottom: 10px;
            }

            .message {
                font-size: 28px;
                font-weight: bold;
                color: #4CAF50;
                margin-bottom: 15px;
            }

            .body {
                font-size: 18px;
                color: #555;
                margin-bottom: 20px;
                line-height: 1.6;
            }

            .info {
                border-top: 2px solid #FFD60A;
                padding-top: 15px;
                margin-top: 15px;
            }

            .info p {
                margin: 8px 0;
            }

            .highlight {
                font-weight: bold;
                color: #FFA500;
            }

            .invoice {
                margin-top: 20px;
                padding: 20px;
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 8px;
            }

            .invoice-title {
                font-size: 22px;
                font-weight: bold;
                color: #333;
                text-align: center;
                margin-bottom: 15px;
            }

            .cta {
                display: inline-block;
                padding: 12px 24px;
                background-color: #4CAF50;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
                font-size: 18px;
                font-weight: bold;
                margin: 20px 0;
                text-align: center;
            }

            .cta:hover {
                background-color: #45a049;
            }

            .support {
                font-size: 14px;
                color: #999;
                text-align: center;
                margin-top: 30px;
            }

            .footer {
                font-size: 12px;
                color: #777;
                text-align: center;
                margin-top: 20px;
            }

            .footer a {
                color: #4CAF50;
                text-decoration: none;
            }

            @media (max-width: 600px) {
                .container {
                    padding: 20px;
                }
                .message {
                    font-size: 24px;
                }
                .body {
                    font-size: 16px;
                }
                .cta {
                    font-size: 16px;
                    padding: 10px 20px;
                }
            }
        </style>
    </head>

    <body>
        <div class="container">
            <div class="header">
                <a href="https://www.tradegyan.co/">
                    <img class="logo" src="https://i.ibb.co/ZdF6Cdr/tradegyan.png" alt="Trade Gyan Logo">
                </a>
                <div class="message">Payment Successful</div>
            </div>
            <div class="body">
                <p>Dear <span class="highlight">${name}</span>,</p>
                <p>Your payment for the service has been successfully processed. Here are your details:</p>
            </div>
            <div class="invoice">
                <div class="invoice-title">Invoice Details</div>
                <div class="info">
                    <p><span class="highlight">Service Name:</span> ${serviceName}</p>
                    <p><span class="highlight">Enrollment Date:</span> ${enrollmentDate}</p>
                    <p><span class="highlight">Expiration Date:</span> ${expirationDate}</p>
                </div>
                <p>Thank you for choosing our services! If you have any questions, feel free to reach out.</p>
            </div>
            <a href="https://www.tradegyan.co" class="cta">Visit TradeGyan</a>
            <div class="support">If you need further assistance, please contact our support team.</div>
           
        </div>
    </body>

    </html>
    `;
};

module.exports = { paymentSuccessEmail };
