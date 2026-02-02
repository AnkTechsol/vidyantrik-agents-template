import React, { useState } from 'react';

const QuizInterface = () => {
  const [selected, setSelected] = useState(null);
  const progress = 60;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="h-1.5 bg-indigo-600 transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Question 06 of 10</h2>
          <button className="text-sm font-medium text-slate-600 hover:text-slate-900">Save & Exit</button>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-3xl">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Which React hook is specifically used to handle side effects in a functional component?
            </h1>

            <div className="space-y-3">
              {['useState', 'useEffect', 'useContext', 'useReducer'].map((option, idx) => (
                <label key={idx} className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selected === idx 
                    ? 'border-indigo-600 bg-indigo-50' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}>
                  <input 
                    type="radio" 
                    name="quiz" 
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                    onChange={() => setSelected(idx)}
                  />
                  <span className="text-lg font-medium text-slate-900">{option}</span>
                </label>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Submit Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
