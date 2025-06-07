import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API'den veri çekmek için async thunk oluştur
export const fetchPlants = createAsyncThunk(
  'data/fetchPlants',
  async () => {
    try {
      const response = await axios.get('https://perenual.com/api/v2/species-list', {
        params: {
          key:'enter your key',
          page: 1,
          per_page: 30,
          details: true,  // Detaylı bilgi için
          image: true     // Resimler için
        }
      });
      console.log("API'den gelen ilk bitki verisi:", response.data.data[0]);
      return response.data.data;
    } catch (error) {
      console.error("API Hatası:", error);
      throw error;
    }
  }
);


const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    basketItems: [],
    quantity: 0,
  },
  reducers: {
    addtoBasket: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.basketItems.find(item => item.id === newItem.id);

      if (existingItem) {
        // Eğer ürün zaten sepette varsa, miktarını 1 artır
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        // Eğer ürün sepette yoksa, yeni ürün olarak ekle (quantity: 1)
        state.basketItems.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromBasket: (state, action) => {
      state.basketItems = state.basketItems.filter(
        item => item.id !== action.payload.id
      );
    },
    addToQuantity: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.basketItems.find(i => i.id === item.id);

      if (existingItem) {
        // Miktarı güncelle
        existingItem.quantity = Math.max(1, (existingItem.quantity || 1) + quantity);
      }
    },
    reduceTheQuantity: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.basketItems.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity = Math.max(1, (existingItem.quantity || 1) - quantity);

        // Eğer miktar 1'in altına düşerse ürünü sepetten çıkar
        if (existingItem.quantity < 1) {
          state.basketItems = state.basketItems.filter(i => i.id !== item.id);
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addtoBasket, removeFromBasket, addToQuantity, reduceTheQuantity } = dataSlice.actions;
export default dataSlice.reducer;