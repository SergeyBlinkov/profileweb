 import {put,takeLatest,delay} from 'redux-saga/effects'
 import {galleryFailure, gallerySuccess} from "./GalleryPictureSlice";

 import axios from "axios";

interface Response {
    config:object;
    data:Array<DATATYPE>
    headers:object;
    request:object;
    status:number;
    statusText:string
}

export interface DATATYPE{
        name:string;
        description:string;
        photoUrl:string[]

}
export interface AP {
    pageList:string;
    page:number;
    limit:number;
}
 export async function GalleryApiCall (pageList:string,page:number,limit:number)  {
     const baseUrl = `http://localhost:8000/gallery`
     const response =await axios({
         method: 'GET',
         url: baseUrl,
         params : {q: pageList,page,limit}
     })
     return response
 }
 function* SagaRequestWorker (props:{type:string;payload:AP}) {
    const {pageList,page,limit} = props.payload

    try {
        const response:Response = yield GalleryApiCall(pageList,page,limit)
        yield delay(900)
        yield put(gallerySuccess(response))
    } catch (e) {
        yield put(galleryFailure(e))
    }
 }

export default function* SagaRequestWatcher() {
   yield takeLatest('gallery/galleryRequest',SagaRequestWorker)
 }