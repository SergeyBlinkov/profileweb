import React, {useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/ReduxHook";
import {galleryRequest} from "../../redux/GalleryPictureSlice";
import {DATATYPE} from "../../redux/SagaRequestGallery";
import './Gallery.css'
import './GalleryCSSTransition.css'
import {Button} from "react-bootstrap";
import GalleryModal from "./GalleryModal";
import {CSSTransition} from "react-transition-group";

export interface APICALL {
    isLoading:boolean;
    data:DATATYPE[];
    errs:object;
}

export interface MODAL_STATE {
    isShow:boolean;
    data: DATATYPE;
}

const Gallery = () => {
    const [pageList , setPageList] = useState('mountain')
    const [modalState,setModalState] = useState({
        isShow:false,
        data: {name: '',
        photoUrl: [''],
        description: '',
       }
    })

    const nodeRef =useRef(null)
    let page = 1
    let limit  = 6
    const dispatch = useAppDispatch()
    const apiCall:APICALL = useAppSelector(state=>state.apiCall)
    console.log(apiCall)
    const buttonCategory = [{
        forSearch: 'mountain',
        label:'Горы'
    },{
        forSearch: 'automobile',
        label:'Автомобили'
    },{
        forSearch: 'house',
        label:'Дома'
    },{
        forSearch: 'natureReserves',
        label:'Заповедники'
    }]

    useEffect(()=> {
        dispatch(galleryRequest({pageList,page,limit}))
    },[pageList,page,limit,dispatch])
    return (
        <div>
            <GalleryModal ModalData={modalState} cb={setModalState}/>
        <div className={'gallery'}>
            {apiCall.isLoading && <p className={'loader'}>...Loading</p>}
            <CSSTransition
                classNames={'gallery_block__transition'}
                nodeRef={nodeRef}
                in={!apiCall.isLoading}
                timeout={1000}
            >
                <div className={'gallery_block'} ref={nodeRef}>{apiCall.data.map((newData) => {
                    return <div className={'gallery_block__items'} key={newData.name}><img  src={newData.photoUrl[0]} alt={newData.photoUrl[0]} />
                        <div className={'gallery_block__more'}><Button variant={'outline-dark'} onClick={()=>setModalState((prev) => {
                            return {...prev,
                                isShow:true,
                                data:newData}
                        })}>Подробнее</Button></div></div>})}
                </div>
            </CSSTransition>
            <div className={'gallery_button'}>{buttonCategory.map((data)=>
                <button className={'material-bubble'} onClick={()=> setPageList(data.forSearch)} key={data.label}>{data.label}</button>)}</div>
        </div>
        </div>
    );
};

export default Gallery;