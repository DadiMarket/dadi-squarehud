import { useEffect, useState, useContext } from 'react';
import { Context } from '../../services/Memory';

function SmallSquareIcon() {

    const { state } = useContext(Context);
    const { hudColor } = state.objects.hud;

    const [customColor, setcustomColor] = useState(hudColor);

    useEffect(() => {
        setcustomColor(hudColor);
    }, [hudColor]);

    const { h, s, l, a } = customColor;

    return (
        <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_27_171)">
                <path d="M10.9858 1.32752C11.1753 1.11937 11.4438 1.00073 11.7253 1.00073H20.6372C21.5207 1.00073 21.9702 2.06266 21.3551 2.69691L15.5363 8.69691C15.348 8.89112 15.089 9.00073 14.8184 9.00073H6.26277C5.39428 9.00073 4.93864 7.96973 5.52332 7.32752L10.9858 1.32752Z" fill="url(#paint0_linear_27_171)" fillOpacity="0.55" shapeRendering="crispEdges" />
                <path d="M10.9858 1.32752C11.1753 1.11937 11.4438 1.00073 11.7253 1.00073H20.6372C21.5207 1.00073 21.9702 2.06266 21.3551 2.69691L15.5363 8.69691C15.348 8.89112 15.089 9.00073 14.8184 9.00073H6.26277C5.39428 9.00073 4.93864 7.96973 5.52332 7.32752L10.9858 1.32752Z" fill="url(#paint1_linear_27_171)" fillOpacity="0.8" shapeRendering="crispEdges" />
            </g>
            <defs>
                <filter id="filter0_dd_27_171" x="0.260803" y="0.000732422" width="26.3784" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_171" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_27_171" result="effect2_dropShadow_27_171" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_27_171" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_27_171" x1="15.1439" y1="11.2407" x2="15.1439" y2="-0.119268" gradientUnits="userSpaceOnUse">
                    <stop stopColor={`hsla(${h}, ${s}%, 50%, 1)`} />
                    <stop offset="0.989787" stopColor={`hsla(${h}, ${s}%, 50%, 1)`} stopOpacity="0.745701" />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_27_171" x1="13.5" y1="1.00073" x2="13.5" y2="9.96073" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0" />
                    <stop offset="0.62551" stopColor={`hsla(${h}, ${s}%, 50%, 1)`} stopOpacity="0.805793" />
                    <stop offset="1" stopColor="{`hsla(${h}, ${s}%, 50%, 1)`}" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SmallSquareIcon;