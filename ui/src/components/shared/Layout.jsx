import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { HslColorPicker } from "react-colorful";
import useLocalStorage from '../../hooks/useLocalStorage';
import { Context } from '../../services/Memory';
import styles from './Layout.module.css';
import PlazaLogo from '../../assets/images/Plaza_Logo.gif';
import Modal from '../menuhud/Modal';

function Layout({ children }) {
    const { state, dispatch } = useContext(Context);
    const { customMenu } = state.objects.hud;

    const [menuVisible, setMenuVisible] = useState(null);
    const [color, setColor] = useLocalStorage('hudColor', { h: 0, s: 100, l: 50, a: 0.8 });

    useEffect(() => {
        setMenuVisible(customMenu);
    }, [customMenu]);

    const setDefaultColor = () => {
        setColor({ h: 0, s: 100, l: 50, a: 0.8 });
    };

    useEffect(() => {
        dispatch({
            type: 'UPDATE_HUD_STATUS',
            payload: {
                hudColor: color,
            },
        });
    }, [color]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={PlazaLogo} alt="PlazaRP_Logo" />
            </div>
            {menuVisible &&
                <div>
                    <Modal>
                        <div className='flex flex-col justify-center items-center'>
                            <HslColorPicker color={color} onChange={setColor} />
                            <button onClick={setDefaultColor} type="button" className="text-white w-full mt-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-bold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">Restablecer Colores del HUD</button>
                            <p className='text-lg pt-4 pb-6 text-gray-500'>Presiona&nbsp;
                                <span className='px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg'>esc</span>&nbsp;
                                o <span className='px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg'>backspace</span>
                                &nbsp;para salir del menú.
                            </p>
                        </div>

                        <div className="flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" className="w-3 h-3 rounded-full bg-stone-400" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full bg-stone-400" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        </div>
                    </Modal>
                </div>
            }
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