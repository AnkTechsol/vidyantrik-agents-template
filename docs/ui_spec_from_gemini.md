{
  "app_name": "Vidyantrik Course UI",
  "pages": [
    {
      "title": "Course Landing",
      "route": "/",
      "main_components": ["CourseHeader", "UnitList", "EnrollButton"],
      "purpose": "Displays course overview and unit structure."
    },
    {
      "title": "Unit Page",
      "route": "/unit/:id",
      "main_components": ["VideoPlayer", "ContentBlock", "MCQSection"],
      "purpose": "Shows unit content and end-of-section MCQ."
    },
    {
      "title": "Final Test",
      "route": "/final-test",
      "main_components": ["Timer", "QuestionList", "SubmitButton"],
      "purpose": "Timed final assessment locked until units complete."
    },
    {
      "title": "Certificate",
      "route": "/certificate",
      "main_components": ["CertificateView", "SocialShareButton", "DownloadButton"],
      "purpose": "Displays earned certificate."
    },
    {
      "title": "Admin Dashboard",
      "route": "/admin",
      "main_components": ["ReviewQueue", "CertificateApprover"],
      "purpose": "Trainer review for borderline fails."
    }
  ],
  "components": [
    {
      "name": "CourseLanding",
      "props": ["courseData"],
      "expected_behavior": "Lists units, tracks progress.",
      "tailwind_classes": "max-w-4xl mx-auto p-6"
    },
    {
      "name": "UnitPage",
      "props": ["unitData", "onComplete"],
      "expected_behavior": "Shows content, verifies completion.",
      "tailwind_classes": "grid grid-cols-1 md:grid-cols-3 gap-6"
    },
    {
      "name": "MCQComponent",
      "props": ["questions", "onResult"],
      "expected_behavior": "Interactive quiz with immediate feedback.",
      "tailwind_classes": "bg-white shadow rounded p-6"
    },
    {
      "name": "FinalTest",
      "props": ["testData", "onSubmit"],
      "expected_behavior": "Timed, no feedback until end.",
      "tailwind_classes": "border-red-500 border-2 p-8"
    },
    {
      "name": "CertificatePage",
      "props": ["certificateUrl", "studentName"],
      "expected_behavior": "Shows PDF preview.",
      "tailwind_classes": "text-center p-10 bg-gray-50"
    },
    {
      "name": "AdminDashboard",
      "props": ["reviews", "onApprove"],
      "expected_behavior": "List of pending reviews.",
      "tailwind_classes": "w-full overflow-x-auto"
    }
  ],
  "UX_flows": [
    "student course enrollment -> unit page -> complete section -> MCQ -> immediate score -> save to backend",
    "student completes all units -> final test unlock -> submit final test -> if pass -> certificate issuance",
    "trainer review flow for borderline fails"
  ]
}
