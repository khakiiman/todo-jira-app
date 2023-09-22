import { configureStore } from "@reduxjs/toolkit"
import {kanbanSlice, KanbanState} from "./kanbanSlice"


const store = configureStore({
        reducer: {
            kanban: kanbanSlice.reducer
        }
    })

export default store

export interface RootState {
    kanban: KanbanState,
}