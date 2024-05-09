import { useEffect, useState, useContext, useMemo } from "react";
import { Context } from "../../services/Memory";
import PropTypes from "prop-types";
import styles from "./SquareStatus.module.css";

function CustomSquarePlayer({ style, progress }) {
    return (
        <div className={styles.square} style={style}>
            <div
                className={styles.square2}
                style={{ height: progress + '%' }}
            ></div>
        </div>
    );
}

function withCustomColorBar(ComponentStatus, customColor) {
    const { h, s, l } = customColor;

    const theme = useContext(Context); // Mover aquí la llamada a useContext

    const style = useMemo(
        () => ({
            '--primary-color': `hsla(${h}, ${s}%, ${l}%, 0.64)`,
            '--secondary-color': `hsla(${h}, ${s}%, ${l - 10}%, 0.8)`,
            '--tertiary-color': `hsla(${h}, ${s}%, ${l - 36}%, 0.55)`,
            '--quaternary-color': `hsla(${h}, ${s}%, ${l}%, 0.41)`,
            '--drop-shadow-color': `hsla(${h}, ${s}%, ${l}%, 0.302)`,
        }),
        [h, s]
    );

    return function WrappedComponent(props) {
        return <ComponentStatus {...props} style={style} />;
    };
}

function SquareStatus({ children, progress }) {
    const { state } = useContext(Context);
    const { hudColor } = state.objects.hud;

    const [localProgress, setLocalProgress] = useState(progress);

    useEffect(() => {
        setLocalProgress(progress);
    }, [progress]);

    const normalizedProgress = useMemo(
        () => Math.min(100, Math.max(0, localProgress)),
        [localProgress]
    );
    const invertProgress = useMemo(() => 100 - normalizedProgress, [normalizedProgress]);

    const SquarePlayer = useMemo(
        () => withCustomColorBar(CustomSquarePlayer, hudColor),
        [hudColor]
    );

    return (
        <div className={styles.container}>
            <SquarePlayer progress={invertProgress} />
            <div className={styles.icon}>{children}</div>
        </div>
    );
}

SquareStatus.propTypes = {
    children: PropTypes.node,
    progress: PropTypes.number,
};

export default SquareStatus;