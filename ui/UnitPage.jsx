import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MCQComponent from './MCQComponent';

// TODO: Fetch unit content and save completion status

const UnitPage = ({ unitData, onComplete }) => {
  const [showMCQ, setShowMCQ] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="md:col-span-2 space-y-6">
        <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg flex items-center justify-center text-white">
          {/* Video Player Placeholder */}
          <span>Video Player</span>
        </div>
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold">{unitData?.title}</h2>
          <div className="markdown-content">
            {unitData?.content || 'Unit content goes here...'}
          </div>
        </div>
      </div>

      <div className="md:col-span-1">
        <div className="bg-gray-50 p-4 rounded-lg sticky top-4">
          <h3 className="font-semibold mb-4">Unit Progress</h3>
          {!showMCQ ? (
            <button
              onClick={() => setShowMCQ(true)}
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
              Take Quiz
            </button>
          ) : (
            <MCQComponent
              questions={unitData?.questions || []}
              onResult={(score, passed) => onComplete(score, passed)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

UnitPage.propTypes = {
  unitData: PropTypes.object,
  onComplete: PropTypes.func,
};

export default UnitPage;
