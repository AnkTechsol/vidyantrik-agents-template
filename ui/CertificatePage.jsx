import React from 'react';
import PropTypes from 'prop-types';

// TODO: Fetch certificate URL from backend

const CertificatePage = ({ certificateUrl, studentName, courseName }) => {
  return (
    <div className="text-center p-10 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 shadow-xl rounded-xl max-w-2xl w-full border-4 border-double border-yellow-400">
        <h1 className="text-4xl font-serif text-gray-800 mb-2">Certificate of Completion</h1>
        <p className="text-gray-500 mb-8">This certifies that</p>

        <h2 className="text-3xl font-bold text-blue-900 mb-4">{studentName || 'Student Name'}</h2>

        <p className="text-gray-500 mb-2">has successfully completed the course</p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">{courseName || 'Vidyantrik Course'}</h3>

        <div className="border-t pt-8 flex justify-between items-end">
          <div className="text-left">
            <p className="text-sm text-gray-400">Date</p>
            <p className="font-mono">{new Date().toLocaleDateString()}</p>
          </div>
          <div className="text-right">
            <div className="h-10 border-b border-black mb-1 w-32"></div>
            <p className="text-sm text-gray-400">Instructor Signature</p>
          </div>
        </div>
      </div>

      <div className="mt-8 space-x-4">
        <a
          href={certificateUrl}
          download
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
        >
          Download PDF
        </a>
        <button className="bg-sky-500 text-white px-6 py-3 rounded shadow hover:bg-sky-600">
          Share on LinkedIn
        </button>
      </div>
    </div>
  );
};

CertificatePage.propTypes = {
  certificateUrl: PropTypes.string,
  studentName: PropTypes.string,
  courseName: PropTypes.string,
};

export default CertificatePage;
