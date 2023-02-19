import {
    configureStore,
    getDefaultMiddleware,
    combineReducers,
    EnhancedStore,
} from '@reduxjs/toolkit'
import { loadingSlice } from './loading'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { userSlice } from './user'

// https://github.com/vercel/next.js/discussions/15687#discussioncomment-45319
const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null)
        },
        setItem(_key, value) {
            return Promise.resolve(value)
        },
        removeItem(_key) {
            return Promise.resolve()
        },
    }
}
const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local')
        : createNoopStorage()

const rootReducer = combineReducers({
    user: userSlice.reducer,
})


const persistConfig = {
    key: 'redux-toolkit-example',
    version: 1,
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const useStore = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof useStore.dispatch