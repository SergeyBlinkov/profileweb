import {createSlice} from "@reduxjs/toolkit";
import {APICALL} from "../Components/Gallery/Gallery";

const initialState:APICALL = {
    data : [],
    isLoading: false,
    errs: {}
}
export const GalleryPictureSlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        galleryRequest: (state, action) => {
            return {
                ...state,
                isLoading: true
            }
        },
        gallerySuccess: (state, action) => {
            const newAction = action.payload.data
            console.log(newAction)
            return {
                ...state,
                isLoading: false,
                data: newAction
            }
        },
        galleryFailure: (state, action) => {
            return {
                ...state,
                data: [],
                isLoading: false,
                errs: action.payload
            }
        }
    }
})
export const {galleryRequest,gallerySuccess,galleryFailure} = GalleryPictureSlice.actions

export default GalleryPictureSlice.reducer