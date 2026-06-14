import type { AppRole, DashboardConfig } from '../types/app';

export const roleDashboardConfig: Record<AppRole, DashboardConfig> = {
  admin: {
    title: 'Admin Dashboard',
    subtitle: 'Track workflow health, approvals, and backlog in real time.',
    kpis: [
      {
        id: 'total-workflows',
        label: 'Total Workflows',
        value: '128',
        change: '+12% this month',
        changeDirection: 'up',
        icon: 'workflow',
        tone: 'blue',
        description:
          'Total active workflows configured across departments, including draft and published pipelines.',
        history: {
          title: 'Workflow Growth (Last 6 Months)',
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          values: [84, 92, 101, 112, 120, 128],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
        },
      },
      {
        id: 'pending-approvals',
        label: 'Pending Approvals',
        value: '23',
        change: '-8% from last week',
        changeDirection: 'down',
        icon: 'clockFading',
        tone: 'amber',
        description:
          'Approval requests currently waiting for action from assigned reviewers in the workflow chain.',
        history: {
          title: 'Pending Trend (Last 6 Weeks)',
          labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
          values: [34, 31, 29, 27, 25, 23],
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.22)',
        },
      },
      {
        id: 'completed-requests',
        label: 'Completed Requests',
        value: '462',
        change: '+18% this month',
        changeDirection: 'up',
        icon: 'checkCircle2',
        tone: 'emerald',
        description:
          'Requests successfully processed end-to-end with all required approvals and downstream notifications.',
        history: {
          title: 'Completed Throughput (Last 6 Months)',
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          values: [310, 332, 358, 389, 421, 462],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
        },
      },
      {
        id: 'rejected-requests',
        label: 'Rejected Requests',
        value: '14',
        change: '+2 cases this week',
        changeDirection: 'down',
        icon: 'xCircle',
        tone: 'rose',
        description:
          'Requests declined due to missing information, policy mismatch, or validation failures.',
        history: {
          title: 'Rejection Cases (Last 6 Weeks)',
          labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
          values: [8, 9, 10, 11, 12, 14],
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.2)',
        },
      },
    ],
    trendChart: {
      title: 'Workflow Throughput',
      description: 'Created vs completed requests over the last 6 months',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      series: [
        {
          label: 'Created',
          data: [54, 63, 78, 71, 86, 92],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
        },
        {
          label: 'Completed',
          data: [41, 52, 69, 64, 82, 88],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
        },
      ],
    },
    workloadChart: {
      title: 'Approval Load by Team',
      description: 'Current pending approvals by function',
      labels: ['HR', 'Finance', 'IT', 'Operations', 'Legal'],
      series: [
        {
          label: 'Pending',
          data: [5, 7, 4, 3, 4],
          backgroundColor: '#6366f1',
        },
      ],
    },
    statusChart: {
      title: 'Request Status Mix',
      description: 'Distribution of all requests in the current cycle',
      labels: ['Completed', 'Pending', 'Rejected'],
      data: [462, 23, 14],
      colors: ['#10b981', '#f59e0b', '#ef4444'],
    },
  },
};
