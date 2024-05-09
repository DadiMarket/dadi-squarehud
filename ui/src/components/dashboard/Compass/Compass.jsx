import { useState, useEffect, useContext, useCallback } from "react";
import styles from "./Compass.module.css";
import ArrowIcon from "../../icons/Arrow";
import Odometer from "./Odometer";
import { Context } from "../../../services/Memory";

export default function Compass() {
    const { state } = useContext(Context);
    const { compass } = state.objects.vehicle;

    const [compassValue, setCompassValue] = useState(compass);

    useEffect(() => {
        setCompassValue(compass);
    }, [compass]);

    return (
        <div className={styles.compass}>
            <div className={styles.odometer}>
            {compassValue}
            </div>
            <div className={styles.arrow}>
                <ArrowIcon />
            </div>
        </div>
    );
}
