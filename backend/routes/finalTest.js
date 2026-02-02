const express = require('express');
const router = express.Router();
// const { generateCertificate } = require('../workers/generateCertificate'); // Will be implemented in Step 5

// POST /api/final-test/submit
router.post('/submit', async (req, res) => {
  const { answers } = req.body;
  const userId = req.user.id;

  // TODO: Check if all previous units are completed
  // TODO: Calculate score

  const score = 90; // Mock score
  const passed = score >= 80;

  if (passed) {
    // TODO: Trigger certificate generation
    // await generateCertificate({ user: req.user, course: { id: 'final' }, score });
  }

  res.json({
    score,
    passed,
    certificateAvailable: passed
  });
});

module.exports = router;
