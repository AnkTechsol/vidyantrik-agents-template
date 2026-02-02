import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TODO: Wire up API calls for enrollment and progress tracking

const CourseLanding = ({ courseData, userProgress, onEnroll }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{courseData?.title || 'Course Title'}</h1>
      <p className="text-gray-600 mb-6">{courseData?.description || 'Course Description'}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Units</h2>
        <ul className="space-y-3">
          {courseData?.units?.map((unit, index) => (
            <li key={unit.id} className="p-4 border rounded hover:bg-gray-50 flex justify-between items-center">
              <span>{index + 1}. {unit.title}</span>
              <span className={`text-sm ${userProgress?.completedUnits?.includes(unit.id) ? 'text-green-600' : 'text-gray-400'}`}>
                {userProgress?.completedUnits?.includes(unit.id) ? 'Completed' : 'Pending'}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <button
          onClick={onEnroll}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {userProgress?.enrolled ? 'Continue Course' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
};

CourseLanding.propTypes = {
  courseData: PropTypes.object,
  userProgress: PropTypes.object,
  onEnroll: PropTypes.func,
};

export default CourseLanding;
