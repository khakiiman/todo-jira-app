export interface Issue {
  id: number;
  title: string;
  type: string;
  status: string;
  priority: string;
  listPosition: number;
  createdAt: string;
  updatedAt: string;
  userIds: number[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  projectId: number;
}

export interface Project {
  id?: number;
  name: string;
  url: string;
  description: string;
  category: string;
  createdAt?: string;
  updatedAt?: string;
}

export const issueData:Issue[] = [
  {
    id: 851201,
    title:
      'Try dragging issues to different columns to transition their status.',
    type: 'bug',
    status: 'backlog',
    priority: '3',
    listPosition: 3,
    createdAt: '2022-12-30T11:16:46.916Z',
    updatedAt: '2022-12-30T11:16:46.916Z',
    userIds: [],
  },
  {
    id: 851202,
    title: "Click on an issue to see what's behind it.",
    type: 'task',
    status: 'backlog',
    priority: '2',
    listPosition: 2,
    createdAt: '2022-12-30T11:16:46.917Z',
    updatedAt: '2022-12-30T11:16:46.917Z',
    userIds: [314625],
  },
  {
    id: 851203,
    title: 'This is an issue of type: Task.',
    type: 'task',
    status: 'backlog',
    priority: '4',
    listPosition: 1,
    createdAt: '2022-12-30T11:16:46.917Z',
    updatedAt: '2022-12-30T11:16:46.917Z',
    userIds: [314625],
  },
  {
    id: 851204,
    title: 'Each issue has a single reporter but can have multiple assignees.',
    type: 'story',
    status: 'selected',
    priority: '4',
    listPosition: 6,
    createdAt: '2022-12-30T11:16:46.937Z',
    updatedAt: '2022-12-30T11:16:46.937Z',
    userIds: [314623, 314624],
  },
  {
    id: 851205,
    title:
      'You can track how many hours were spent working on an issue, and how many hours remain.',
    type: 'task',
    status: 'inprogress',
    priority: '1',
    listPosition: 7,
    createdAt: '2022-12-30T11:16:46.937Z',
    updatedAt: '2022-12-30T11:16:46.937Z',
    userIds: [],
  },
  {
    id: 851207,
    title: 'Try leaving a comment on this issue.',
    type: 'task',
    status: 'done',
    priority: '3',
    listPosition: 7,
    createdAt: '2022-12-30T11:16:46.942Z',
    updatedAt: '2022-12-30T11:16:46.942Z',
    userIds: [314624],
  },
  {
    id: 851208,
    title: 'You can use rich text with images in issue descriptions.',
    type: 'story',
    status: 'backlog',
    priority: '1',
    listPosition: 4,
    createdAt: '2022-12-30T11:16:46.947Z',
    updatedAt: '2022-12-30T11:16:46.947Z',
    userIds: [314623],
  },
  {
    id: 851206,
    title: 'Each issue can be assigned priority from lowest to highest.',
    type: 'task',
    status: 'inprogress',
    priority: '5',
    listPosition: 8,
    createdAt: '2022-12-30T11:16:46.943Z',
    updatedAt: '2022-12-30T18:18:55.433Z',
    userIds: [],
  },
];

export const users:User[] = [
  {
    id: 314625,
    name: 'Jodi Rick',
    email: 'jodi@jira.com',
    avatarUrl: 'https://joesch.moe/api/v1/jodi',
    createdAt: '2022-12-30T11:16:46.904Z',
    updatedAt: '2022-12-30T11:16:46.908Z',
    projectId: 104627,
  },
  {
    id: 314624,
    name: 'James Yoda',
    email: 'james@jira.com',
    avatarUrl: 'https://joesch.moe/api/v1/james',
    createdAt: '2022-12-30T11:16:46.901Z',
    updatedAt: '2022-12-30T11:16:46.908Z',
    projectId: 104627,
  },
  {
    id: 314623,
    name: 'Joe Gaben',
    email: 'joe@jira.com',
    avatarUrl: 'https://joesch.moe/api/v1/joe',
    createdAt: '2022-12-30T11:16:46.899Z',
    updatedAt: '2022-12-30T11:16:46.908Z',
    projectId: 104627,
  },
];

export const project:Project = {
  id: 104627,
  name: 'Snapp Carfix Interview Task',
  url: 'https://github.com/khakiiman/todo-jira-app',
  description:
    'This task is done by Iman K. Arvand to show skills in frontend dev stuff. Building a TodoList application using React with TypeScript and styling it with Tailwind CSS. The application should allow users to add, edit, and delete tasks, mark tasks as completed, and filter tasks based on their completion status. For more information about me, please visit https://imankhaki.netlify.app',
  category: 'Software',
  createdAt: '2022-12-30T11:16:46.908Z',
  updatedAt: '2022-12-30T11:16:46.908Z',
};