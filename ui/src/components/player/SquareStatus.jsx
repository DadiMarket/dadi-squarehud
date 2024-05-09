import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SquareStatus.module.css";

function SquareStatus({ children, progress }) {

    const [localProgress, setLocalProgress] = useState(progress);

    useEffect(() => {
        setLocalProgress(progress);
    }, [progress]);

    const normalizedProgress = useMemo(
        () => Math.min(100, Math.max(0, localProgress)),
        [localProgress]
    );
    const invertProgress = useMemo(() => 100 - normalizedProgress, [normalizedProgress]);

    return (
        <div className={styles.container}>
            <div className={styles.square}>
                <div
                    className={styles.square2}
                    style={{ height: invertProgress + '%' }}
                ></div>
            </div>
            <div className={styles.icon}>{children}</div>
        </div>
    );
}

SquareStatus.propTypes = {
    children: PropTypes.node,
    progress: PropTypes.number,
};

export default SquareStatus;