import React, {useState} from 'react';
import icons from './icons';
import * as styles from './styles.module.css';


//this is where i left off, i will need to find a way to trigger the error state in this component
function EnterMortgageType() {
    const [type, setType] = useState('repayment');
    const [error, setError] = useState('');

    const handleType = (e) => {
        setType(e.target.value);
    }


    return(
        <fieldset className={styles.container}>
            <h1>
                Mortgage Type
            </h1>
            <div 
                className={styles.radioButton} 
                style={type === 'repayment' ? {backgroundColor: '#D8DB2F26', border: '1px solid #D8DB2F'} : {}}>
                    <label 
                        className={styles.radio}
                        htmlFor='repayment' 
                        style={type === 'repayment' ? {borderColor: 'transparent'} : {}}>
                            <input 
                                type='radio' 
                                id='repayment' 
                                name='mortgageType' 
                                value='repayment'
                                checked={type === 'repayment'}
                                onChange={handleType}
                                required
                                />       
                            {type === 'repayment' && <img src={icons['radio']} /> }            
                    </label>
                    <label htmlFor='repayment' className={styles.radioLabel}>
                        Repayment
                    </label>
            </div>
            <div 
                className={styles.radioButton} 
                style={type === 'interest only' ? {backgroundColor: '#D8DB2F26', border: '1px solid #D8DB2F'} : {}}>
                    <label 
                        className={styles.radio} 
                        htmlFor='interest only' 
                        style={type === 'interest only' ? {borderColor: 'transparent'} : {}}>
                            <input 
                                type='radio' 
                                id='interest only' 
                                name='mortgageType' 
                                value='interest only'
                                onChange={handleType}
                                />       
                            {type === 'interest only' && <img src={icons['radio']} /> }            
                    </label>
                    <label htmlFor='interest only' className={styles.radioLabel}>
                        Interest Only
                    </label>
            </div>
            {error === 'empty' && 
                <div className={styles.errorMessage}>
                    This field is required
                </div>
            }
        </fieldset>
    )
}

export default EnterMortgageType;