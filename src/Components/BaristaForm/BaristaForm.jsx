import React, {Component, useState} from "react";

const BaristaForm = () => {
    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <form action=''>
                <label>Label</label>
                <input type='checkbox'></input>
            </form>

            <button type='submit' className='submit button' onClick={onCheckAnswer}>Check Answer</button>

            <button type='new-drink-button' className='submit button' onClick={onNewDrink}>New Drink</button>
        </div>
    )
}

const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': "",
    "syrup": "",
    'blended': ""
})

const ingredients = {
    'temperature': ['hot', 'warm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
}

const onCheckAnswer = () => {
    console.log('onCheckAnswer() button clicked');
}

const onNewDrink = () => {
    console.log('onNewDrink() button clicked')
}

export default BaristaForm;
