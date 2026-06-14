# ProcessFlow

> Visual Hiring Workflow Builder for HR Teams

ProcessFlow is a drag-and-drop workflow automation platform designed to streamline hiring operations. HR teams can visually create recruitment pipelines, automate candidate communication, track interview SLAs, manage assessments, and orchestrate end-to-end hiring journeys without writing code.

---

## Overview

Hiring processes often become fragmented across emails, spreadsheets, ATS systems, interview panels, and manual follow-ups.

ProcessFlow solves this by providing a visual workflow builder where HR teams can design and automate recruitment journeys using configurable workflow nodes.

### Example Workflow

```text
Job Application Received
        ↓
Candidate Screening
        ↓
Assessment
        ↓
Interview Round 1
        ↓
Interview Round 2
        ↓
Offer Rollout
        ↓
Onboarding
```

---

## Features

### Visual Workflow Builder

Build hiring workflows using drag-and-drop nodes.

Supported Nodes:

* Trigger
* Screening
* Assessment
* Interview
* Approval
* Email
* SMS
* REST API
* Wait / SLA
* Condition
* Candidate Status Update
* Offer Letter
* Stop

---

### Dynamic Candidate Routing

Automatically route candidates based on:

* Assessment score
* Interview feedback
* Experience level
* Job role
* Hiring manager approval

Example:

```text
Score >= 70
     ↓
Technical Interview

Score < 70
     ↓
Rejected
```

---

### Assessment Management

Create configurable assessment stages within workflows.

Example:

```json
{
  "nodeType": "assessment",
  "assessmentName": "Frontend React Assessment",
  "passingScore": 70,
  "durationMinutes": 60,
  "allowRetake": false,
  "autoEvaluate": true,
  "nextStep": {
    "pass": "technical_interview",
    "fail": "rejected"
  }
}
```

Features:

* Coding Assessments
* MCQ Tests
* Aptitude Tests
* Assignments
* External Provider Integration (Future)

---

### Interview Management

Track interview progress and SLA compliance.

Features:

* Pending Interviews
* Scheduled Interviews
* Completed Interviews
* Feedback Pending
* SLA Monitoring

Example Dashboard Metrics:

```text
24 Candidates Waiting
5 Overdue Interviews
3 Pending Feedbacks
```

---

### Communication Automation

#### Email Automation

* Interview Invitations
* Assessment Invitations
* Offer Letters
* Rejection Emails
* Follow-up Emails

#### SMS Automation

* Interview Reminders
* Candidate Updates
* OTP Verification
* Status Notifications

---

### Template Management

Reusable communication templates.

#### Email Templates

Built using TipTap Rich Text Editor.

Supported Formatting:

* H1
* H2
* H3
* Bold
* Italic
* Underline
* Bullet Lists
* Ordered Lists
* Hyperlinks
* Images

#### SMS Templates

Example:

```text
Hi {{candidateName}},

Your interview is scheduled on {{interviewDate}}.

Thanks,
HR Team
```

---

### Workflow Versioning

Track workflow changes and releases.

Features:

* Save Draft
* Publish Workflow
* Version History
* Rollback Support

---

### Export Options

Export workflows as:

* PNG
* JSON

Useful for:

* Documentation
* Team Reviews
* Process Discussions

---

## Technology Stack

### Frontend

* React 19
* TypeScript
* Vite

### UI Framework

* Tailwind CSS
* Headless UI
* Lucide React

### Workflow Engine

* React Flow

### Rich Text Editor

* TipTap

### State Management

* React Hooks
* Context API

Future:

* Redux Toolkit

---

## Project Structure

```text
src
│
├── components
│   ├── common
│   ├── layout
│   └── forms
│
├── features
│   ├── workflow-builder
│   ├── templates
│   ├── settings
│   ├── users
│   └── dashboard
│
├── pages
├── hooks
├── services
├── utils
├── constants
└── types
```

---

## Current Status

| Module                    | Status |
| ------------------------- | ------ |
| Dashboard                 | ✅      |
| Workflow Builder          | ✅      |
| Theme Management          | ✅      |
| i18n Support              | ✅      |
| Sidebar Navigation        | ✅      |
| Template Management       | 🚧     |
| Assessment Builder        | 🚧     |
| Candidate Pipeline        | 🚧     |
| Interview Scheduler       | 🚧     |
| Workflow Execution Engine | 🚧     |

---

## Roadmap

### Phase 1

* Assessment Builder
* Candidate Pipeline
* Workflow Save API
* Workflow Publish API

### Phase 2

* Email Service Integration
* SMS Service Integration
* Notification Center
* SLA Dashboard

### Phase 3

* AI Resume Screening
* AI Candidate Ranking
* AI Interview Summary
* Hiring Analytics Dashboard

---

## Why ProcessFlow?

Most ATS platforms force organizations into predefined hiring stages.

ProcessFlow focuses on workflow orchestration, allowing organizations to design hiring journeys visually and automate repetitive recruitment tasks.

### Benefits

* Faster Hiring Cycles
* Reduced Manual Follow-ups
* Better SLA Compliance
* Improved Candidate Experience
* Fully Configurable Hiring Processes

---

## Sample Workflow

```text
Trigger
   ↓
Screening
   ↓
Assessment
   ↓
Interview Round 1
   ↓
Interview Round 2
   ↓
Offer
   ↓
Stop
```

---

## Future Enterprise Features

### AI Resume Screening

Automatically score resumes based on:

* Skills
* Experience
* Job Description Match

### AI Candidate Ranking

Generate ranked candidate lists.

### AI Interview Summary

Generate interview summaries from interviewer feedback.

### Workflow Analytics

Track:

* Time to Hire
* Offer Acceptance Rate
* Candidate Drop-Off Rate
* SLA Compliance

---

## Author

**Md Shoaib Akhtar**

Senior Software Engineer | Frontend Focused Full Stack Developer

### Expertise

* React
* TypeScript
* Next.js
* Node.js
* AWS
* GraphQL
* React Flow
* Workflow Automation Platforms

---

## License

MIT License

Copyright (c) 2026 ProcessFlow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.
