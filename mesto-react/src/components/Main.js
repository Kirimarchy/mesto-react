import React from 'react';

function Main() {


function handleEditAvatarClick(e) {
      const element1 = document.querySelector('profile__open-button');
      element1.classList.add('popup_opened');
    }
  
  function handleEditProfileClick(e) {
      const element2 = document.querySelector('profile__edit-button');
      element2.classList.add('popup_opened');
    }
  

  function handleAddPlaceClick(e) {
      const element3 = document.querySelector('popup__button');
      element3.classList.add('popup_opened');
  }

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__block">
          <div className="profile__block-img">
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

        <button className="profile__add-button profile__open-button" type="button">
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