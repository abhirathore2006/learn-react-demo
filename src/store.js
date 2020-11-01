import { configureStore } from '@reduxjs/toolkit'
import { BackgroundSwitcherReducer } from './components/BackgroundSwitchContainer'

const store = configureStore({
  reducer:  {
    bg: BackgroundSwitcherReducer
  }
})

export default store