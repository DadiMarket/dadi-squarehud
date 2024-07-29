import styles from './Speedometer.module.css';
import { useContext } from 'react';
import { Context } from '../../services/Memory';

function Speedometer() {
    const { state } = useContext(Context);
    const { speedUnit, speedValue } = state.objects.vehicle;

    function verifySpeed(speedValue) {
        if (speedValue <= 0 || speedValue === null || speedValue === undefined) {
            return '000';
        } else if (speedValue > 999) {
            return '999';
        } else {
            return String(speedValue).padStart(3, '0');
        }
    }

    return (
        <div className='flex justify-center w-[225px]'>
            <div className={styles.speedValue}>{verifySpeed(speedValue)}</div>
            <div className={styles.speedUnit}>{speedUnit}</div>
        </div>
    );
}

export default Speedometer;
