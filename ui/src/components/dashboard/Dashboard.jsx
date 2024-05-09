import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';


function Dashboard({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.square}>
                {children}
            </div>
        </div>
    );
}

Dashboard.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Dashboard;