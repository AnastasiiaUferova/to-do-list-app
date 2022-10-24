import React from "react";
import { NavLink } from "react-router-dom";
import "./Rewards.css"


function Rewards() {
    return (
        <div className="rewards">
            <NavLink to="/todo"><button className="td-page__title rewards__logo">TODO</button></NavLink>
            
            <div className="rewards-list__title-container">
                <h2 className="important-list__title rewards-list__title">Rewards table</h2>
            </div>
            <form  className="rewards__form">
                <div className="rewards__subtitle-container">
                    <p>Rewards</p>
                    <p>Points to gain</p>
                </div>
                <fieldset className="rewards__input-container">
                    <input  type="text" name="reward3" className="rewards__item-input" defaultValue='reward 3' />
                    <input  type="text" name="reward1" className="rewards__points" defaultValue='35' />
                </fieldset >
                <fieldset  className="rewards__input-container">
                    <input type="text" name="reward2" className="rewards__item-input" defaultValue='reward 2' />
                    <input  type="text" name="reward3" className="rewards__points" defaultValue='36' />
                </fieldset>
                <fieldset  className="rewards__input-container">
                    <input  id="rewards-input-email" type="text" name="reward3" className="rewards__item-input" defaultValue='reward 3' />
                    <input  type="text" name="reward3" className="rewards__points" defaultValue='36' />
                </fieldset>
                <button type="submit" className="rewards__button">Edit</button>
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