import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TODO: Connect to backend to save MCQ results

const MCQComponent = ({ questions, onResult }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleSelect = (qId, optionIndex) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctIndex) correctCount++;
    });
    const finalScore = (correctCount / questions.length) * 100;
    setScore(finalScore);
    setSubmitted(true);
    if (onResult) onResult(finalScore, finalScore >= 70);
  };

  return (
    <div className="bg-white shadow rounded p-6 space-y-6">
      {questions.map((q, idx) => (
        <div key={q.id} className="border-b pb-4 last:border-0">
          <p className="font-medium mb-3">{idx + 1}. {q.text}</p>
          <div className="space-y-2">
            {q.options.map((opt, optIdx) => (
              <button
                key={optIdx}
                onClick={() => handleSelect(q.id, optIdx)}
                className={`w-full text-left p-2 rounded border ${
                  answers[q.id] === optIdx
                    ? 'bg-blue-50 border-blue-500'
                    : 'hover:bg-gray-50 border-gray-200'
                } ${submitted && q.correctIndex === optIdx ? 'bg-green-100 border-green-500' : ''}
                   ${submitted && answers[q.id] === optIdx && q.correctIndex !== optIdx ? 'bg-red-100 border-red-500' : ''}
                `}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700"
        >
          Submit Answers
        </button>
      )}

      {submitted && (
        <div className={`text-center p-3 rounded ${score >= 70 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          Score: {score.toFixed(0)}% - {score >= 70 ? 'Passed' : 'Try Again'}
        </div>
      )}
    </div>
  );
};

MCQComponent.propTypes = {
  questions: PropTypes.array,
  onResult: PropTypes.func,
};

export default MCQComponent;
