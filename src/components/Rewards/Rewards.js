import React from "react";


function Rewards() {
    return (
        <div className="rewards">
            <div className="important-list__title-container">
                <h2 className="important-list__title">Rewards table</h2>
            </div>
            <form  className="profile__form">
                <div className="profile__input-container">
                    <input  id="profile-input-email" type="text" name="reward3" className="profile__item-input" defaultValue='reward 3' />
                    <input  id="profile-input-name" type="text" name="reward1" className="profile__item-input profile__item-input_type_name" defaultValue='30-35' />
                </div>
                <div className="profile__input-container">
                    <input  id="profile-input-email" type="text" name="reward2" className="profile__item-input" defaultValue='reward 2' />
                    <input  id="profile-input-email" type="text" name="reward3" className="profile__item-input" defaultValue='36' />
                </div>
                <div className="profile__input-container">
                    <input  id="profile-input-email" type="text" name="reward3" className="profile__item-input" defaultValue='reward 3' />
                    <p>from {<input  id="profile-input-email" type="text" name="reward3" className="profile__item-input" defaultValue='47' />}
                    to {<input  id="profile-input-email" type="text" name="reward3" className="profile__item-input" defaultValue='47' />}
                    </p>
                </div>
                <button type="submit" className="profile__button">Edit</button>
            </form>
        </div>
        
                )

}

export default Rewards;








/*return (
    <div>
    <div className="important-list__title-container">
            <h2 className="important-list__title">Rewards table</h2>
        </div>
    <div className="task-input">
        <div className="task-input__container">
            <form className="task-input__container-form" >
                <input  className="task-input__input" placeholder="Create a new todo..." type="text"></input>
                <button className="task-input__button" type="submit"></button>
            </form>
        </div>
    </div>
    </div>
);*/