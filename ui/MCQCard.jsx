/**
 * propTypes:
 * {string} questionText - The question to display
 * {Array} options - List of {id, text} answer choices
 * {string|number} selectedId - Currently selected option
 * {function} onSelect - Callback when an option is clicked
 * {boolean} isSubmitted - Whether the question is locked
 * {string|number} correctId - The ID of the correct answer
 */

import React from 'react';

export default function MCQCard({
  questionText = "Loading question...",
  options = [],
  selectedId,
  onSelect,
  isSubmitted,
  correctId
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xl font-semibold mb-4">{questionText}</h3>
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          const isCorrect = isSubmitted && option.id === correctId;
          const isWrong = isSubmitted && isSelected && option.id !== correctId;

          let borderClass = "border-slate-200";
          if (isSelected) borderClass = "border-blue-500 bg-blue-50";
          if (isCorrect) borderClass = "border-green-500 bg-green-50";
          if (isWrong) borderClass = "border-red-500 bg-red-50";

          return (
            <button
              key={option.id}
              disabled={isSubmitted}
              onClick={() => onSelect(option.id)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${ borderClass} ${!isSubmitted && 'hover:border-blue-300'}`}
            >
              {option.text}
            </button>
          );
        })}
      </div>
      {/* TODO: Add 'Submit' button here if internal state management is required */}
    </div>
  );
}
