import React from 'react';

const Card = (props) => {
    return (
        <div className="element">
            <img className="element__image" src={props.card.link} alt="" onClick={() => props.onCardClick(props.card)}/>
            <div className="element__text">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-group">
                    <button className="element__button element__button_clicked"
                            aria-label="Мне нравится"
                            type="button"></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
                <button type="button" className="element__button element__button_action_del"
                        title="Удалить"/>
            </div>
        </div>
    )
}

export default Card