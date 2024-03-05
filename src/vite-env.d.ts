/// <reference types="vite/client" />
declare module 'redux-persist/integration/react' {
  export const PersistGate: any
}

declare module 'redux-persist' {
  export const persistReducer: any
}
declare module 'redux-persist' {
  export const persistStore: any
}
declare module 'redux-persist/lib/storage' {
  export const storage: any
}
