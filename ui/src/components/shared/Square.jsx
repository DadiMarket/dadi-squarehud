import { useEffect, useState, useContext } from 'react';
import { Context } from '../../services/Memory';
import styles from './Square.module.css';
import PropTypes from 'prop-types';

function CustomSquare({ style }) {
    return (
        <div className={styles.square} style={style}>
        </div>
    );
}

function withCustomColorHUD(ComponentSquare, customColor) {
    const { h, s, l } = customColor;

    return props => {
        const style = {
            '--primary-color': `hsla(${h}, ${s}%, ${l}%, 0.64)`,
            '--secondary-color': `hsla(${h}, ${s}%, ${l - 10}%, 0.8)`,
            '--tertiary-color': `hsla(${h}, ${s}%, ${l - 36}%, 0.55)`,
            '--quaternary-color': `hsla(${h}, ${s}%, ${l}%, 0.41)`,
            '--drop-shadow-color': `hsla(${h}, ${s}%, ${l}%, 0.302)`,
        };
        return <ComponentSquare {...props} style={style} />;
    };
}

function Square({ children }) {
    const { state } = useContext(Context);
    const { hudColor } = state.objects.hud;

    const [customColorSquare, setcustomColorSquare] = useState({});

    useEffect(() => {
        setcustomColorSquare(hudColor);
    }, [hudColor]);

    const SquareInfo = withCustomColorHUD(CustomSquare, customColorSquare);

    return (
        <div className={styles.container}>
            <SquareInfo />
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
