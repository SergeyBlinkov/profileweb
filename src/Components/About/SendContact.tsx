import {Button, Form} from "react-bootstrap";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import React from 'react'
import * as emailjs from "@emailjs/browser";
import {toast} from "react-toastify";
import './AboutCSSTransition.css'


emailjs.init("lZl2ewzDxLUo_NQXD");
interface Props {
    cb?:Dispatch<SetStateAction<boolean>>
}
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export function SendMail ({cb}:Props) {
        const [values , setValues] = useState({
            name: '',
            email: '',
            message: '',
            errs: false
        })
    const id = useRef(null)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        const {name,email,message} = values
        if(name.length > 0 && email.length > 0 && message.length > 0){
        emailjs.sendForm('service_a4grj0a','template_mvfj6vg',id.current!,'lZl2ewzDxLUo_NQXD')
            .then(() => {
                toast.success('Вы успешном отправили мне сообщение, спасибо, возможно мне было одиноко)')
                setValues({...values,errs:false})
            })
            .catch((e) => toast.error(`Ваше сообщение не дошло до меня из за ошибки ${e.message}`))
            return cb?.(false)
        } else {
            toast.error('Введите данные во все поля')}
        return setValues({...values,errs:true})
    }
    const handleChange = (e:InputEvent) => {
            const {name,value} = e.target
        return setValues((prev) => {
            return {...prev,
            [name] : value
            }
        })
    }
    return <Form className={'mailForm'} onSubmit={handleSubmit} id={'idForm'} ref={id} >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ваш Email</Form.Label>
            <Form.Control isInvalid={values.errs} type="email" name={'email'} id={'email'} placeholder="name@example.com" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Как к вам обращаться</Form.Label>
            <Form.Control isInvalid={values.errs} type="text" name={'name'} id={'name'} placeholder="Екатерина" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Что вы хотите мне написать?</Form.Label>
            <Form.Control isInvalid={values.errs} as="textarea" name={'message'} id={'message'} rows={3} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
            <Button variant="primary" type="submit">
                Отправить
            </Button>
            <Button variant="primary" onClick={()=>cb?.(false)}>
                Закрыть
            </Button>
        </Form.Group>

    </Form>
}