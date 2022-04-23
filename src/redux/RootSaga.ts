import {all} from 'redux-saga/effects'
import SagaRequestWatcher from "./SagaRequestGallery";
export default function* RootSaga () {
    yield all([
        SagaRequestWatcher()
    ])
}