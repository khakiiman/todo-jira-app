import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { issueData, project, Issue, Project } from '../data/issueData';

export interface KanbanState {
  searchTerm: string;
  data: Issue[];
  projectData: Project;
}

const initialState: KanbanState = {
  searchTerm: '',
  data: issueData,
  projectData: project,
};

export const kanbanSlice = createSlice({
  name: 'kanbanSlice',
  initialState: initialState,
  reducers: {
    updateProjectData: (state, action: PayloadAction<typeof project>) => {
      state.projectData = action.payload;
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    sortDragData: (state, action: PayloadAction<{ id: number; status: string }>) => {
      state.data.map((data) => {
        if (data.id === action.payload.id) {
          data.status = action.payload.status;
        }
        return data;
      });
    },
    updateIssueData: (state, action: PayloadAction<{ id: number; type: string;}>) => {
      state.data.map((data) => {
        if (data.id === action.payload.id) {
          data.type = action.payload.type;
          // data.recentlyUpdated = true;
        }
        return data;
      });
    },

    addNewIssue: (state, action: PayloadAction<Issue>) => {
      state.data.push(action.payload);
    },
  },
});

export const {
  updateProjectData,
  changeSearchTerm,
  sortDragData,
  updateIssueData,
  addNewIssue,
} = kanbanSlice.actions;
export default kanbanSlice;
