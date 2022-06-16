import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
const currentUser = React.useContext(CurrentUserContext);

const Card = ({onCardLike, onCardClick}) => {
 // Определяем, являемся ли мы владельцем текущей карточки
const isOwn = Сard.owner._id === currentUser._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
 // `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
 `element__button ${isOwn ? 'element__button_action_del' : 'element__button_action_hidden'}`
);
// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = Сard.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = `element__button_clicked`;
    return (
        <div className="element">
            <img className="element__image" src={props.card.link} alt="" onClick={() => props.onCardClick(props.card)}/>
            <div className="element__text">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-group">
                    <button className="cardLikeButtonClassName"
                            aria-label="Мне нравится"
                            type="button"></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
               { isOwn && 
               <button type="button" className='element__button' onClick={handleDeleteClick}>
                </button>
                }

                <button type="button" className="cardDeleteButtonClassName"
                        title="Удалить"/>
            </div>
        </div>
    )
}

export default Card