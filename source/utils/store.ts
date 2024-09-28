import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',               
    storage,                    
    whitelist: ['cart']    
  };
 
  const persistedCartReducer = persistReducer(persistConfig, cartReducer);
  
  const store = configureStore({
    reducer: {
      cart: persistedCartReducer,  
    },
  })

  export const persistor = persistStore(store);
  
  export default store;
  