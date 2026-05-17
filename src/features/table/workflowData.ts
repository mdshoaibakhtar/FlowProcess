export type Workflow = {
  id: number;
  workflowName: string;
  createdAt: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
};

const users = [
  'John Doe',
  'Sarah Smith',
  'Alex Johnson',
  'Emma Brown',
  'Michael Lee',
  'Olivia Davis',
  'William Clark',
  'Sophia Taylor',
];

export const workflowData: Workflow[] = Array.from({ length: 100 }, (_, index) => {
  const randomUser = users[Math.floor(Math.random() * users.length)];

  const createdDate = new Date(
    2025,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1,
  );

  const modifiedDate = new Date(
    2026,
    Math.floor(Math.random() * 5),
    Math.floor(Math.random() * 28) + 1,
  );

  return {
    id: index + 1,
    workflowName: `Workflow ${index + 1}`,
    createdAt: createdDate.toLocaleDateString(),
    lastModifiedBy: randomUser,
    lastModifiedDate: modifiedDate.toLocaleDateString(),
  };
});
