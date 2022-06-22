import React, {useState} from 'react';
import PopupWithForm from "../PopupWithForm";
import currentUserContext from "../../contexts/CurrentUserContext"

const AddPlacePopup = (props) => {
    const [name, setName] = useState('');
    const [imageLink, setImageLink] = useState('');

    const currentUser = React.useContext(currentUserContext);

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: name,
            link: imageLink,
        });

    }

    React.useEffect(() => {
        setImageLink(currentUser.avatar);
    }, [currentUser]);

    return (
        <PopupWithForm
            name="mesto" title="Новое место"
            isOpen={props.isOpen}
            onClose={() => props.onClose()}
            handleSubmit={(e) => handleSubmit(e)}
        >
            <label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    className="popup__input popup__input_image_name"
                    id="imageInput"
                    defaultValue=""
                    placeholder="Название"
                    minLength="2"
                    maxLength="30"
                    required
                />
                <span className="popup__error" id="imageInputError"/>
            </label>
            <label>
                <input
                    value={imageLink}
                    onChange={(e) => setImageLink(e.target.value)}
                    type="url" name="link"
                    className="popup__input popup__input_image_src"
                    id="srcInput"
                    defaultValue=""
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__error" id="srcInputError"/>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup