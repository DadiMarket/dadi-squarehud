import styles from './Square.module.css';
import PropTypes from 'prop-types';

function Square({ children }) {

    return (
        <div className={styles.container}>
            <div className={styles.square}>
            </div>
            <div className={styles.icon}>
                {children}
            </div>
        </div>
    );
}

Square.propTypes = {
    children: PropTypes.element.isRequired
};


export default Square;
