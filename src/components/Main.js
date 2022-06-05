import React, {useEffect, useState} from 'react';
import api from '../utils/Api';
import Card from './Card'
import addProfile from '../images/profile-add-image.svg';

const Main = (props) => {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo().then((userInfo) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);
        }).catch((err) => {
            console.log(`Error: ${err}`);
        });

        api.getInitialCards().then((cardsArray) => {
            setCards(cardsArray);
        }).catch((err) => {
            console.log(`Error: ${err}`);
        });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__block">
                    <div className="profile__block-img" onClick={props.handleEditAvatarClick}>
                        <img className="profile__avatar"
                             src={userAvatar}
                             alt="аватарка"
                        />
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title"> {userName} </h1>
                    <button onClick={props.handleEditProfileClick}
                            className="profile__edit-button profile__open-button"
                            aria-label="Edit" type="button"></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>

                <button onClick={props.handleAddPlaceClick}
                        className="profile__add-button profile__open-button"
                        type="button">
                    <img className="profile__add-image" src={addProfile}
                         alt="Кнопка добавления новых записей"
                    />
                </button>
            </section>
            <section className="elements">
                {cards.map((card, i) => (
                    // Без указания атрибута `key`, React выдаст предупреждение об его отсутствии
                    <React.Fragment key={i}>
                        <Card card={card} onCardClick={(card) => props.handleCardClick(card)}></Card>
                    </React.Fragment>
                ))}
            </section>
        </main>
    );
}

export default Main;