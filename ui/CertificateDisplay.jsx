import React from 'react';

const CertificateDisplay = ({ isOpen = true, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        {/* Certificate Preview Area */}
        <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 p-12 border-8 border-indigo-100">
          {/* Decorative Corner */}
          <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-indigo-300" />
          <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-indigo-300" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-indigo-300" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-indigo-300" />

          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">V</span>
              </div>
              <h2 className="text-xl font-semibold text-indigo-900">Vidyantrik Academy</h2>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-6">Certificate of Completion</h1>
            <p className="text-lg text-slate-700">This is to certify that</p>
            <div className="my-6">
              <h3 className="text-3xl font-bold text-indigo-900 mb-2">Jane Doe</h3>
              <div className="w-64 mx-auto h-1 bg-indigo-300" />
            </div>
            <p className="text-base text-slate-700 max-w-2xl mx-auto">
              Has successfully completed the professional certification course in
            </p>
            <h4 className="text-2xl font-semibold text-slate-900 mt-4">
              Advanced UI/UX Engineering with Tailwind
            </h4>

            <div className="flex justify-around mt-12 pt-8 border-t-2 border-indigo-200">
              <div className="text-center">
                <p className="text-sm text-slate-600 mb-1">Issue Date</p>
                <p className="text-base font-semibold text-slate-900">February 02, 2026</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-slate-600 mb-1">Verify ID</p>
                <p className="text-base font-semibold text-slate-900">VT-9928-X02</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200">
          <p className="text-center text-sm text-slate-600 mb-4">Share your achievement with the world!</p>
          <div className="flex gap-3 justify-center">
            <button onClick={onClose} className="px-6 py-2 border border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-100 transition-colors">
              Close
            </button>
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a 3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;
