import PropTypes from 'prop-types';


function FuelIcon({ currentColor }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 17 16" fill="#fff">
            <g filter="url(#filter0_d_34_15)">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.0106 10.7156C11.0106 10.3054 11.0022 8.98988 11.0022 8.60282C11.0022 8.12534 10.9674 7.88936 10.2811 7.83092C10.2703 9.2016 10.2595 10.5999 10.2595 11.353H10.7582L10.7366 12.2903L4.00984 12.2683L3.96777 11.353H4.52904C4.50861 9.71657 4.44491 4.60656 4.42688 4.07505C4.40525 3.44098 4.75018 3.06496 5.57105 3.04511C6.39191 3.02526 8.54803 2.98556 9.25953 3.00541C9.97103 3.02526 10.2991 3.29653 10.2991 4.16768C10.2991 4.50842 10.2919 5.76442 10.2835 7.16928C11.4649 7.27073 11.7257 7.81879 11.7257 8.60282C11.7257 8.98767 11.7341 10.408 11.7341 10.7156C11.7341 11.1336 12.5286 11.1711 12.5286 10.7002C12.5286 10.3584 12.5286 7.28176 12.5286 7.28176L11.5791 6.46906L11.7137 5.27702L10.7643 4.3783L11.221 3.88869L13.2413 5.73575C13.2413 5.73575 13.2581 9.41553 13.2581 10.698C13.2581 11.9805 11.0106 11.9408 11.0106 10.7156ZM5.21169 4.12026C5.21169 4.12026 5.24895 4.92856 5.24895 5.97504C5.24895 7.59273 9.51072 7.51113 9.51072 5.9585C9.51072 5.08624 9.52995 4.08387 9.52995 4.08387L5.21169 4.12026Z" fill={currentColor} />
            </g>
            <defs>
                <filter id="filter0_d_34_15" x="0.967773" y="0" width="15.2903" height="15.2903" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_15" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_15" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}

FuelIcon.propTypes = {
    currentColor: PropTypes.string,
};


export default FuelIcon;