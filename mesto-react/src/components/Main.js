import React from 'react';

function Main( { handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick }) {


function handleEditAvatarClick() {
      const element1 = document.querySelector('popup_avatar');
      element1.classList.add('popup_opened');
    }
  
  function handleEditProfileClick() {
      const element2 = document.querySelector('popup_profile');
      element2.classList.add('popup_opened');
    }
  

  function handleAddPlaceClick() {
      const element3 = document.querySelector('popup_mesto');
      element3.classList.add('popup_opened');
  }

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__block">
          <div className="profile__block-img" onClick={ handleEditAvatarClick }>
            <img className="profile__avatar"
              src="#"
              alt="аватарка"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title"> Жак-Ив Кусто </h1>
          <button onClick={ handleEditProfileClick } className="profile__edit-button profile__open-button" aria-label="Edit" type="button" ></button>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>

        <button onClick= { handleAddPlaceClick }className="profile__add-button profile__open-button" type="button">
          <img className="profile__add-image" src=""
            alt="Кнопка добавления новых записей"
          />
        </button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;