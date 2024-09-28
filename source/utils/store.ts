import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import userReducer from './userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',               
    storage,                    
    whitelist: ['user']    
  }
  
 
  const persistedUserReducer = persistReducer(persistConfig, userReducer)
  
  const store = configureStore({
    reducer: {
      cart: cartReducer ,
      user: persistedUserReducer  
    },
  })

  export const persistor = persistStore(store)
  
  export default store
  