import { useEffect, useState, useContext } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Context } from '../../services/Memory';


function MicroIcon() {

    const { state } = useContext(Context);
    const playerProps = state.objects.player;
    const { talking } = playerProps;

    const [isTalking, setIsTalking] = useState(false);

    useEffect(() => {
        setIsTalking(talking);
    }, [talking]);

    const microSpring = useSpring({
        fill: isTalking ? '#0c0c0cae' : '#0c0c0c',
    });

    return (
        <animated.svg xmlns="http://www.w3.org/2000/svg" id="Filled" fill="currentColor" style={microSpring} viewBox="0 0 24 24"><path d="M10,12a1,1,0,0,1-1,1H4.069a7.993,7.993,0,0,0,15.862,0H15a1,1,0,0,1,0-2h5V9H15a1,1,0,0,1,0-2h4.931A7.993,7.993,0,0,0,4.069,7H9A1,1,0,0,1,9,9H4v2H9A1,1,0,0,1,10,12Z"/><path d="M23,12a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9H11a9.011,9.011,0,0,1-9-9,1,1,0,0,0-2,0A11.013,11.013,0,0,0,11,24h2A11.013,11.013,0,0,0,24,13,1,1,0,0,0,23,12Z"/></animated.svg>
    );
}

export default MicroIcon;