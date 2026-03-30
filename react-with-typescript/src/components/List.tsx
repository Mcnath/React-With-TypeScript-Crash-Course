import React from "react";
import {Istate as Iprops} from "../App";

const List: React.FC<Iprops> = ({deck}) => {

    const renderList = () => {
        return deck.map((dec) => {
            return(
                <li className="List">
                <div className="List-header">
                    <img className="List-img" src={dec.url}/>
                    <h2> {dec.name}</h2>
                </div>
                <p>${dec.price}</p>
                <p className="List-note">{dec.note}</p>
                </li>
            )
            
        })
    }
    return(
        <ul>
            {renderList()}
        </ul>
    )
}

export default List