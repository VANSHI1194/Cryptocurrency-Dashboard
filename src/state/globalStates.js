// Import createSlice from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the global slice
const initialState = {
   globalCurrency: 'usd', // Default global currency
   selectedCoins: [
      { label: 'Bitcoin', value: 'bitcoin' } // Default selected coin
   ],
   coinsList: [] // List of available coins
};

// Create a slice of the global state
const globalSlice = createSlice({
   name: 'global states', // Name of the slice
   initialState, // Initial state
   reducers: {
      // Action to set the global currency
      setGlobalCurrency: (state, action) => {
         state.globalCurrency = action.payload;
      },
      // Action to set the list of available coins
      setCoinsList: (state, action) => {
         state.coinsList = action.payload;
      },
      // Action to set the list of selected coins
      setSelectedCoins: (state, action) => {
         state.selectedCoins = action.payload;
      },
   }
})

// Export action creators and reducer
export const { setGlobalCurrency, setCoinsList, setSelectedCoins } = globalSlice.actions;
export default globalSlice.reducer;
