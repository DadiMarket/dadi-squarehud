import { useContext } from "react";
import { useTransition, animated } from '@react-spring/web';
import { Context } from "../../../services/Memory";

function Odometer() {
    const { state } = useContext(Context);
    const { compass } = state.objects.vehicle;
    
    const transitions = useTransition(compass, {
        from: { opacity: 0, transform: 'translateX(20px)' },
        enter: { opacity: 1, transform: 'translateX(0px)' },
        leave: { opacity: 0, transform: 'translateX(-20px)' },
    })

    return transitions((style, item) => (
        <animated.div style={style}>{item}</animated.div>
    ))
}

export default Odometer;