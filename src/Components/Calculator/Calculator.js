import React from 'react';
import EnterMortgage from './EnterMortgage';
import EnterTerm from './EnterTerm';
import EnterInterestRate from './EnterInterestRate';
import EnterMortgageType from './EnterMortgageType';
import icons from './icons';
import * as styles from './styles.module.css';

function Calculator() {
    return(
        <form className={styles.container}>
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