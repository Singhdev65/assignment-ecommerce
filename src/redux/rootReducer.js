import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist//lib/storage"
import productsReducer from "./product/product.reducer"
import cartReducer from "./cart/cart.reducer"

export const rootReducer = combineReducers({
  productsData: productsReducer,
  cartData: cartReducer
})

const configStorage = {
  key: "root",
  storage,
  whitelist: ["cartData"]
}

export default persistReducer(configStorage, rootReducer)
