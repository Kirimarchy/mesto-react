import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

const App = () => {
    const emptyCard = {
        name: '',
        link: ''
    }
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(emptyCard);

    function onAddPlace() {
        setIsAddPlacePopupOpen(true);
    }

    function onEditProfile() {
        setIsEditProfilePopupOpen(true);
    }

    function onEditAvatar() {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(emptyCard);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    return (

            <div className="App">
                <Header/>
                <Main
                    handleAddPlaceClick={onAddPlace} //передаем функцию, а вызваем по необходимости внутри компонента. 
                    handleEditAvatarClick={onEditAvatar}
                    handleEditProfileClick={onEditProfile}
                    handleCardClick={(card) => handleCardClick(card)}
                />
                <Footer/>

                <PopupWithForm
                    name="avatar" title="Обновить аватар"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                >
                    <label className="popup__field">
                        <input type="url" className="popup__input popup__input_avatar" id="avatar" name="avatar"
                               required
                               defaultValue="" placeholder="Ссылка на картинку"/>
                        <span className="popup__error" id="avatarError"></span>
                    </label>
                </PopupWithForm>

                <PopupWithForm
                    name="mesto" title="Новое место"
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                >
                    <label>
                        <input type="text" name="name"
                               className="popup__input popup__input_image_name"
                               id="imageInput" defaultValue="" placeholder="Название"
                               minLength="2" maxLength="30" required
                        />
                        <span className="popup__error" id="imageInputError"></span>
                    </label>
                    <label>
                        <input type="url" name="link"
                               className="popup__input popup__input_image_src"
                               id="srcInput" defaultValue=""
                               placeholder="Ссылка на картинку" required
                        />
                        <span className="popup__error" id="srcInputError"></span>
                    </label>
                </PopupWithForm>

                <PopupWithForm
                    name="profile" title="Редактировать профиль"
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                >
                    <label>
                        <input
                            type="text"
                            name="userName"
                            className="popup__input popup__input_type_name" id="nameInput"
                            required
                            placeholder="Ваше имя" minLength="2" maxLength="40"
                        />
                        <span className='popup__error' id="nameInputError"></span>
                    </label>
                    <label>
                        <input
                            type="text"
                            name="userJob"
                            className="popup__input popup__input_type_work" id="aboutInput"
                            required defaultValue=""
                            placeholder="Ваша профессия" minLength="2" maxLength="200"
                        />
                        <span className='popup__error' id="aboutInputError"></span>
                    </label>
                </PopupWithForm>

                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />

                <div className="popup popup_confirm">
                    <div className="popup__container popup__container_confirm">
                        <button className="popup__close-btn popup__close-btn_confirm" type="button"></button>
                        <form className="popup__form popup__form_confirm" name="confirmForm"></form>
                        <h2 className="popup__title">Вы уверены?</h2>
                        <button className="popup__button popup__button_submit" type="submit" name="confirm">
                            Да
                        </button>
                    </div>
                </div>
            </div>

    );
}

export default App;
