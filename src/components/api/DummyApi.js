export const getAdmissionData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let data = {
        total: 1250,
        verified: 890,
        rejected: 360,
        programWise: [
          { program: "Computer Science", count: 450 },
          { program: "Engineering", count: 380 },
          { program: "Business", count: 290 },
          { program: "Medicine", count: 130 },
        ],
        dailyTrend: [
          { date: "2024-03-01", applications: 45 },
          { date: "2024-03-02", applications: 52 },
          { date: "2024-03-03", applications: 38 },
          { date: "2024-03-04", applications: 65 },
          { date: "2024-03-05", applications: 42 },
          { date: "2024-03-06", applications: 48 },
          { date: "2024-03-07", applications: 55 },
        ],
      };
      resolve(data);
    }, 1000);
  });
};
