import { useEffect, useState, useContext } from 'react';
import { Context } from '../../services/Memory';
import styles from './SmallSquare.module.css';

function CustomSmallSquare({ style }) {
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

function SmallSquare({ children }) {
    const { state } = useContext(Context);
    const { hudColor } = state.objects.hud;

    const [customColorSmallSquare, setcustomColorSmallSquare] = useState({});

    useEffect(() => {
        setcustomColorSmallSquare(hudColor);
    }, [hudColor]);

    const SquareInfo = withCustomColorHUD(CustomSmallSquare, customColorSmallSquare);

    return (
        <div className={styles.container}>
            <SquareInfo />
        </div>
    );
}


export default SmallSquare;