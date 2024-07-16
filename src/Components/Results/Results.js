import React, {useMemo} from 'react';
import images from './images';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';

function Results() {
    const userInput = useSelector(state => state);

    const results = useMemo(() => {
        if(!userInput.mortgage) 
            return;
        const mortgage = Number(userInput.mortgage.replaceAll(',', ''));
        const term = Number(userInput.mortgageTerm) * 12;
        const interestRate = (Number(userInput.interestRate)/100)/12;
        const type = userInput.mortgageType;
        const result = (mortgage * interestRate * (1 + interestRate)**term)/(((1 + interestRate)**term) - 1)
        return result.toLocaleString('en-US', {
            useGrouping: true,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }, [userInput])

    return(
        <section className={styles.container}>
            {
                results ? 
                <div className={styles.results}>
                    <div className={styles.results_title}>
                        <h1>
                            Your Results
                        </h1>
                        <p>
                            Your results are shown below based on the information you provided. 
                            To adjust the results, edit the form and click “calculate repayments” again.
                        </p>
                    </div>
                    <div className={styles.results_box}>
                        <div>
                            <h2>
                                Your monthly repayments
                            </h2>
                            <strong className={styles.results_payments}>
                                £{results}
                            </strong>
                        </div>
                        <div className={styles.separator}></div>
                        <div>
                            <h2>
                                Total you'll repay over the term
                            </h2>
                            <strong className={styles.results_total}>
                                £539,322.94
                            </strong>
                        </div>
                    </div>
                </div> : 
                <div className={styles.empty}>
                    <img src={images['empty']}/>
                    <h1>
                        Results shown here
                    </h1>
                    <p>
                        Complete the form and click “calculate repayments” 
                        to see what your monthly repayments would be.
                    </p>                
                </div>
            }

        </section>
    )
}

export default Results;