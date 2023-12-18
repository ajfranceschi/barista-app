import React, {Component, useState} from "react";
import RecipeChoices from "../RecipeChoices/RecipeChoices.jsx";
import drinksJson from "../../assets/drinks.json"

const BaristaForm = () => {
    const initialDrink = drinksJson.drinks[Math.floor(Math.random() * drinksJson.drinks.length)];

    const [currentDrink, setCurrentDrink] = useState( `${initialDrink.name}`);
    const [trueRecipe, setTrueRecipe] = useState(initialDrink.ingredients);
    const [correctTemp, setCheckedTemp] = useState('');
    const [correctSyrup, setCheckedSyrup] = useState('');
    const [correctMilk, setCheckedMilk] = useState('');
    const [correctBlended, setCheckedBlended] = useState('');

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
        // clear state
        setInputs({
            'temperature': '',
            'milk': "",
            "syrup": "",
            'blended': ""
        });
        setCheckedTemp('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

        getNextDrink();
    }

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);

        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }

    const capitalizeEachWord = (drink) => {
        const wordsInDrink = drink.split(" ");

        if (wordsInDrink.length <= 1) {
            return drink;
        } else {
            const res = wordsInDrink.map((word) => {
                return `${word[0].toUpperCase()}${word.substring(1)}`
            });
            return res.join(" ");
        }
    }

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{capitalizeEachWord(currentDrink)}</h2>
                <button className="button newdrink" onClick={onNewDrink} type={'new-drink-button'}>🔄</button>
            </div>
            <form action=''>
                <h3>Temperature</h3>
                <div className="answer-space">
                    {inputs["temperature"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                />

                <h3>Milk</h3>
                <div className="answer-space">
                    {inputs["milk"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value
                    }))}
                    label="milk"
                    choices={ingredients["milk"]}
                    checked={inputs["milk"]}
                />

                <h3>Syrup</h3>
                <div className="answer-space">
                    {inputs["syrup"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value
                    }))}
                    label={"syrup"}
                    choices={ingredients["syrup"]}
                    checked={inputs["syrup"]}
                />

                <h3>Blended</h3>
                <div className="answer-space">
                    {inputs['blended']}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value
                    }))}
                    label={"blended"}
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]}
                />
            </form>

            <button type='submit' className='submit button' onClick={onCheckAnswer}>Check Answer</button>

            <button type='new-drink-button' className='submit button' onClick={onNewDrink}>New Drink</button>
        </div>
    )
}



export default BaristaForm;
