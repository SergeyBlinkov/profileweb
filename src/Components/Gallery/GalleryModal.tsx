import React, {Dispatch, SetStateAction, useRef} from 'react';
import {Carousel} from "react-bootstrap";
import {DATATYPE} from "../../redux/SagaRequestGallery";
import './Gallery.css'
import {MODAL_STATE} from "./Gallery";
import {CSSTransition} from "react-transition-group";

interface Props {
    ModalData : {
        isShow:boolean;
        data:DATATYPE
    },
    cb?:Dispatch<SetStateAction<MODAL_STATE>>
}

function GalleryModal ({ModalData,cb}:Props) {
    const handleChange = ():void => {
        return cb?.((prev)=> {
            return {...prev,
            isShow: !prev.isShow}
        })
    }
    const nodeRef = useRef(null)
    return <CSSTransition
        in={ModalData.isShow}
        nodeRef={nodeRef}
        timeout={1000}
        classNames={'ModalWindowCSSTransition'}
        unmountOnExit
        mountOnEnter
    >
        <div className={'darkBackground'} ref={nodeRef}><div className={'galleryModal_isShow'}><i onClick={handleChange} className="fa-solid fa-xmark fa-2xl x-mark"></i>
        <Carousel fade className={'galleryModal_Carousel'}>
            {ModalData.data.photoUrl.map((data) => {
                return <Carousel.Item key={data}>
                    <img
                        src={data}
                        alt={data}
                    />
                    <Carousel.Caption>
                        <h3 style={{backgroundColor:'rgba(125,125,125,0.2)',width:'fit-content',margin:'auto',borderRadius:'5px'}}>{ModalData.data.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                })}
        </Carousel>
            <p style={{margin:'2px 5px'}}>{ModalData.data.description}</p>
        </div>
    </div>
    </CSSTransition>

};

export default GalleryModal;