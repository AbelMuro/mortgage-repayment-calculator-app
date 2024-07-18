import React, {useState} from 'react';
import * as styles from './styles.module.css'

function DisplayResults({results}) {
    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
        setDisplay(true);
    }

    const handleHide = () => {
        setDisplay(false);
    }

    return(
            <div className={styles.results_payments} onMouseEnter={handleDisplay} onMouseLeave={handleHide}>
                {results}
                {display && <div className={styles.popup}>
                    {results}
                </div>}
            </div>
    )
}

export default DisplayResults;