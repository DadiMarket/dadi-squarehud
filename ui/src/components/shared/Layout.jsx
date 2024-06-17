import PropTypes from 'prop-types';
import styles from './Layout.module.css';
import DadiLogo from '../../assets/images/Logo_dadi.png';

function Layout({ children }) {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={DadiLogo} alt="DadiMarket_Logo" />
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
};


export default Layout