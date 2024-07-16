import React from 'react';
import EnterMortgage from './EnterMortgage';
import EnterTerm from './EnterTerm';
import EnterInterestRate from './EnterInterestRate';
import EnterMortgageType from './EnterMortgageType';
import icons from './icons';
import * as styles from './styles.module.css';
import {useDispatch} from 'react-redux';

function Calculator() {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const interestRate = e.target.elements.interestRate.value;
        const mortgage = e.target.elements.mortgage.value;
        const mortgageType = e.target.elements.mortgageType.value;
        const mortgageTerm = e.target.elements.mortgageTerm.value;
        dispatch({type: 'CALCULATE', payload: {
            interestRate,
            mortgage,
            mortgageType,
            mortgageTerm
        }});
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <fieldset className={styles.header}>
                <h1>
                    Mortgage Calculator
                </h1>         
                <a> 
                    Clear All    
                </a>       
            </fieldset>
            <EnterMortgage/>
            <div className={styles.inputContainer}>
                <EnterTerm/>  
                <EnterInterestRate/>              
            </div>
            <EnterMortgageType/>
            <button className={styles.submit}>
                <img src={icons['calculator']}/>
                Calculate Repayments
            </button>
        </form>
    )
}

export default Calculator;