import React from 'react';

const courses = [
  { id: 1, title: 'Advanced React Patterns', duration: '6h 30m', level: 'Advanced', thumb: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop' },
  { id: 2, title: 'Tailwind Mastery', duration: '4h 15m', level: 'Intermediate', thumb: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop' },
  { id: 3, title: 'Fullstack Next.js 14', duration: '12h 00m', level: 'Beginner', thumb: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=250&fit=crop' },
];

const CourseList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">My Courses</h1>
          <p className="text-slate-600">Continue where you left off at Vidyantrik.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-slate-200">
              <img src={course.thumb} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3 text-sm">
                  <span className={`px-2.5 py-0.5 rounded-full font-medium ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    course.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-slate-500">• {course.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{course.title}</h3>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Start Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
