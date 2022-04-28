import React, {useRef, useState} from 'react';
import './About.css'
import {SendMail} from "./SendContact";
import {CSSTransition} from "react-transition-group";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import AboutFeatures from "./AboutFeatures";
import myPict from '../../pictures/mypic.jpg'


const About = () => {
    const [sendEmail,setSendEmail] = useState(false)
    const nodeRef = useRef(null)
    return (
        <div className={'about'}>
            <CSSTransition
                in={sendEmail}
                timeout={800}
                nodeRef={nodeRef}
                classNames={'sendEmail'}
                unmountOnExit
            >
                <div ref={nodeRef} className={'darkBackground'}><SendMail cb={setSendEmail} />
                </div>
            </CSSTransition>
        <div className={'about_profile'}>
            <img src={myPict} width={'200px'} height={'200px'} alt={'mypic'}/>
            <div className={'about-profile_info'}>
                <ul>
                    <li>Имя:</li>
                    <li>Фамилия:</li>
                    <li>Возраст:</li>
                    <li>Почта:</li>
                    <li>Номер телефона:</li>
                    <li>Город:</li>
                </ul>
                <ul>
                    <li>Сергей</li>
                    <li>Блинков</li>
                    <li>26</li>
                    <li>blinok1896@gmail.com</li>
                    <li>+7 (967)-72-22-800</li>
                    <li>Самара</li>
                </ul>
                <ul>
                    <li >Не готов к переезду</li>
                    <li >Предпочитаю удаленную работу</li>
                    <li >Предпочитаемый вид связи - <span style={{backgroundColor:'lightyellow',fontWeight:'700'}}>Telegram</span></li>
                    <li>Все способы со мной связаться:</li>
                    <div className={'contact-buttonBlock'}>
                        <div className={'contact-buttonBlock_item'}>
                            <OverlayTrigger
                                trigger={'hover'}
                                defaultShow={false}
                                delay={100}
                                flip
                                key={'top'}
                                placement={'top'}
                                overlay={
                                    <Tooltip>
                                        Отправить сообщение на почту
                                    </Tooltip>
                                }
                            ><i className="fa-solid fa-at fa-xl" onClick={()=>setSendEmail(!sendEmail)} style={{cursor:'pointer'}}></i></OverlayTrigger><p>blinok1896@gmail.com</p>
                        </div>
                        <div className={'contact-buttonBlock_item'}>
                            <i className="fa-brands fa-telegram fa-xl"></i>
                            <p>+79677222800</p>
                        </div>
                            <div className={'contact-buttonBlock_item'}>
                                <i className="fa-brands fa-skype fa-xl"></i>
                                <p>live:.cid.2950eb6bf6537964</p>
                            </div>
                    </div>
                </ul>

            </div>
        </div>
            <div className={'dark-line'}></div>
            <AboutFeatures/>
            <div className={'footer'}></div>
        </div>
    );
};

export default About;