import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// TODO: Lock until all units are done. Submit to /api/final-test/submit

const FinalTest = ({ testData, onSubmit }) => {
  const [timeLeft, setTimeLeft] = useState(testData?.durationSeconds || 3600);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (qId, optionIndex) => {
    setAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(answers);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="max-w-3xl mx-auto p-8 border-red-500 border-2 rounded-xl bg-white relative">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-red-600">Final Assessment</h1>
        <div className="text-xl font-mono bg-gray-100 px-4 py-2 rounded">
          Time Left: {formatTime(timeLeft)}
        </div>
      </div>

      <div className="space-y-8">
        {testData?.questions?.map((q, idx) => (
          <div key={q.id}>
            <p className="font-semibold text-lg mb-3">{idx + 1}. {q.text}</p>
            <div className="space-y-2 pl-4">
              {q.options.map((opt, optIdx) => (
                <label key={optIdx} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 rounded">
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    checked={answers[q.id] === optIdx}
                    onChange={() => handleSelect(q.id, optIdx)}
                    className="form-radio h-5 w-5 text-red-600"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6 text-right">
        <button
          onClick={handleSubmit}
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-lg"
        >
          Submit Final Exam
        </button>
      </div>
    </div>
  );
};

FinalTest.propTypes = {
  testData: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default FinalTest;
