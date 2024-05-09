import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../services/Memory';
import styles from './Modal.module.css';
import { useSpring, animated } from '@react-spring/web';
import { fetchNui } from '../../services/fetchNui';


function Modal({ children }) {

    const { state } = useContext(Context);
    const { customMenu } = state.objects.hud;

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setShowMenu(customMenu);
    }, [customMenu]);

    useEffect(() => {
        const keyHandler = (e) => {
            if (["Backspace", "Escape"].includes(e.code)) {
                fetchNui('closeCustomizationMenu');
            }
        };

        window.addEventListener('keydown', keyHandler);

        return () => {
            window.removeEventListener('keydown', keyHandler);
        };
    }, [showMenu]);

    const modalSpring = useSpring({
        transform: showMenu ? 'translateY(0)' : 'translateY(-20px)',
    });

    return (
        <>
        {showMenu &&
            <div className={styles.container} >
                <animated.div className={styles.card} style={modalSpring}>
                    <div className='text-grey m-8 rounded-xl flex flex-col items-center'>
                        {children}
                    </div>
                </animated.div>
            </div>
        }
        </>  
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Modal;