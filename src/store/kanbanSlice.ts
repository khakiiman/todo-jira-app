import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  issueData,
  userData,
  projectData,
  Issue,
  User,
  Project,
} from '../data/issueData';

export interface KanbanState {
  searchTerm: string;
  issue: Issue[];
  user: User[];
  project: Project;
}

const initialState: KanbanState = {
  searchTerm: '',
  issue: issueData,
  user: userData,
  project: projectData,
};

export const kanbanSlice = createSlice({
  name: 'kanbanSlice',
  initialState: initialState,
  reducers: {
    updateProjectData: (state, action: PayloadAction<Project>) => {
      state.project = action.payload;
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    sortDragData: (
      state,
      action: PayloadAction<{ id: number; status: string }>
    ) => {
      state.issue.map((data) => {
        if (data.id === action.payload.id) {
          data.status = action.payload.status;
        }
        return data;
      });
    },
    updateIssueData: (
      state,
      action: PayloadAction<Issue>
    ) => {
      state.issue.map((data) => {
        if (data.id === action.payload.id) {
          data.title = action.payload.title;
          data.type = action.payload.type;
          data.status = action.payload.status;
          data.description = action.payload.description;
          data.reporter = action.payload.reporter;
          data.assignee = action.payload.assignee;
          data.priority = action.payload.priority;
          data.userIds = action.payload.userIds;
        }
        return data;
      });
    },

    addNewIssue: (state, action: PayloadAction<Issue>) => {
      state.issue.push(action.payload);
    },

    addNewUser: (state, action: PayloadAction<User>) => {
      state.user.push(action.payload);
    },

    deleteIssue: (state, action: PayloadAction<number>) => {
      const indexToDelete = state.issue.findIndex(issue => issue.id === action.payload);
      if (indexToDelete !== -1) {
        state.issue.splice(indexToDelete, 1);
      }
    },
  },
});

export const {
  updateProjectData,
  changeSearchTerm,
  sortDragData,
  updateIssueData,
  addNewIssue,
  addNewUser,
  deleteIssue,
} = kanbanSlice.actions;

export default kanbanSlice;
