import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import GalleryPictureReducer from "./GalleryPictureSlice";
import RootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
    apiCall : GalleryPictureReducer
    },
    middleware: [sagaMiddleware],

});
sagaMiddleware.run(RootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;