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
        fill: isTalking ? '#fff' : '#eeededae',
    });

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 13 18" fill="none" className='transition-all ease-in-out'>
            <g filter="url(#filter0_d_27_172)">
                <animated.path d="M6.5 0C5.14489 0 4.04545 1.17578 4.04545 2.625V7C4.04545 8.44922 5.14489 9.625 6.5 9.625C7.85511 9.625 8.95455 8.44922 8.95455 7V2.625C8.95455 1.17578 7.85511 0 6.5 0ZM3.22727 5.90625C3.22727 5.54258 2.95369 5.25 2.61364 5.25C2.27358 5.25 2 5.54258 2 5.90625V7C2 9.43633 3.69261 11.4488 5.88636 11.7688V12.6875H4.65909C4.31903 12.6875 4.04545 12.9801 4.04545 13.3438C4.04545 13.7074 4.31903 14 4.65909 14H6.5H8.34091C8.68097 14 8.95455 13.7074 8.95455 13.3438C8.95455 12.9801 8.68097 12.6875 8.34091 12.6875H7.11364V11.7688C9.30739 11.4488 11 9.43633 11 7V5.90625C11 5.54258 10.7264 5.25 10.3864 5.25C10.0463 5.25 9.77273 5.54258 9.77273 5.90625V7C9.77273 8.9332 8.30767 10.5 6.5 10.5C4.69233 10.5 3.22727 8.9332 3.22727 7V5.90625Z" fill="white" style={microSpring} />
            </g>
            <defs>
                <filter id="filter0_d_27_172" x="0" y="0" width="13" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_172" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_172" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}

export default MicroIcon;