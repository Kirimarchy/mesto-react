import React from 'react';

const PopupWithForm = (props) => {

    return (
        <div className={`popup popup_type_${props.name}` + (props.isOpen && 'popup_opened')}>
            <div className="popup__container">
                <button
                    className="popup__close-btn"
                    type="button" onClick={props.onClose}
                >
                </button>
                <form className={`popup__form popup__form_${props.name}`} name={`form_${props.name}`} onSubmit={(e) => props.handleSubmit(e)} >
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__button popup__button_submit popup__button_disabled" type="submit"
                            value="submit">
                        { buttonTitle } 
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm
