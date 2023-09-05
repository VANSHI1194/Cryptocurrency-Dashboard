import { configureStore } from '@reduxjs/toolkit'
import globalSlice from './globalStates'
import { apis } from './rtkApis';
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import historySlice from './historySlice';

// Configure the Redux store
const store = configureStore({
   reducer: {
      globalState: globalSlice, // Add the globalSlice reducer to the store
      [apis.reducerPath]: apis.reducer, // Add the API reducer to the store
      history: historySlice // Add the historySlice reducer to the store
   },

   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apis.middleware), // Add middleware for handling API requests

   // Other store configuration options can be added here
})

// Set up listeners for the API
setupListeners(store.dispatch);

// Export the configured Redux store
export default store;
