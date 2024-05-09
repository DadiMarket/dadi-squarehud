import PropTypes from 'prop-types';


function LightsIcon({ currentColor }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16" fill="none">
            <g filter="url(#filter0_d_34_16)">
                <path d="M7.19965 3.31781C7.23333 3.13355 7.39359 3 7.58056 3C10.569 3 13 5.08374 13 7.64516C13 10.2062 10.569 12.2903 7.58056 12.2903C7.39359 12.2903 7.23333 12.1564 7.19965 11.9721L7.15979 11.7534C6.68676 8.97059 6.68714 6.20478 7.16057 3.53227L7.19965 3.31781Z" fill={currentColor} />
                <path d="M6.2316 5.65437L4.29608 6.81566C4.23375 6.8532 4.16485 6.87102 4.09711 6.87102C3.96551 6.87102 3.83736 6.80404 3.76498 6.68289C3.65504 6.49978 3.71426 6.26172 3.89775 6.1518L5.83327 4.99051C6.01675 4.88018 6.25482 4.94019 6.36437 5.12327C6.47431 5.30674 6.41508 5.54442 6.2316 5.65437Z" fill={currentColor} />
                <path d="M3.89768 8.47443L5.8332 7.31314C6.01706 7.20282 6.25475 7.26282 6.36429 7.44591C6.47424 7.62901 6.41501 7.86708 6.23152 7.977L4.29601 9.13829C4.23368 9.17583 4.16478 9.19325 4.09742 9.19325C3.96581 9.19325 3.83767 9.12668 3.76491 9.0055C3.65498 8.82206 3.71419 8.58437 3.89768 8.47443Z" fill={currentColor} />
                <path d="M3.89768 10.797L5.8332 9.63572C6.01706 9.5254 6.25475 9.58541 6.36429 9.76849C6.47424 9.95159 6.41501 10.1897 6.23152 10.2996L4.29601 11.4609C4.23368 11.4984 4.16478 11.5158 4.09742 11.5158C3.96581 11.5158 3.83767 11.4493 3.76491 11.3281C3.65498 11.1446 3.71419 10.907 3.89768 10.797Z" fill={currentColor} />
            </g>
            <defs>
                <filter id="filter0_d_34_16" x="0.709717" y="0" width="15.2903" height="15.2903" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 1 0 0 0 0 0.66 0 0 0 0 0 0 0 0 0.3 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.8625 0 0 0 0 0 0 0 0 0.3 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_16" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_16" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}

LightsIcon.propTypes = {
    currentColor: PropTypes.string.isRequired,
};


export default LightsIcon;