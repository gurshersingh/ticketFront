import { configureStore } from '@reduxjs/toolkit'
import ticketSliceReducer from './pages/ticket-listing/ticketSlice'
import loginSliceReducer from './components/login/loginSlice'
import  userReducer  from "./pages/dashboard/userSlice";
const store = configureStore({ reducer: {
    tickets:ticketSliceReducer,
    login:loginSliceReducer,
    user:userReducer
} })

export default store;