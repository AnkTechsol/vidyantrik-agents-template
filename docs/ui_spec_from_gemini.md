# Vidyantrik Course UI - UI Spec from Gemini

```json
{
  "app_name": "Vidyantrik Course UI",
  "pages": [
    {
      "title": "Student Dashboard",
      "route": "/dashboard",
      "main_components": ["CourseCard", "GlobalProgress"],
      "purpose": "Overview of enrolled courses and overall learning progress."
    },
    {
      "title": "Unit Viewer",
      "route": "/course/:courseId/unit/:unitId",
      "main_components": ["SidebarNav", "ContentRenderer", "CompleteButton"],
      "purpose": "Primary interface for consuming course videos and reading materials."
    },
    {
      "title": "Assessment Module",
      "route": "/course/:courseId/quiz/:unitId",
      "main_components": ["MCQCard", "Timer", "ScoreModal"],
      "purpose": "Testing knowledge for specific units with immediate feedback."
    },
    {
      "title": "Final Certification",
      "route": "/course/:courseId/final",
      "main_components": ["ExamInterface", "CertificatePreview"],
      "purpose": "Comprehensive final test to earn the course certificate."
    },
    {
      "title": "Trainer Review Portal",
      "route": "/trainer/review",
      "main_components": ["BorderlineTable", "GradeAdjuster"],
      "purpose": "Interface for instructors to manually review and pass borderline students."
    }
  ],
  "components": [
    {
      "name": "MCQCard",
      "props": ["questionText", "options", "correctId"],
      "behavior": "Selects single option; highlights selection; locks on submission.",
      "tailwind_classes": "p-6 bg-white rounded-xl shadow-sm border border-slate-200"
    },
    {
      "name": "SidebarNav",
      "props": ["units", "currentUnitId", "completionStatus"],
      "behavior": "Visualizes progress; handles navigation between units; locks future units.",
      "tailwind_classes": "w-64 h-full bg-slate-50 border-r flex flex-col"
    },
    {
      "name": "ScoreModal",
      "props": ["score", "passingScore", "onClose"],
      "behavior": "Triggers on quiz completion; shows pass/fail animation; triggers data sync.",
      "tailwind_classes": "fixed inset-0 flex items-center justify-center bg-black/50"
    }
  ],
  "UX_flows": [
    {
      "name": "Standard Learning Loop",
      "steps": [
        "User selects 'Enroll' on course catalog.",
        "System redirects to Unit Viewer page.",
        "User clicks 'Mark as Complete' after consuming content.",
        "System displays MCQ Assessment interface.",
        "User submits quiz and views ScoreModal immediately.",
        "System POSTs result to /api/progress and enables next unit."
      ]
    },
    {
      "name": "Certification Path",
      "steps": [
        "System detects all unit completion flags are true.",
        "Final Test button state changes from disabled to active.",
        "User completes Final Exam and submits.",
        "Logic check: if score >= 70%, trigger Certificate issuance.",
        "User redirected to Certificate View with download option."
      ]
    },
    {
      "name": "Trainer Borderline Review",
      "steps": [
        "Trainer filters ReviewTable for 'Borderline' (65-69%).",
        "Trainer selects specific student attempt to review.",
        "Trainer adjusts score or adds manual pass override.",
        "System updates student record and triggers automatic certificate email."
      ]
    }
  ]
}
```
