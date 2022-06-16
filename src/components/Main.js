import React, {useEffect, useState} from 'react';
import api from '../utils/Api';
import Card from './Card'
import addProfile from '../images/profile-add-image.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = (props) => {
const [cards, setCards] = useState([]);
// Подписка на контекст
const currentUser = React.useContext(CurrentUserContext);

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
  setUserAvatar(currentUser.avatar);
}, [currentUser]); 

        api.getInitialCards().then((cardsArray) => {
            setCards(cardsArray);
        }).catch((err) => {
            console.log(`Error: ${err}`);
        });


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__block">
                    <div className="profile__block-img" onClick={props.handleEditAvatarClick}>
                        {currentUser.avatar && <img className="profile__avatar"
                        src={currentUser.avatar}
                        alt="аватарка"/>
                             }
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title"> {currentUser.name} </h1>
                    <button onClick={props.handleEditProfileClick}
                            className="profile__edit-button profile__open-button"
                            aria-label="Edit" type="button"></button>
                    <p className="profile__subtitle">{currentUser.about}</p>
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
                        <Card key={card._id} card={card} onCardClick={(card) => props.handleCardClick(card)}
                        />
                ))}
            </section>
        </main>
    );
                }
export default Main;