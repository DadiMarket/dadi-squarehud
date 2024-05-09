import PropTypes from 'prop-types';

function EngineeIcon({ currentColor }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="23" viewBox="0 0 21 17" fill="none">
            <g filter="url(#filter0_d_34_14)">
                <path d="M10.129 11.2995H10.1361M10.129 7.98157V9.30876M11.5484 5.99078V4M9.41936 4H13.6774M5.87098 8.64516H3.74194M3.74194 6.65438V10.6359M16.5161 7.98157V13.2903M5.87098 5.99078V11.2995H7.29033L8.70969 13.2903H14.3871V7.31797L12.9677 5.99078H5.87098Z" stroke={currentColor} strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges" />
            </g>
            <defs>
                <filter id="filter0_d_34_14" x="0.241943" y="0.5" width="19.7742" height="16.2903" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.66 0 0 0 0 0 0 0 0 0.3 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_14" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_14" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}

EngineeIcon.propTypes = {
    currentColor: PropTypes.string.isRequired,
};


export default EngineeIcon;