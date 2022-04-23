import React from 'react';
import SuppChatMain from '../../pictures/support-chat-main.png';
import crudAppMain from '../../pictures/crudapp-main.png'

const AboutFeatures = () => {
    return (
        <div className={'About-Features'}>
            <h2>Весь мой стек технологий который я использовал в своих проектах</h2>
            <ul className={'About-Features_stack'}>
                <li>JavaScript (ES6+)</li>
                <li>ReactJS / React Hook </li>
                <li>Redux / Redux-toolkit</li>
                <li>Typescript</li>
                <li>Redux-Saga</li>
                <li>EmailJs</li>
                <li>React-router</li>
                <li>FontAwesome</li>
                <li>Bootstrap / Material-ui</li>
                <li>SCSS / styled-components /SASS</li>
                <li>Firebase / Firebase Realtime Database</li>
                <li>Express / NodeJs / Cors</li>
                <li>Toastify-js</li>
                <li>Git / GitHub / GitLab</li>
                <li>В рамках курса работал с Jira</li>
                <li>PostgreSQL</li>
                <li>Rest Api</li>
                <li>CSSTransition</li>
                <li>Infinite Scroll</li>
            </ul>
            <div className={'About-Features_text'}>Доброе время суток, меня зовут Сергей. В течении последних 2 лет я активно изучаю фронтенд разработку,
            за это время я поработал со всеми технологиями которые описаны выше, и на практике их применял в своих проектах.
            Мне очень нравится данная работа, тем что тут приходится постоянно решать своего рода головоломки, и решив их
            наслаждатся результатом.Я по своей натуре люблю когда все упорядоченно и делаю так, как я считаю было бы верно и правильно
                в случае масшатибрования приложения, во всяком случае я максимально к этому стремлюсь и двигаюсь в этом направлении.
                Профильного образования в этой области у меня нет, но могу сказать что я, потратив столько времени на самообучение,
                все ещё не потерял интерес к этой професии и готов разбираться, учится каждый день.
            </div>
                <h2>Ниже мои проекты которые я делал</h2>
                <div className={'About-Features_project'}>
                    <h3>Проект <span style={{fontWeight:700}}>support-chat</span>: Реализована сторона оператора</h3>
                    <div className={'About-Features_project__items'}>
                        <img src={SuppChatMain} alt={'suppChat'} id={'main-project-pic'}/>
                        <ul><li>Данный проект реализует обращение пользователя с некой проблемой к оператору.
                            В данный момент мы видим интерфейс со стороны оператора.</li>
                            <li>Над чатом есть три вкладки для актуальных, сохраненных и завершенных заданий. На активной
                            отображается количество чатов, которые никто не взял в работу.</li>
                            <li>Строка поиска по имени клиента и сообщений в чате.</li>
                            <li>Профиль пользователя с возможностью изменять свои данные.</li>
                            <li>Рабочие смайлы которые можно отправлять в чат.</li>
                            <li>Кнопка COMPLETE делает чат завершенным, SAVE отправляет в сохраненные чаты и так же завершает его.</li>
                        </ul>
                    </div>
                    <h4>Стек в проекте:</h4>
                    <ul className={'About-Features_stack'}>
                        <li>Firebase</li>
                        <li>Realtime database</li>
                        <li>Firebase auth</li>
                        <li>ReactJS / React Hook Form</li>
                        <li>Redux / Redux-saga</li>
                        <li>React-router</li>
                        <li>SCSS / Material-ui</li>
                        <li>Этапность проекта была через Jira</li>
                        <li><a href={' https://gitlab.com/blinok1896/supportchat'}>Сам код</a> </li>
                        <li><a href={' https://chat-8fd2ly23c-blinok1896.vercel.app/'}>Deploy на сайт</a></li>
                        <li>Адаптивен под мобильные устройства</li>
                        <li>Infinite Scroll</li>
                    </ul>
                    <h4>Проект ещё дорабатывается, будущие изменения - Профиль пользователя</h4>
                </div>
                <div className={'About-Features_project'}>
                    <h3 style={{marginTop:35}}>Проект <span>Приложение CRUD</span></h3>
                    <div className={'About-Features_project__items'}>
                        <div style={{gridRow:'1/3'}}>
                            <img src={crudAppMain} alt={'crudAppMain'} id={'main-project-pic'}/>
                        </div>
                        <ul>
                            <li>CRUD приложение, позволяет добавлять, удалять,изменять список контактов.</li>
                            <li>Изменять можно как целый контакт так и отдельные его поля.</li>
                            <li>Работает через Rest Api</li>
                        </ul>
                        <ul className={'About-Features_stack'}>
                            <li>Rest Api</li>
                            <li>ReactJS / React Hook Form</li>
                            <li>Redux</li>
                            <li>SCSS / Material-ui</li>
                            <li><a href={'https://github.com/SergeyBlinkov/crud-app'}>Сам код</a></li>
                            <li><a href={'https://crud-cs1sweexd-blinok1896.vercel.app/'}>Deploy на сайт</a></li>
                            <li>Адаптивен под мобильные устройства</li>

                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default AboutFeatures;