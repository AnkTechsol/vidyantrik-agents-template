const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

async function generateCertificate({ user, course, score }) {
  const certificateId = uuidv4();
  const date = new Date().toLocaleDateString();

  // Simple HTML Template
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Helvetica', sans-serif; text-align: center; padding: 50px; }
        .border { border: 10px solid #ddd; padding: 50px; }
        h1 { color: #2c3e50; font-size: 48px; margin-bottom: 20px; }
        p { font-size: 24px; color: #7f8c8d; }
        .name { font-size: 32px; font-weight: bold; color: #2980b9; margin: 20px 0; }
        .course { font-size: 28px; font-weight: bold; margin: 20px 0; }
        .footer { margin-top: 50px; font-size: 18px; color: #95a5a6; display: flex; justify-content: space-between; }
      </style>
    </head>
    <body>
      <div class="border">
        <h1>Certificate of Completion</h1>
        <p>This is to certify that</p>
        <div class="name">${user.name || 'Student Name'}</div>
        <p>has successfully completed the course</p>
        <div class="course">${course.title || 'Vidyantrik Course'}</div>
        <p>with a score of ${score}%</p>

        <div class="footer">
          <div>Date: ${date}</div>
          <div>Certificate ID: ${certificateId}</div>
        </div>
      </div>
    </body>
    </html>
  `;

  // Ensure directory exists
  const certDir = path.join(__dirname, '../../certificates');
  if (!fs.existsSync(certDir)){
      fs.mkdirSync(certDir, { recursive: true });
  }

  const fileName = `${certificateId}.pdf`;
  const filePath = path.join(certDir, fileName);

  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    await page.pdf({ path: filePath, format: 'A4', landscape: true });
    await browser.close();

    // TODO: Upload to S3 and get real URL
    // TODO: Send email with attachment

    return {
      certificate_id: certificateId,
      file_path: filePath,
      file_url: `/certificates/${fileName}` // Local URL for now
    };
  } catch (error) {
    console.error('Error generating certificate:', error);
    throw error;
  }
}

module.exports = { generateCertificate };
