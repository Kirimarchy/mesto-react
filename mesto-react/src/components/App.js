import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
    <div className="App">
   <Header/>
   <Main/>
   <Footer/>
  
   <div className="popup popup_profile">
      <div className="popup__container">
        
        <form name="subscribeFormclassName" className="popup__form popup__form_profile" noValidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <button className="popup__close-btn popup__close-btn_profile" type="button"></button>
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
            required value=""
            placeholder="Ваша профессия" minLength="2" maxLength="200"
          />
          <span className='popup__error' id="aboutInputError"></span>
        </label>
          <button className="popup__button popup__button_submit popup__button_disabled" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>

    <div className ="popup popup_image">
      <figure className="figure">
        <button className="popup__close-btn popup__close-btn_image" type="button"></button>
        <img src="#" alt="#" className="figure__image" />
        <figcaption className="figure__caption"></figcaption>
      </figure>
    </div>

      <div className ="popup popup_avatar">
        <div className ="popup__container popup__container_avatar">
          <button className="popup__close-btn popup__close-btn_avatar" type="button"></button> 
          <form className="popup__form popup__form_avatar" name="form" noValidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <label className="popup__field">
              <input type="url" className="popup__input popup__input_avatar" id="avatar" name="avatar" required value="" placeholder="Ссылка на картинку"/> 
              <span className="popup__error" id="avatarError"></span> 
              </label> 
          <button className="popup__button popup__button_submit popup__button_disabled" type="submit" value="submit">
            Сохранить
          </button>
          </form>
        </div>
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
    <div className="popup popup_mesto">
      <div className="popup__container">
        <button className="popup__close-btn popup__close-btn_mesto" type="button"></button>
        <form name="placeImageFormclassName" className="popup__form popup__form_mesto" noValidate>
          <h2 className="popup__title">Новое место</h2>
          <label>
          <input type="text" name="name" className="popup__input popup__input_image_name" id="imageInput"
            value="" placeholder="Название" minlength="2" maxlength="30" required
          />
          <span className="popup__error" id="imageInputError"></span>
          </label>
          <label>
          <input type="url" name="link"  className="popup__input popup__input_image_src" id="srcInput"
            required value="" placeholder="Ссылка на картинку"  
          />
          <span className="popup__error" id="srcInputError"></span>
        </label>
          <button className="popup__button popup__button_submit popup__button_disabled" type="submit" value="submit">
            Создать
          </button>
          </form>
          </div>
    </div>
    </div>
    
    <template className="element-template">
      <div className="element">
        <img className="element__image" src ="#" alt=""/>
        <div className="element__text">
            <h2 className="element__title"></h2>
            <div className="element__like-group">
                <button className="element__button element__button_clicked" aria-label="Мне нравится" type="button"></button>
                <p className="element__like-counter"></p>
            </div>
           <button type="button" className="element__button element__button_action_del" title="Удалить"></button>
        </div>
      </div>
    </template>
    </div>
    </>
  );
}

export default App;
