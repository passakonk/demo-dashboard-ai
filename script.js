// ==============================================================
// Patient Appointment Tracking Dashboard
// Static demo only. All data below is fake mock data.
// No API calls, no database connections, and no permanent storage.
// ==============================================================

const demoDate = "2026-06-11T12:00:00+07:00";

const appointments = [
  {
    appointmentId: "APT-20260611-0001",
    requestId: "REQ-20260611-0001",
    hn: "HN900001",
    patientName: "Somchai Demo",
    phoneNumber: "+66810000001",
    email: "somchai.demo@example.com",
    dateOfBirth: "1985-05-20",
    preferredLanguage: "th-TH",
    department: "Cardiology",
    doctorName: "Dr. Anan",
    appointmentType: "Telehealth",
    currentStatus: "WAIT_PAYMENT",
    requestDateTime: "2026-06-11T09:30:00+07:00",
    requestedDateTime: "2026-06-15T13:30:00+07:00",
    confirmedDateTime: null,
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-11T10:00:00+07:00",
    paymentRequired: true,
    paymentStatus: "PENDING",
    paymentAmount: 1500,
    paymentLinkSentTime: "2026-06-11T10:10:00+07:00",
    paymentCompletedTime: null,
    paymentExpiredTime: "2026-06-12T10:10:00+07:00",
    reminderRequired: true,
    reminderStatus: "NOT_SENT",
    reminderChannel: "SMS",
    reminderSentTime: null,
    patientResponse: "NO_RESPONSE",
    assignedStaff: "Nurse May",
    lastUpdatedAt: "2026-06-11T10:15:00+07:00",
    slaStatus: "WARNING",
    requiresAction: true,
    actionReason: "Payment pending",
    priority: "HIGH",
    timelineEvents: [
      event("EVT-001", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-11T09:30:00+07:00", "Patient", "Web"),
      event("EVT-002", "PAYMENT_LINK_SENT", "Payment link was sent to patient", "2026-06-11T10:10:00+07:00", "Nurse May", "SMS")
    ],
    internalNotes: [
      note("NOTE-001", "Patient prefers afternoon appointment.", "2026-06-11T10:12:00+07:00", "Nurse May")
    ]
  },
  {
    appointmentId: "APT-20260611-0002",
    requestId: "REQ-20260611-0002",
    hn: "HN900002",
    patientName: "Mali Sample",
    phoneNumber: "+66810000002",
    email: "mali.sample@example.com",
    dateOfBirth: "1992-02-14",
    preferredLanguage: "en-US",
    department: "Dermatology",
    doctorName: "Dr. Chalida",
    appointmentType: "Onsite",
    currentStatus: "REQUESTED",
    requestDateTime: "2026-06-11T11:05:00+07:00",
    requestedDateTime: "2026-06-14T09:00:00+07:00",
    confirmedDateTime: null,
    profileStatus: "NOT_STARTED",
    missingProfileFields: ["National ID", "Emergency contact", "Address"],
    lastProfileUpdateTime: null,
    paymentRequired: false,
    paymentStatus: "NOT_REQUIRED",
    paymentAmount: 0,
    paymentLinkSentTime: null,
    paymentCompletedTime: null,
    paymentExpiredTime: null,
    reminderRequired: true,
    reminderStatus: "NOT_SENT",
    reminderChannel: "Call",
    reminderSentTime: null,
    patientResponse: "NO_RESPONSE",
    assignedStaff: "Staff Beam",
    lastUpdatedAt: "2026-06-11T11:05:00+07:00",
    slaStatus: "NORMAL",
    requiresAction: true,
    actionReason: "Scheduling not started",
    priority: "MEDIUM",
    timelineEvents: [
      event("EVT-003", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-11T11:05:00+07:00", "Patient", "Mobile")
    ],
    internalNotes: []
  },
  {
    appointmentId: "APT-20260611-0003",
    requestId: "REQ-20260611-0003",
    hn: "HN900003",
    patientName: "Niran Example",
    phoneNumber: "+66810000003",
    email: "niran.example@example.com",
    dateOfBirth: "1978-08-03",
    preferredLanguage: "th-TH",
    department: "Orthopedics",
    doctorName: "Dr. Ben",
    appointmentType: "Follow-up",
    currentStatus: "WAIT_PATIENT_CONFIRMATION",
    requestDateTime: "2026-06-10T08:45:00+07:00",
    requestedDateTime: "2026-06-13T15:00:00+07:00",
    confirmedDateTime: null,
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-10T09:10:00+07:00",
    paymentRequired: false,
    paymentStatus: "NOT_REQUIRED",
    paymentAmount: 0,
    paymentLinkSentTime: null,
    paymentCompletedTime: null,
    paymentExpiredTime: null,
    reminderRequired: true,
    reminderStatus: "NO_ANSWER",
    reminderChannel: "Call",
    reminderSentTime: "2026-06-11T08:30:00+07:00",
    patientResponse: "NO_ANSWER",
    assignedStaff: "Coordinator Ploy",
    lastUpdatedAt: "2026-06-11T08:35:00+07:00",
    slaStatus: "OVERDUE",
    requiresAction: true,
    actionReason: "Waiting patient confirmation too long",
    priority: "CRITICAL",
    timelineEvents: [
      event("EVT-004", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-10T08:45:00+07:00", "Patient", "Web"),
      event("EVT-005", "SCHEDULE_PROPOSED", "Schedule proposed by coordinator", "2026-06-10T09:20:00+07:00", "Coordinator Ploy", "Phone"),
      event("EVT-006", "PATIENT_NO_ANSWER", "Patient did not answer confirmation call", "2026-06-11T08:30:00+07:00", "Coordinator Ploy", "Call")
    ],
    internalNotes: [
      note("NOTE-002", "Try calling again after 14:00.", "2026-06-11T08:36:00+07:00", "Coordinator Ploy")
    ]
  },
  {
    appointmentId: "APT-20260611-0004",
    requestId: "REQ-20260611-0004",
    hn: "HN900004",
    patientName: "Lina Practice",
    phoneNumber: "+66810000004",
    email: "lina.practice@example.com",
    dateOfBirth: "2017-11-09",
    preferredLanguage: "en-US",
    department: "Pediatrics",
    doctorName: "Dr. Emily",
    appointmentType: "Onsite",
    currentStatus: "WAIT_PROFILE_COMPLETION",
    requestDateTime: "2026-06-11T07:50:00+07:00",
    requestedDateTime: "2026-06-12T10:30:00+07:00",
    confirmedDateTime: "2026-06-12T10:30:00+07:00",
    profileStatus: "INCOMPLETE",
    missingProfileFields: ["Guardian ID", "Allergy information"],
    lastProfileUpdateTime: "2026-06-11T08:10:00+07:00",
    paymentRequired: false,
    paymentStatus: "NOT_REQUIRED",
    paymentAmount: 0,
    paymentLinkSentTime: null,
    paymentCompletedTime: null,
    paymentExpiredTime: null,
    reminderRequired: true,
    reminderStatus: "NOT_SENT",
    reminderChannel: "SMS",
    reminderSentTime: null,
    patientResponse: "NO_RESPONSE",
    assignedStaff: "Nurse Kwan",
    lastUpdatedAt: "2026-06-11T08:12:00+07:00",
    slaStatus: "WARNING",
    requiresAction: true,
    actionReason: "Profile incomplete",
    priority: "HIGH",
    timelineEvents: [
      event("EVT-007", "PATIENT_REQUEST_SUBMITTED", "Guardian submitted appointment request", "2026-06-11T07:50:00+07:00", "Patient", "Web"),
      event("EVT-008", "PATIENT_CONFIRMED_APPOINTMENT", "Guardian confirmed appointment time", "2026-06-11T08:05:00+07:00", "Patient", "SMS")
    ],
    internalNotes: [
      note("NOTE-003", "Guardian can provide allergy information by phone.", "2026-06-11T08:14:00+07:00", "Nurse Kwan")
    ]
  },
  {
    appointmentId: "APT-20260611-0005",
    requestId: "REQ-20260611-0005",
    hn: "HN900005",
    patientName: "Arun Mock",
    phoneNumber: "+66810000005",
    email: "arun.mock@example.com",
    dateOfBirth: "1966-01-22",
    preferredLanguage: "th-TH",
    department: "Neurology",
    doctorName: "Dr. David",
    appointmentType: "Telehealth",
    currentStatus: "SCHEDULING_IN_PROGRESS",
    requestDateTime: "2026-06-11T10:20:00+07:00",
    requestedDateTime: "2026-06-16T16:00:00+07:00",
    confirmedDateTime: null,
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-11T10:28:00+07:00",
    paymentRequired: true,
    paymentStatus: "PENDING",
    paymentAmount: 2200,
    paymentLinkSentTime: null,
    paymentCompletedTime: null,
    paymentExpiredTime: null,
    reminderRequired: true,
    reminderStatus: "NOT_SENT",
    reminderChannel: "Email",
    reminderSentTime: null,
    patientResponse: "NO_RESPONSE",
    assignedStaff: "Staff Noon",
    lastUpdatedAt: "2026-06-11T10:44:00+07:00",
    slaStatus: "NORMAL",
    requiresAction: false,
    actionReason: "",
    priority: "LOW",
    timelineEvents: [
      event("EVT-009", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-11T10:20:00+07:00", "Patient", "Web"),
      event("EVT-010", "SCHEDULING_STARTED", "Staff started checking doctor availability", "2026-06-11T10:44:00+07:00", "Staff Noon", "Dashboard")
    ],
    internalNotes: []
  },
  {
    appointmentId: "APT-20260611-0006",
    requestId: "REQ-20260611-0006",
    hn: "HN900006",
    patientName: "Kanya Training",
    phoneNumber: "+66810000006",
    email: "kanya.training@example.com",
    dateOfBirth: "1999-07-18",
    preferredLanguage: "zh-CN",
    department: "Internal Medicine",
    doctorName: "Dr. Farah",
    appointmentType: "Health Checkup",
    currentStatus: "APPOINTMENT_CONFIRMED",
    requestDateTime: "2026-06-09T13:15:00+07:00",
    requestedDateTime: "2026-06-14T08:30:00+07:00",
    confirmedDateTime: "2026-06-14T08:30:00+07:00",
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-09T14:00:00+07:00",
    paymentRequired: true,
    paymentStatus: "PAID",
    paymentAmount: 3500,
    paymentLinkSentTime: "2026-06-09T14:10:00+07:00",
    paymentCompletedTime: "2026-06-09T14:20:00+07:00",
    paymentExpiredTime: "2026-06-10T14:10:00+07:00",
    reminderRequired: true,
    reminderStatus: "NOT_SENT",
    reminderChannel: "SMS",
    reminderSentTime: null,
    patientResponse: "NO_RESPONSE",
    assignedStaff: "Nurse May",
    lastUpdatedAt: "2026-06-09T14:22:00+07:00",
    slaStatus: "NORMAL",
    requiresAction: false,
    actionReason: "",
    priority: "LOW",
    timelineEvents: [
      event("EVT-011", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-09T13:15:00+07:00", "Patient", "Web"),
      event("EVT-012", "PATIENT_CONFIRMED_APPOINTMENT", "Patient confirmed appointment", "2026-06-09T13:50:00+07:00", "Patient", "SMS"),
      event("EVT-013", "PAYMENT_COMPLETED", "Patient completed payment", "2026-06-09T14:20:00+07:00", "Patient", "Payment Demo")
    ],
    internalNotes: []
  },
  {
    appointmentId: "APT-20260611-0007",
    requestId: "REQ-20260611-0007",
    hn: "HN900007",
    patientName: "Benja Placeholder",
    phoneNumber: "+66810000007",
    email: "benja.placeholder@example.com",
    dateOfBirth: "1958-04-30",
    preferredLanguage: "ja-JP",
    department: "ENT",
    doctorName: "Dr. Ben",
    appointmentType: "Onsite",
    currentStatus: "REMINDER_PENDING",
    requestDateTime: "2026-06-08T09:10:00+07:00",
    requestedDateTime: "2026-06-12T09:30:00+07:00",
    confirmedDateTime: "2026-06-12T09:30:00+07:00",
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-08T10:00:00+07:00",
    paymentRequired: false,
    paymentStatus: "NOT_REQUIRED",
    paymentAmount: 0,
    paymentLinkSentTime: null,
    paymentCompletedTime: null,
    paymentExpiredTime: null,
    reminderRequired: true,
    reminderStatus: "NOT_SENT",
    reminderChannel: "SMS",
    reminderSentTime: null,
    patientResponse: "NO_RESPONSE",
    assignedStaff: "Staff Beam",
    lastUpdatedAt: "2026-06-11T09:00:00+07:00",
    slaStatus: "WARNING",
    requiresAction: true,
    actionReason: "Appointment approaching but attendance not confirmed",
    priority: "HIGH",
    timelineEvents: [
      event("EVT-014", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-08T09:10:00+07:00", "Patient", "Call Center"),
      event("EVT-015", "PATIENT_CONFIRMED_APPOINTMENT", "Patient confirmed appointment", "2026-06-08T10:15:00+07:00", "Patient", "Call")
    ],
    internalNotes: [
      note("NOTE-004", "Needs Japanese language reminder if available.", "2026-06-11T09:03:00+07:00", "Staff Beam")
    ]
  },
  {
    appointmentId: "APT-20260611-0008",
    requestId: "REQ-20260611-0008",
    hn: "HN900008",
    patientName: "Dara Scenario",
    phoneNumber: "+66810000008",
    email: "dara.scenario@example.com",
    dateOfBirth: "1988-12-12",
    preferredLanguage: "en-US",
    department: "Ophthalmology",
    doctorName: "Dr. Emily",
    appointmentType: "Follow-up",
    currentStatus: "REMINDER_SENT",
    requestDateTime: "2026-06-07T15:25:00+07:00",
    requestedDateTime: "2026-06-12T14:00:00+07:00",
    confirmedDateTime: "2026-06-12T14:00:00+07:00",
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-07T16:00:00+07:00",
    paymentRequired: true,
    paymentStatus: "PAID",
    paymentAmount: 1200,
    paymentLinkSentTime: "2026-06-07T16:15:00+07:00",
    paymentCompletedTime: "2026-06-07T16:40:00+07:00",
    paymentExpiredTime: "2026-06-08T16:15:00+07:00",
    reminderRequired: true,
    reminderStatus: "SENT",
    reminderChannel: "Email",
    reminderSentTime: "2026-06-11T09:30:00+07:00",
    patientResponse: "NO_RESPONSE",
    assignedStaff: "Coordinator Ploy",
    lastUpdatedAt: "2026-06-11T09:30:00+07:00",
    slaStatus: "NORMAL",
    requiresAction: false,
    actionReason: "",
    priority: "LOW",
    timelineEvents: [
      event("EVT-016", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-07T15:25:00+07:00", "Patient", "Web"),
      event("EVT-017", "PAYMENT_COMPLETED", "Patient completed payment", "2026-06-07T16:40:00+07:00", "Patient", "Payment Demo"),
      event("EVT-018", "REMINDER_SENT", "Reminder sent to patient", "2026-06-11T09:30:00+07:00", "Coordinator Ploy", "Email")
    ],
    internalNotes: []
  },
  {
    appointmentId: "APT-20260611-0009",
    requestId: "REQ-20260611-0009",
    hn: "HN900009",
    patientName: "Suda Workshop",
    phoneNumber: "+66810000009",
    email: "suda.workshop@example.com",
    dateOfBirth: "1971-09-05",
    preferredLanguage: "th-TH",
    department: "Cardiology",
    doctorName: "Dr. Anan",
    appointmentType: "Onsite",
    currentStatus: "PATIENT_CONFIRMED_ATTENDANCE",
    requestDateTime: "2026-06-06T10:05:00+07:00",
    requestedDateTime: "2026-06-12T11:00:00+07:00",
    confirmedDateTime: "2026-06-12T11:00:00+07:00",
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-06T10:45:00+07:00",
    paymentRequired: true,
    paymentStatus: "PAID",
    paymentAmount: 1800,
    paymentLinkSentTime: "2026-06-06T10:55:00+07:00",
    paymentCompletedTime: "2026-06-06T11:12:00+07:00",
    paymentExpiredTime: "2026-06-07T10:55:00+07:00",
    reminderRequired: true,
    reminderStatus: "PATIENT_CONFIRMED",
    reminderChannel: "SMS",
    reminderSentTime: "2026-06-11T08:00:00+07:00",
    patientResponse: "CONFIRM_ATTEND",
    assignedStaff: "Nurse May",
    lastUpdatedAt: "2026-06-11T08:08:00+07:00",
    slaStatus: "NORMAL",
    requiresAction: false,
    actionReason: "",
    priority: "LOW",
    timelineEvents: [
      event("EVT-019", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-06T10:05:00+07:00", "Patient", "Web"),
      event("EVT-020", "REMINDER_SENT", "Reminder sent to patient", "2026-06-11T08:00:00+07:00", "Nurse May", "SMS"),
      event("EVT-021", "PATIENT_CONFIRMED_ATTENDANCE", "Patient confirmed attendance", "2026-06-11T08:08:00+07:00", "Patient", "SMS")
    ],
    internalNotes: []
  },
  {
    appointmentId: "APT-20260611-0010",
    requestId: "REQ-20260611-0010",
    hn: "HN900010",
    patientName: "Omar Demo",
    phoneNumber: "+66810000010",
    email: "omar.demo@example.com",
    dateOfBirth: "1981-03-27",
    preferredLanguage: "ar-SA",
    department: "Internal Medicine",
    doctorName: "Dr. Farah",
    appointmentType: "Telehealth",
    currentStatus: "RESCHEDULE_REQUESTED",
    requestDateTime: "2026-06-05T09:00:00+07:00",
    requestedDateTime: "2026-06-12T13:00:00+07:00",
    confirmedDateTime: "2026-06-12T13:00:00+07:00",
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-05T09:40:00+07:00",
    paymentRequired: true,
    paymentStatus: "PAID",
    paymentAmount: 2600,
    paymentLinkSentTime: "2026-06-05T09:45:00+07:00",
    paymentCompletedTime: "2026-06-05T10:02:00+07:00",
    paymentExpiredTime: "2026-06-06T09:45:00+07:00",
    reminderRequired: true,
    reminderStatus: "RESCHEDULE_REQUESTED",
    reminderChannel: "SMS",
    reminderSentTime: "2026-06-11T09:15:00+07:00",
    patientResponse: "REQUEST_RESCHEDULE",
    assignedStaff: "Staff Noon",
    lastUpdatedAt: "2026-06-11T09:18:00+07:00",
    slaStatus: "WARNING",
    requiresAction: true,
    actionReason: "Patient requested reschedule",
    priority: "HIGH",
    timelineEvents: [
      event("EVT-022", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-05T09:00:00+07:00", "Patient", "Web"),
      event("EVT-023", "PATIENT_CONFIRMED_APPOINTMENT", "Patient confirmed appointment", "2026-06-05T09:32:00+07:00", "Patient", "SMS"),
      event("EVT-024", "PATIENT_REQUESTED_RESCHEDULE", "Patient requested reschedule after reminder", "2026-06-11T09:18:00+07:00", "Patient", "SMS")
    ],
    internalNotes: [
      note("NOTE-005", "Patient asked for next week if possible.", "2026-06-11T09:20:00+07:00", "Staff Noon")
    ]
  },
  {
    appointmentId: "APT-20260611-0011",
    requestId: "REQ-20260611-0011",
    hn: "HN900011",
    patientName: "Pim Testcase",
    phoneNumber: "+66810000011",
    email: "pim.testcase@example.com",
    dateOfBirth: "1995-10-19",
    preferredLanguage: "th-TH",
    department: "Dermatology",
    doctorName: "Dr. Chalida",
    appointmentType: "Health Checkup",
    currentStatus: "WAIT_PAYMENT",
    requestDateTime: "2026-06-09T11:35:00+07:00",
    requestedDateTime: "2026-06-13T10:00:00+07:00",
    confirmedDateTime: "2026-06-13T10:00:00+07:00",
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-09T12:00:00+07:00",
    paymentRequired: true,
    paymentStatus: "EXPIRED",
    paymentAmount: 4200,
    paymentLinkSentTime: "2026-06-09T12:15:00+07:00",
    paymentCompletedTime: null,
    paymentExpiredTime: "2026-06-10T12:15:00+07:00",
    reminderRequired: true,
    reminderStatus: "NOT_SENT",
    reminderChannel: "SMS",
    reminderSentTime: null,
    patientResponse: "NO_RESPONSE",
    assignedStaff: "Staff Beam",
    lastUpdatedAt: "2026-06-10T12:20:00+07:00",
    slaStatus: "OVERDUE",
    requiresAction: true,
    actionReason: "Payment link expired",
    priority: "CRITICAL",
    timelineEvents: [
      event("EVT-025", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-09T11:35:00+07:00", "Patient", "Web"),
      event("EVT-026", "PAYMENT_LINK_SENT", "Payment link was sent to patient", "2026-06-09T12:15:00+07:00", "Staff Beam", "SMS"),
      event("EVT-027", "PAYMENT_LINK_EXPIRED", "Payment link expired before payment", "2026-06-10T12:15:00+07:00", "Demo System", "Dashboard")
    ],
    internalNotes: [
      note("NOTE-006", "High-value health checkup package; resend link today.", "2026-06-10T12:22:00+07:00", "Staff Beam")
    ]
  },
  {
    appointmentId: "APT-20260611-0012",
    requestId: "REQ-20260611-0012",
    hn: "HN900012",
    patientName: "Victor Simulated",
    phoneNumber: "+66810000012",
    email: "victor.simulated@example.com",
    dateOfBirth: "1974-06-11",
    preferredLanguage: "en-US",
    department: "Neurology",
    doctorName: "Dr. David",
    appointmentType: "Follow-up",
    currentStatus: "CANCELLED",
    requestDateTime: "2026-06-04T14:10:00+07:00",
    requestedDateTime: "2026-06-10T15:30:00+07:00",
    confirmedDateTime: "2026-06-10T15:30:00+07:00",
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-04T14:30:00+07:00",
    paymentRequired: false,
    paymentStatus: "NOT_REQUIRED",
    paymentAmount: 0,
    paymentLinkSentTime: null,
    paymentCompletedTime: null,
    paymentExpiredTime: null,
    reminderRequired: true,
    reminderStatus: "SENT",
    reminderChannel: "Email",
    reminderSentTime: "2026-06-09T15:00:00+07:00",
    patientResponse: "CANCELLED",
    assignedStaff: "Nurse Kwan",
    lastUpdatedAt: "2026-06-09T15:42:00+07:00",
    slaStatus: "NORMAL",
    requiresAction: false,
    actionReason: "",
    priority: "LOW",
    timelineEvents: [
      event("EVT-028", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-04T14:10:00+07:00", "Patient", "Web"),
      event("EVT-029", "REMINDER_SENT", "Reminder sent to patient", "2026-06-09T15:00:00+07:00", "Nurse Kwan", "Email"),
      event("EVT-030", "APPOINTMENT_CANCELLED", "Patient cancelled appointment", "2026-06-09T15:42:00+07:00", "Patient", "Email")
    ],
    internalNotes: []
  },
  {
    appointmentId: "APT-20260611-0013",
    requestId: "REQ-20260611-0013",
    hn: "HN900013",
    patientName: "Mei Demo",
    phoneNumber: "+66810000013",
    email: "mei.demo@example.com",
    dateOfBirth: "2001-05-07",
    preferredLanguage: "zh-CN",
    department: "Ophthalmology",
    doctorName: "Dr. Emily",
    appointmentType: "Onsite",
    currentStatus: "COMPLETED",
    requestDateTime: "2026-06-01T09:25:00+07:00",
    requestedDateTime: "2026-06-10T09:00:00+07:00",
    confirmedDateTime: "2026-06-10T09:00:00+07:00",
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-01T09:55:00+07:00",
    paymentRequired: true,
    paymentStatus: "PAID",
    paymentAmount: 900,
    paymentLinkSentTime: "2026-06-01T10:00:00+07:00",
    paymentCompletedTime: "2026-06-01T10:05:00+07:00",
    paymentExpiredTime: "2026-06-02T10:00:00+07:00",
    reminderRequired: true,
    reminderStatus: "PATIENT_CONFIRMED",
    reminderChannel: "SMS",
    reminderSentTime: "2026-06-09T08:00:00+07:00",
    patientResponse: "CONFIRM_ATTEND",
    assignedStaff: "Staff Noon",
    lastUpdatedAt: "2026-06-10T09:52:00+07:00",
    slaStatus: "NORMAL",
    requiresAction: false,
    actionReason: "",
    priority: "LOW",
    timelineEvents: [
      event("EVT-031", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-01T09:25:00+07:00", "Patient", "Web"),
      event("EVT-032", "PATIENT_CONFIRMED_ATTENDANCE", "Patient confirmed attendance", "2026-06-09T08:04:00+07:00", "Patient", "SMS"),
      event("EVT-033", "APPOINTMENT_COMPLETED", "Appointment completed", "2026-06-10T09:52:00+07:00", "Clinic Staff", "Dashboard")
    ],
    internalNotes: [
      note("NOTE-007", "Visit completed in normal flow.", "2026-06-10T09:55:00+07:00", "Staff Noon")
    ]
  },
  {
    appointmentId: "APT-20260611-0014",
    requestId: "REQ-20260611-0014",
    hn: "HN900014",
    patientName: "Hana Prototype",
    phoneNumber: "+66810000014",
    email: "hana.prototype@example.com",
    dateOfBirth: "1989-09-21",
    preferredLanguage: "ja-JP",
    department: "ENT",
    doctorName: "Dr. Ben",
    appointmentType: "Telehealth",
    currentStatus: "REMINDER_PENDING",
    requestDateTime: "2026-06-08T16:10:00+07:00",
    requestedDateTime: "2026-06-12T16:30:00+07:00",
    confirmedDateTime: "2026-06-12T16:30:00+07:00",
    profileStatus: "COMPLETED",
    missingProfileFields: [],
    lastProfileUpdateTime: "2026-06-08T16:40:00+07:00",
    paymentRequired: true,
    paymentStatus: "PAID",
    paymentAmount: 1600,
    paymentLinkSentTime: "2026-06-08T17:00:00+07:00",
    paymentCompletedTime: "2026-06-08T17:07:00+07:00",
    paymentExpiredTime: "2026-06-09T17:00:00+07:00",
    reminderRequired: true,
    reminderStatus: "FAILED",
    reminderChannel: "SMS",
    reminderSentTime: "2026-06-11T10:00:00+07:00",
    patientResponse: "NO_RESPONSE",
    assignedStaff: "Coordinator Ploy",
    lastUpdatedAt: "2026-06-11T10:01:00+07:00",
    slaStatus: "OVERDUE",
    requiresAction: true,
    actionReason: "Reminder failed",
    priority: "CRITICAL",
    timelineEvents: [
      event("EVT-034", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-08T16:10:00+07:00", "Patient", "Web"),
      event("EVT-035", "PAYMENT_COMPLETED", "Patient completed payment", "2026-06-08T17:07:00+07:00", "Patient", "Payment Demo"),
      event("EVT-036", "REMINDER_FAILED", "Reminder failed in demo channel", "2026-06-11T10:01:00+07:00", "Demo System", "SMS")
    ],
    internalNotes: []
  },
  {
    appointmentId: "APT-20260611-0015",
    requestId: "REQ-20260611-0015",
    hn: "HN900015",
    patientName: "Karim Training",
    phoneNumber: "+66810000015",
    email: "karim.training@example.com",
    dateOfBirth: "1969-12-01",
    preferredLanguage: "ar-SA",
    department: "Orthopedics",
    doctorName: "Dr. Anan",
    appointmentType: "Health Checkup",
    currentStatus: "WAIT_PROFILE_COMPLETION",
    requestDateTime: "2026-06-10T12:30:00+07:00",
    requestedDateTime: "2026-06-17T09:30:00+07:00",
    confirmedDateTime: null,
    profileStatus: "NOT_STARTED",
    missingProfileFields: ["Passport number", "Address", "Medication list"],
    lastProfileUpdateTime: null,
    paymentRequired: true,
    paymentStatus: "FAILED",
    paymentAmount: 5000,
    paymentLinkSentTime: "2026-06-10T13:00:00+07:00",
    paymentCompletedTime: null,
    paymentExpiredTime: "2026-06-11T13:00:00+07:00",
    reminderRequired: true,
    reminderStatus: "NOT_SENT",
    reminderChannel: "Email",
    reminderSentTime: null,
    patientResponse: "NO_RESPONSE",
    assignedStaff: "Nurse Kwan",
    lastUpdatedAt: "2026-06-11T10:30:00+07:00",
    slaStatus: "WARNING",
    requiresAction: true,
    actionReason: "Profile incomplete and payment failed",
    priority: "HIGH",
    timelineEvents: [
      event("EVT-037", "PATIENT_REQUEST_SUBMITTED", "Patient submitted appointment request", "2026-06-10T12:30:00+07:00", "Patient", "Web"),
      event("EVT-038", "PAYMENT_FAILED", "Payment attempt failed in demo data", "2026-06-11T10:30:00+07:00", "Demo System", "Payment Demo")
    ],
    internalNotes: [
      note("NOTE-008", "Needs assistance completing international profile fields.", "2026-06-11T10:35:00+07:00", "Nurse Kwan")
    ]
  }
];

const statusLabels = {
  REQUESTED: "Requested",
  SCHEDULING_IN_PROGRESS: "Scheduling in Progress",
  WAIT_PATIENT_CONFIRMATION: "Waiting Patient Confirmation",
  WAIT_PROFILE_COMPLETION: "Waiting Profile Completion",
  WAIT_PAYMENT: "Waiting Payment",
  APPOINTMENT_CONFIRMED: "Appointment Confirmed",
  REMINDER_PENDING: "Reminder Pending",
  REMINDER_SENT: "Reminder Sent",
  PATIENT_CONFIRMED_ATTENDANCE: "Patient Confirmed Attendance",
  RESCHEDULE_REQUESTED: "Reschedule Requested",
  CANCELLED: "Cancelled",
  COMPLETED: "Completed"
};

const pipelineColumns = [
  { title: "Requested", statuses: ["REQUESTED"] },
  { title: "Scheduling", statuses: ["SCHEDULING_IN_PROGRESS"] },
  { title: "Wait Confirm", statuses: ["WAIT_PATIENT_CONFIRMATION"] },
  { title: "Wait Profile", statuses: ["WAIT_PROFILE_COMPLETION"] },
  { title: "Wait Payment", statuses: ["WAIT_PAYMENT"] },
  { title: "Confirmed", statuses: ["APPOINTMENT_CONFIRMED", "PATIENT_CONFIRMED_ATTENDANCE"] },
  { title: "Reminder", statuses: ["REMINDER_PENDING", "REMINDER_SENT"] },
  { title: "Reschedule", statuses: ["RESCHEDULE_REQUESTED"] },
  { title: "Completed", statuses: ["COMPLETED", "CANCELLED"] }
];

// These variables hold current screen state. They are reset when the page reloads.
let filteredAppointments = [...appointments];
let selectedAppointmentId = null;
let activeOverviewGroup = "";

const overviewStatusGroups = {
  newRequest: ["REQUESTED"],
  waitingContact: [
    "WAIT_PATIENT_CONFIRMATION",
    "WAIT_PROFILE_COMPLETION",
    "REMINDER_PENDING",
    "RESCHEDULE_REQUESTED"
  ],
  waitingPayment: ["WAIT_PAYMENT"],
  confirmed: [
    "APPOINTMENT_CONFIRMED",
    "REMINDER_SENT",
    "PATIENT_CONFIRMED_ATTENDANCE",
    "COMPLETED"
  ]
};

document.addEventListener("DOMContentLoaded", function () {
  populateFilterOptions();
  attachFilterEvents();
  attachAccordionEvents();
  attachStickyDashboardScroll();
  renderDashboard();
});

function event(eventId, eventType, description, createdAt, createdBy, channel) {
  return { eventId, eventType, description, createdAt, createdBy, channel };
}

function note(noteId, noteText, createdAt, createdBy) {
  return { noteId, note: noteText, createdAt, createdBy };
}

function renderDashboard() {
  filteredAppointments = applyFilters();
  renderKpiCards();
  renderPipeline();
  renderActionCenter();
  renderAppointmentTable();
  document.getElementById("filteredCount").textContent = `${filteredAppointments.length} appointments`;
}

function renderKpiCards() {
  const summaryItems = [
    {
      groupKey: "newRequest",
      label: "New Request",
      number: countStatus("REQUESTED"),
      subText: "Not complete",
      action: "Start scheduling",
      className: "new-request"
    },
    {
      groupKey: "waitingContact",
      label: "Waiting for Contact",
      number: countStatuses([
        "WAIT_PATIENT_CONFIRMATION",
        "WAIT_PROFILE_COMPLETION",
        "REMINDER_PENDING",
        "RESCHEDULE_REQUESTED"
      ]),
      subText: "Not complete",
      action: "Call or follow up",
      className: "waiting-contact"
    },
    {
      groupKey: "waitingPayment",
      label: "Waiting for Payment",
      number: countStatus("WAIT_PAYMENT"),
      subText: "Not complete",
      action: "Resend payment link",
      className: "waiting-payment"
    },
    {
      groupKey: "confirmed",
      label: "Confirmed",
      number: countStatuses([
        "APPOINTMENT_CONFIRMED",
        "REMINDER_SENT",
        "PATIENT_CONFIRMED_ATTENDANCE",
        "COMPLETED"
      ]),
      subText: "Confirmed or complete",
      action: "Monitor visit",
      className: "confirmed"
    }
  ];

  const cardsHtml = summaryItems.map(function (item) {
    const activeClass = activeOverviewGroup === item.groupKey ? "is-active" : "";

    return `
      <button class="status-summary-item ${item.className} ${activeClass}" type="button" onclick="filterByOverviewGroup('${item.groupKey}')">
        <div class="status-summary-label">${item.label}</div>
        <div class="status-summary-number">${item.number}</div>
        <div class="status-summary-sub">${item.subText}</div>
        <div class="status-summary-action">${item.action}</div>
      </button>
    `;
  }).join("");

  const html = `
    <section class="status-overview-card" aria-label="Main appointment status groups">
      <div class="status-summary-grid">${cardsHtml}</div>
    </section>
  `;

  document.getElementById("kpiCards").innerHTML = html;
}

function renderPipeline() {
  const pipelineHtml = pipelineColumns.map(function (column) {
    const columnAppointments = filteredAppointments.filter(function (appointment) {
      return column.statuses.includes(appointment.currentStatus);
    });

    const cardHtml = columnAppointments.map(function (appointment) {
      const actionClass = appointment.requiresAction ? "action-needed" : "";
      const overdueClass = appointment.slaStatus === "OVERDUE" ? "overdue" : "";

      return `
        <button class="pipeline-card ${actionClass} ${overdueClass}" type="button" onclick="openAppointmentDetail('${appointment.appointmentId}')">
          <div class="card-title">
            <span>${appointment.patientName}</span>
            ${appointment.requiresAction ? "<span class='badge badge-warning'>Action</span>" : ""}
          </div>
          <div class="card-meta">${appointment.hn} | ${appointment.department}</div>
          <div class="card-meta">${appointment.doctorName} | ${appointment.appointmentType}</div>
          <div class="badge-row">
            ${statusBadge(appointment.currentStatus)}
            ${slaBadge(appointment.slaStatus)}
          </div>
          <div class="card-meta">Assigned: ${appointment.assignedStaff}</div>
          <div class="card-meta">Updated: ${formatDateTime(appointment.lastUpdatedAt)}</div>
        </button>
      `;
    }).join("");

    return `
      <div class="pipeline-column">
        <div class="pipeline-column-header">
          <span>${column.title}</span>
          <span class="column-count">${columnAppointments.length}</span>
        </div>
        ${cardHtml || "<div class='empty-state'>No appointments</div>"}
      </div>
    `;
  }).join("");

  document.getElementById("pipeline").innerHTML = pipelineHtml;
}

function renderActionCenter() {
  const actionItems = filteredAppointments.filter(function (appointment) {
    return appointment.requiresAction;
  });

  if (actionItems.length === 0) {
    document.getElementById("actionCenter").innerHTML = "<div class='empty-state'>No action items match the current filters.</div>";
    return;
  }

  const html = actionItems.map(function (appointment) {
    const priorityClass = appointment.priority.toLowerCase();
    const suggestedActions = getSuggestedActions(appointment);

    const buttons = suggestedActions.map(function (actionName) {
      return `<button class="text-button" type="button" onclick="simulateAction('${actionName}', '${appointment.appointmentId}')">${actionName}</button>`;
    }).join("");

    return `
      <article class="action-item priority-${priorityClass}">
        <div class="action-title">${appointment.patientName} (${appointment.hn})</div>
        <div class="action-reason">${appointment.actionReason}</div>
        <div class="badge-row">
          ${priorityBadge(appointment.priority)}
          ${slaBadge(appointment.slaStatus)}
        </div>
        <div class="card-meta">Assigned: ${appointment.assignedStaff}</div>
        <div class="action-buttons">${buttons}</div>
      </article>
    `;
  }).join("");

  document.getElementById("actionCenter").innerHTML = html;
}

function renderAppointmentTable() {
  if (filteredAppointments.length === 0) {
    document.getElementById("appointmentTableBody").innerHTML = `
      <tr>
        <td colspan="14">
          <div class="empty-state">No appointments match the current filters.</div>
        </td>
      </tr>
    `;
    return;
  }

  const rows = filteredAppointments.map(function (appointment) {
    return `
      <tr>
        <td>${appointment.appointmentId}</td>
        <td>${appointment.hn}</td>
        <td>${appointment.patientName}</td>
        <td>${appointment.department}</td>
        <td>${appointment.doctorName}</td>
        <td>${appointment.appointmentType}</td>
        <td>${statusBadge(appointment.currentStatus)}</td>
        <td>${profileBadge(appointment.profileStatus)}</td>
        <td>${paymentBadge(appointment.paymentStatus)}</td>
        <td>${reminderBadge(appointment.reminderStatus)}</td>
        <td>${slaBadge(appointment.slaStatus)}</td>
        <td>${appointment.assignedStaff}</td>
        <td>${formatDateTime(appointment.lastUpdatedAt)}</td>
        <td><button class="text-button" type="button" onclick="openAppointmentDetail('${appointment.appointmentId}')">View Detail</button></td>
      </tr>
    `;
  }).join("");

  document.getElementById("appointmentTableBody").innerHTML = rows;
}

function applyFilters() {
  const searchText = document.getElementById("searchInput").value.trim().toLowerCase();
  const fromDate = document.getElementById("fromDateFilter").value;
  const toDate = document.getElementById("toDateFilter").value;
  const department = document.getElementById("departmentFilter").value;
  const doctor = document.getElementById("doctorFilter").value;
  const type = document.getElementById("typeFilter").value;
  const status = document.getElementById("statusFilter").value;
  const payment = document.getElementById("paymentFilter").value;
  const profile = document.getElementById("profileFilter").value;
  const reminder = document.getElementById("reminderFilter").value;
  const sla = document.getElementById("slaFilter").value;
  const staff = document.getElementById("staffFilter").value;
  const overviewStatuses = activeOverviewGroup ? overviewStatusGroups[activeOverviewGroup] : null;

  return appointments.filter(function (appointment) {
    const searchableText = [
      appointment.hn,
      appointment.patientName,
      appointment.phoneNumber,
      appointment.appointmentId
    ].join(" ").toLowerCase();

    const requestedDate = appointment.requestedDateTime.slice(0, 10);

    if (searchText && !searchableText.includes(searchText)) return false;
    if (fromDate && requestedDate < fromDate) return false;
    if (toDate && requestedDate > toDate) return false;
    if (department && appointment.department !== department) return false;
    if (doctor && appointment.doctorName !== doctor) return false;
    if (type && appointment.appointmentType !== type) return false;
    if (status && appointment.currentStatus !== status) return false;
    if (overviewStatuses && !overviewStatuses.includes(appointment.currentStatus)) return false;
    if (payment && appointment.paymentStatus !== payment) return false;
    if (profile && appointment.profileStatus !== profile) return false;
    if (reminder && appointment.reminderStatus !== reminder) return false;
    if (sla && appointment.slaStatus !== sla) return false;
    if (staff && appointment.assignedStaff !== staff) return false;

    return true;
  });
}

function filterByOverviewGroup(groupKey) {
  activeOverviewGroup = activeOverviewGroup === groupKey ? "" : groupKey;
  document.getElementById("statusFilter").value = "";

  renderDashboard();
  openAccordionPanel("pipelinePanel");
  openAccordionPanel("tablePanel");

  if (groupKey === "waitingContact" || groupKey === "waitingPayment") {
    openAccordionPanel("actionCenterPanel");
  }

  document.getElementById("pipelineTitle").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function openAppointmentDetail(appointmentId) {
  const appointment = appointments.find(function (item) {
    return item.appointmentId === appointmentId;
  });

  if (!appointment) return;

  selectedAppointmentId = appointmentId;
  document.getElementById("modalTitle").textContent = `${appointment.patientName} (${appointment.hn})`;
  document.getElementById("modalSubtitle").textContent = `${appointment.appointmentId} | ${appointment.department} | ${statusLabels[appointment.currentStatus]}`;
  document.getElementById("modalContent").innerHTML = renderDetailContent(appointment);
  document.getElementById("detailModal").hidden = false;
}

function closeAppointmentDetail() {
  selectedAppointmentId = null;
  document.getElementById("detailModal").hidden = true;
}

function renderDetailContent(appointment) {
  return `
    <div class="detail-grid">
      <section class="detail-section">
        <h3>Patient Information</h3>
        <div class="info-list">
          ${infoRow("HN", appointment.hn)}
          ${infoRow("Patient name", appointment.patientName)}
          ${infoRow("Phone number", appointment.phoneNumber)}
          ${infoRow("Email", appointment.email)}
          ${infoRow("Date of birth", appointment.dateOfBirth)}
          ${infoRow("Preferred language", appointment.preferredLanguage)}
        </div>
      </section>

      <section class="detail-section">
        <h3>Appointment Information</h3>
        <div class="info-list">
          ${infoRow("Appointment ID", appointment.appointmentId)}
          ${infoRow("Request ID", appointment.requestId)}
          ${infoRow("Request date/time", formatDateTime(appointment.requestDateTime))}
          ${infoRow("Department", appointment.department)}
          ${infoRow("Doctor", appointment.doctorName)}
          ${infoRow("Appointment type", appointment.appointmentType)}
          ${infoRow("Requested date/time", formatDateTime(appointment.requestedDateTime))}
          ${infoRow("Confirmed date/time", formatDateTime(appointment.confirmedDateTime))}
          ${infoRow("Current status", statusBadge(appointment.currentStatus))}
        </div>
      </section>

      <section class="detail-section">
        <h3>Profile Status</h3>
        <div class="info-list">
          ${infoRow("Profile completed", appointment.profileStatus === "COMPLETED" ? "Yes" : "No")}
          ${infoRow("Profile status", profileBadge(appointment.profileStatus))}
          ${infoRow("Missing fields", appointment.missingProfileFields.length ? appointment.missingProfileFields.join(", ") : "None")}
          ${infoRow("Last profile update", formatDateTime(appointment.lastProfileUpdateTime))}
        </div>
      </section>

      <section class="detail-section">
        <h3>Payment Status</h3>
        <div class="info-list">
          ${infoRow("Payment required", appointment.paymentRequired ? "Yes" : "No")}
          ${infoRow("Payment amount", appointment.paymentRequired ? `${formatMoney(appointment.paymentAmount)} THB` : "Not required")}
          ${infoRow("Payment status", paymentBadge(appointment.paymentStatus))}
          ${infoRow("Payment link sent", formatDateTime(appointment.paymentLinkSentTime))}
          ${infoRow("Payment completed", formatDateTime(appointment.paymentCompletedTime))}
          ${infoRow("Payment expired", formatDateTime(appointment.paymentExpiredTime))}
        </div>
      </section>

      <section class="detail-section">
        <h3>Reminder Status</h3>
        <div class="info-list">
          ${infoRow("Reminder required", appointment.reminderRequired ? "Yes" : "No")}
          ${infoRow("Reminder channel", appointment.reminderChannel)}
          ${infoRow("Reminder status", reminderBadge(appointment.reminderStatus))}
          ${infoRow("Reminder sent", formatDateTime(appointment.reminderSentTime))}
          ${infoRow("Patient response", appointment.patientResponse)}
        </div>
      </section>

      <section class="detail-section">
        <h3>Case Ownership</h3>
        <div class="info-list">
          ${infoRow("Assigned staff", appointment.assignedStaff)}
          ${infoRow("SLA status", slaBadge(appointment.slaStatus))}
          ${infoRow("Requires action", appointment.requiresAction ? "Yes" : "No")}
          ${infoRow("Action reason", appointment.actionReason || "No current action required")}
          ${infoRow("Priority", priorityBadge(appointment.priority))}
        </div>
      </section>

      <section class="detail-section full-width">
        <h3>Timeline History</h3>
        ${renderTimeline(appointment.timelineEvents)}
      </section>

      <section class="detail-section full-width">
        <h3>Internal Notes</h3>
        <div id="notesList" class="notes-list">
          ${renderInternalNotes(appointment.internalNotes)}
        </div>
        <form class="note-form" onsubmit="addInternalNote(event)">
          <label>
            Add note for this demo session
            <textarea id="newNoteText" placeholder="Type a temporary internal note"></textarea>
          </label>
          <button class="primary-button" type="submit">Add Internal Note</button>
        </form>
      </section>
    </div>
  `;
}

function renderTimeline(events) {
  if (!events.length) {
    return "<div class='empty-state'>No timeline events available.</div>";
  }

  const html = events.map(function (item) {
    return `
      <li class="timeline-item">
        <div class="timeline-title">${item.description}</div>
        <div class="timeline-meta">${formatDateTime(item.createdAt)} | ${item.createdBy} | ${item.channel}</div>
        <div class="timeline-meta">${item.eventType}</div>
      </li>
    `;
  }).join("");

  return `<ul class="timeline">${html}</ul>`;
}

function renderInternalNotes(notes) {
  if (!notes.length) {
    return "<div class='empty-state'>No internal notes yet.</div>";
  }

  return notes.map(function (item) {
    return `
      <article class="note-item">
        <div class="note-text">${item.note}</div>
        <div class="note-meta">${formatDateTime(item.createdAt)} | ${item.createdBy}</div>
      </article>
    `;
  }).join("");
}

function addInternalNote(eventObject) {
  eventObject.preventDefault();

  const textArea = document.getElementById("newNoteText");
  const noteText = textArea.value.trim();

  if (!noteText || !selectedAppointmentId) return;

  const appointment = appointments.find(function (item) {
    return item.appointmentId === selectedAppointmentId;
  });

  appointment.internalNotes.push({
    noteId: `NOTE-DEMO-${appointment.internalNotes.length + 1}`,
    note: noteText,
    createdAt: demoDate,
    createdBy: "Demo Staff"
  });

  textArea.value = "";
  document.getElementById("notesList").innerHTML = renderInternalNotes(appointment.internalNotes);
  showDemoMessage(`Demo action only: Internal note added for ${appointment.patientName}`);
}

function simulateAction(actionName, appointmentId) {
  const appointment = appointments.find(function (item) {
    return item.appointmentId === appointmentId;
  });

  if (!appointment) return;

  showDemoMessage(`Demo action only: ${actionName} simulated for ${appointment.patientName}`);

  appointment.timelineEvents.push({
    eventId: `EVT-DEMO-${appointment.timelineEvents.length + 1}`,
    eventType: "DEMO_ACTION_SIMULATED",
    description: `${actionName} was simulated in the prototype`,
    createdAt: demoDate,
    createdBy: "Demo Staff",
    channel: "Dashboard"
  });

  if (selectedAppointmentId === appointmentId) {
    openAppointmentDetail(appointmentId);
  }
}

function resetFilters() {
  const filterIds = [
    "searchInput",
    "fromDateFilter",
    "toDateFilter",
    "departmentFilter",
    "doctorFilter",
    "typeFilter",
    "statusFilter",
    "paymentFilter",
    "profileFilter",
    "reminderFilter",
    "slaFilter",
    "staffFilter"
  ];

  filterIds.forEach(function (id) {
    document.getElementById(id).value = "";
  });

  activeOverviewGroup = "";
  renderDashboard();
  showDemoMessage("Filters reset. Showing all mock appointments.");
}

function populateFilterOptions() {
  addOptions("departmentFilter", uniqueValues("department"));
  addOptions("doctorFilter", uniqueValues("doctorName"));
  addOptions("typeFilter", uniqueValues("appointmentType"));
  addOptions("statusFilter", Object.keys(statusLabels), statusLabels);
  addOptions("paymentFilter", uniqueValues("paymentStatus"));
  addOptions("profileFilter", uniqueValues("profileStatus"));
  addOptions("reminderFilter", uniqueValues("reminderStatus"));
  addOptions("slaFilter", uniqueValues("slaStatus"));
  addOptions("staffFilter", uniqueValues("assignedStaff"));
}

function attachFilterEvents() {
  const filterIds = [
    "searchInput",
    "fromDateFilter",
    "toDateFilter",
    "departmentFilter",
    "doctorFilter",
    "typeFilter",
    "statusFilter",
    "paymentFilter",
    "profileFilter",
    "reminderFilter",
    "slaFilter",
    "staffFilter"
  ];

  filterIds.forEach(function (id) {
    document.getElementById(id).addEventListener("input", function () {
      activeOverviewGroup = "";
      renderDashboard();
    });
    document.getElementById(id).addEventListener("change", function () {
      activeOverviewGroup = "";
      renderDashboard();
    });
  });

  document.addEventListener("keydown", function (eventObject) {
    if (eventObject.key === "Escape") {
      closeAppointmentDetail();
    }
  });

  document.getElementById("detailModal").addEventListener("click", function (eventObject) {
    if (eventObject.target.id === "detailModal") {
      closeAppointmentDetail();
    }
  });
}

function attachAccordionEvents() {
  const accordionButtons = document.querySelectorAll(".accordion-trigger");

  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleAccordion(button);
    });
  });
}

function attachStickyDashboardScroll() {
  const dashboard = document.querySelector(".dashboard-sticky");

  if (!dashboard) return;

  function updateStickyDashboard() {
    dashboard.classList.toggle("is-scrolled", window.scrollY > 20);
  }

  updateStickyDashboard();
  window.addEventListener("scroll", updateStickyDashboard);
}

function toggleAccordion(button) {
  const panelId = button.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);
  const isOpen = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", String(!isOpen));
  panel.hidden = isOpen;
}

function openAccordionPanel(panelId) {
  const panel = document.getElementById(panelId);
  const button = document.querySelector(`[aria-controls="${panelId}"]`);

  if (!panel || !button) return;

  panel.hidden = false;
  button.setAttribute("aria-expanded", "true");
}

function uniqueValues(fieldName) {
  const values = appointments.map(function (appointment) {
    return appointment[fieldName];
  });

  return [...new Set(values)].sort();
}

function addOptions(selectId, values, labels) {
  const select = document.getElementById(selectId);

  values.forEach(function (value) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = labels ? labels[value] : value;
    select.appendChild(option);
  });
}

function getSuggestedActions(appointment) {
  if (appointment.currentStatus === "REQUESTED") {
    return ["Assign Staff", "Update Status"];
  }

  if (appointment.currentStatus === "RESCHEDULE_REQUESTED") {
    return ["Call Patient", "Update Status", "Add Internal Note"];
  }

  if (appointment.paymentStatus === "EXPIRED" || appointment.paymentStatus === "FAILED") {
    return ["Resend Payment Link", "Call Patient", "Escalate Case"];
  }

  if (appointment.paymentStatus === "PENDING") {
    return ["Resend Payment Link", "Mark as Contacted"];
  }

  if (appointment.reminderStatus === "FAILED" || appointment.reminderStatus === "NOT_SENT") {
    return ["Send Reminder", "Call Patient", "Add Internal Note"];
  }

  return ["Call Patient", "Mark as Contacted", "Escalate Case"];
}

function countStatus(status) {
  return appointments.filter(function (appointment) {
    return appointment.currentStatus === status;
  }).length;
}

function countStatuses(statuses) {
  return appointments.filter(function (appointment) {
    return statuses.includes(appointment.currentStatus);
  }).length;
}

function countActionForStatus(status) {
  return appointments.filter(function (appointment) {
    return appointment.currentStatus === status && appointment.requiresAction;
  }).length;
}

function infoRow(label, value) {
  return `
    <div class="info-row">
      <div class="info-label">${label}</div>
      <div>${value || "Not available"}</div>
    </div>
  `;
}

function statusBadge(status) {
  let className = "badge-info";

  if (status === "COMPLETED" || status === "PATIENT_CONFIRMED_ATTENDANCE" || status === "APPOINTMENT_CONFIRMED") {
    className = "badge-success";
  }

  if (status === "WAIT_PAYMENT" || status === "WAIT_PROFILE_COMPLETION" || status === "WAIT_PATIENT_CONFIRMATION" || status === "REMINDER_PENDING" || status === "RESCHEDULE_REQUESTED") {
    className = "badge-warning";
  }

  if (status === "CANCELLED") {
    className = "badge-danger";
  }

  return `<span class="badge ${className}">${statusLabels[status] || status}</span>`;
}

function profileBadge(status) {
  const className = status === "COMPLETED" ? "badge-success" : "badge-warning";
  return `<span class="badge ${className}">${status}</span>`;
}

function paymentBadge(status) {
  let className = "badge-info";

  if (status === "PAID" || status === "NOT_REQUIRED") className = "badge-success";
  if (status === "PENDING") className = "badge-warning";
  if (status === "EXPIRED" || status === "FAILED") className = "badge-danger";

  return `<span class="badge ${className}">${status}</span>`;
}

function reminderBadge(status) {
  let className = "badge-info";

  if (status === "PATIENT_CONFIRMED" || status === "SENT" || status === "NOT_REQUIRED") className = "badge-success";
  if (status === "NOT_SENT" || status === "NO_ANSWER" || status === "RESCHEDULE_REQUESTED") className = "badge-warning";
  if (status === "FAILED") className = "badge-danger";

  return `<span class="badge ${className}">${status}</span>`;
}

function slaBadge(status) {
  let className = "badge-success";

  if (status === "WARNING") className = "badge-warning";
  if (status === "OVERDUE") className = "badge-danger";

  return `<span class="badge ${className}">SLA ${status}</span>`;
}

function priorityBadge(priority) {
  let className = "badge-teal";

  if (priority === "MEDIUM") className = "badge-info";
  if (priority === "HIGH") className = "badge-warning";
  if (priority === "CRITICAL") className = "badge-danger";

  return `<span class="badge ${className}">${priority}</span>`;
}

function formatDateTime(value) {
  if (!value) return "Not available";

  const date = new Date(value);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatMoney(amount) {
  return Number(amount).toLocaleString("en-US");
}

function showDemoMessage(message) {
  document.getElementById("demoMessage").textContent = message;
}
