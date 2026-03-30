import React, { useState } from "react";
import {Istate as props} from "../App";

interface Iprops{
    deck: props["deck"]
    setDeck: React.Dispatch<React.SetStateAction<props["deck"]>>
}

const AddToList: React.FC<Iprops> = ({deck, setDeck}) => {

const [input,setInput] = useState({
    name: "",
    price: "",
    url: "",
    note: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
  }

  const handleClick = (): void =>{
        if(
            !input.name || 
            !input.price ||
            !input.url
        ){
            return
        }

        setDeck([
            ...deck,
            {
                name:input.name,
                price:parseInt(input.price),
                url:input.url,
                note: input.note
            }
        ]);

       setInput({
            name: "",
            price: "",
            url: "",
            note: ""
        })
    }

    return(
        <div className="AddToList">
            <input type="text"
            placeholder="Name"
            className="AddToList-input"
            value={input.name}
            onChange={handleChange}
            name="name"
            />
            <input type="text"
            placeholder="Price"
            className="AddToList-input"
            value={input.price}
            onChange={handleChange}
            name="price"
            />
            <input type="text"
            placeholder="Image URL"
            className="AddToList-input"
            value={input.url}
            onChange={handleChange}
            name="url"
            />
            <textarea 
            placeholder="Note"
            className="AddToList-input"
            value={input.note}
            onChange={handleChange}
            name="note"
            />

            <button className="AddToList-btn"
            onClick={handleClick}>AddToList</button>
        </div>
    )
}

export default AddToList