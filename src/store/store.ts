import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { kanbanSlice, KanbanState } from './kanbanSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    kanban: kanbanSlice.reducer, 
  });

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['kanban'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

export const persistor = persistStore(store);

export interface RootState {
  kanban: KanbanState;
}
