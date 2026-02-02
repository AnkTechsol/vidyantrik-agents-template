const express = require('express');
const router = express.Router();

// POST /api/courses/:id/submit-mcq
router.post('/:id/submit-mcq', (req, res) => {
  const courseId = req.params.id;
  const { answers } = req.body;
  const userId = req.user.id;

  // TODO: Retrieve correct answers from DB for this course/unit
  // TODO: Calculate score

  const mockScore = 85;
  const passed = mockScore >= 70;

  // TODO: Save attempt to DB

  res.json({
    score: mockScore,
    passed: passed,
    courseId: courseId
  });
});

module.exports = router;
