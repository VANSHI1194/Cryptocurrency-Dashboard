import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const StatusCode = {
   LOADING: 'loading',
   IDLE: 'idle',
   ERROR: 'error'
}

const initialState = {
   coinHistory: [],
   status: StatusCode.IDLE,
};

const coinHistorySlice = createSlice({
   name: "Crypto History",
   initialState,
   extraReducers: (builder) => {
      builder.addCase(getCryptoHistory.pending, (state) => {
         state.status = StatusCode.LOADING;
      });

      builder.addCase(getCryptoHistory.fulfilled, (state, action) => {
         state.coinHistory = action.payload;
         state.status = StatusCode.IDLE;
      });

      builder.addCase(getCryptoHistory.rejected, (state) => {
         state.status = StatusCode.ERROR;
      });
   },
});

export const { fetchCryptos } = coinHistorySlice.actions;
export default coinHistorySlice.reducer;

export const getCryptoHistory = createAsyncThunk(
   'cryptoHistory/get',
   async ({ selectedCoins, globalCurrency, days }) => {
      const apiData = await Promise.all(
         selectedCoins.map(async (coin) => {
            const url = `https://api.coingecko.com/api/v3/coins/${coin.value}/market_chart?vs_currency=${globalCurrency}&days=${days}&interval=daily`;
            try {
               const res = await axios(url);
               return res.data.prices;
            } catch (error) {
               return null;
            }
         })
      );
      const data = apiData;
      return data;
   }
);