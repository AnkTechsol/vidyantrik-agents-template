import React from 'react';
import PropTypes from 'prop-types';

// TODO: Fetch pending reviews from /api/admin/reviews

const AdminDashboard = ({ reviews, onApprove, onReject }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Trainer Dashboard</h1>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-lg font-semibold">Review Queue (Borderline Fails)</h2>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6">Student</th>
                <th className="py-3 px-6">Course</th>
                <th className="py-3 px-6">Score</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {reviews?.map((review) => (
                <tr key={review.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 whitespace-nowrap font-medium">{review.studentName}</td>
                  <td className="py-3 px-6">{review.courseName}</td>
                  <td className="py-3 px-6">
                    <span className="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-full text-xs">
                      {review.score}%
                    </span>
                  </td>
                  <td className="py-3 px-6">{review.date}</td>
                  <td className="py-3 px-6 flex items-center space-x-3">
                    <button
                      onClick={() => onApprove(review.id)}
                      className="text-green-600 hover:text-green-900 font-semibold"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => onReject(review.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
              {(!reviews || reviews.length === 0) && (
                <tr>
                  <td colSpan="5" className="py-6 text-center text-gray-500">
                    No pending reviews.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

AdminDashboard.propTypes = {
  reviews: PropTypes.array,
  onApprove: PropTypes.func,
  onReject: PropTypes.func,
};

export default AdminDashboard;
