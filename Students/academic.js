const calendar = [
  {
    start: "2025-09-01",
    end: "2025-09-05",
    activity: "Week 1: Registration/Issuing of Admission Letters",
  },
  {
    start: "2025-09-06",
    end: "2025-09-12",
    activity: "Week 2: Orientation on Usage of Meet App for Online Classes",
  },
  {
    start: "2025-09-13",
    end: "2025-09-19",
    activity: "Week 3: Lectures Begin/Academic Activities",
  },
  {
    start: "2025-09-20",
    end: "2025-09-26",
    activity: "Week 4: Academic Activities",
  },
  {
    start: "2025-09-27",
    end: "2025-10-03",
    activity: "Week 5: Academic Activities",
  },
  {
    start: "2025-10-04",
    end: "2025-10-10",
    activity: "Week 6: Academic Activities",
  },
  {
    start: "2025-10-11",
    end: "2025-10-17",
    activity: "Week 7: Academic Activities",
  },
  {
    start: "2025-10-18",
    end: "2025-10-24",
    activity: "Week 8: Mid-term Break",
  },
  {
    start: "2025-10-25",
    end: "2025-10-31",
    activity: "Week 9: Academic Activities",
  },
  {
    start: "2025-11-01",
    end: "2025-11-07",
    activity: "Week 10: Academic Activities",
  },
  {
    start: "2025-11-08",
    end: "2025-11-14",
    activity: "Week 11: Academic Activities",
  },
  {
    start: "2025-11-15",
    end: "2025-11-21",
    activity: "Week 12: Academic Activities",
  },
  { start: "2025-11-22", end: "2025-11-28", activity: "Week 13: Revision" },
  {
    start: "2025-11-29",
    end: "2025-12-05",
    activity: "Week 14: Examination",
  },
  {
    start: "2025-12-06",
    end: "2025-12-12",
    activity: "Week 15: Examination",
  },
];

// helper to remove hours/minutes/seconds from dates
function normalize(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Get today’s normalized date
const today = normalize(new Date());

// Find the week that matches today
let currentActivity = "No activity scheduled today.";
calendar.forEach((week) => {
  const start = normalize(new Date(week.start));
  const end = normalize(new Date(week.end));
  if (today >= start && today <= end) {
    currentActivity = week.activity;
  }
});

// Display in dashboard
document.getElementById("academic-activity").textContent = currentActivity;

alert(
  `📢 Important Reminder — First Term Closing & Exam Notice

Dear Student,

Exams are approaching soon. After the holiday we will enter the Second Term, in shaa' Allah.

Payment window is now open for those ready. Pay anytime from now until the end of the First-Term holiday.

Thank you for choosing Lisanun Mubeen Academy.
For payment, please contact your Ustadh.

Barakallahu feekum.`
);
