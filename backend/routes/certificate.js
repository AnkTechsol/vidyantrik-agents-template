const express = require('express');
const router = express.Router();
const { generateCertificatePdf } = require('../services/certificateService');

// POST /api/certificate/generate
router.post('/generate', async (req, res) => {
  const { courseId, score } = req.body;
  const user = req.user;

  try {
    const certificateUrl = await generateCertificatePdf(user, { id: courseId }, score);
    // TODO: Save to DB
    res.json({ url: certificateUrl });
  } catch (error) {
    res.status(500).json({ error: 'Certificate generation failed' });
  }
});

module.exports = router;
