import styles from './Tachometer.module.css';
import PropTypes from 'prop-types';
import Compass from './Compass/Compass';


function Tachometer({ children }) {

    return (
        <div className={styles.container}>
            <div className={styles.tachometer}>
                <svg width="100%" height="100%" viewBox="0 0 79 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_bd_25_73)">
                        <path
                            d="M76.641 20.3158C73.1303 14.235 68.0808 9.18551 62 5.67477C55.9192 2.16404 49.0215 0.315793 42 0.315796C34.9785 0.315798 28.0808 2.16405 22 5.67479C15.9192 9.18552 10.8697 14.235 7.35897 20.3158C3.84824 26.3966 2 33.2943 2 40.3158C2 47.3373 3.84826 54.2351 7.359 60.3158C10.8697 66.3966 15.9193 71.4461 22 74.9568C28.0808 78.4676 34.9786 80.3158 42 80.3158V76.6661C35.6192 76.6661 29.3508 74.9865 23.8249 71.7961C18.2989 68.6057 13.7101 64.0169 10.5197 58.491C7.32928 52.965 5.64966 46.6966 5.64966 40.3158C5.64965 33.935 7.32927 27.6666 10.5197 22.1406C13.7101 16.6147 18.2989 12.0259 23.8248 8.83548C29.3508 5.64507 35.6192 3.96546 42 3.96545C48.3808 3.96545 54.6492 5.64506 60.1752 8.83547C65.7011 12.0259 70.2899 16.6147 73.4803 22.1406L76.641 20.3158Z"
                            fill="#595959" fillOpacity="0.25" shapeRendering="crispEdges" />
                        <path
                            d="M76.641 20.3158C73.1303 14.235 68.0808 9.18551 62 5.67477C55.9192 2.16404 49.0215 0.315793 42 0.315796C34.9785 0.315798 28.0808 2.16405 22 5.67479C15.9192 9.18552 10.8697 14.235 7.35897 20.3158C3.84824 26.3966 2 33.2943 2 40.3158C2 47.3373 3.84826 54.2351 7.359 60.3158C10.8697 66.3966 15.9193 71.4461 22 74.9568C28.0808 78.4676 34.9786 80.3158 42 80.3158V76.6661C35.6192 76.6661 29.3508 74.9865 23.8249 71.7961C18.2989 68.6057 13.7101 64.0169 10.5197 58.491C7.32928 52.965 5.64966 46.6966 5.64966 40.3158C5.64965 33.935 7.32927 27.6666 10.5197 22.1406C13.7101 16.6147 18.2989 12.0259 23.8248 8.83548C29.3508 5.64507 35.6192 3.96546 42 3.96545C48.3808 3.96545 54.6492 5.64506 60.1752 8.83547C65.7011 12.0259 70.2899 16.6147 73.4803 22.1406L76.641 20.3158Z"
                            fill="url(#paint0_linear_25_73)" fillOpacity="0.2" shapeRendering="crispEdges" />
                    </g>
                    <defs>
                        <filter id="filter0_bd_25_73" x="-1" y="-2.6842" width="80.641" height="88"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_25_73" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="3" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="effect1_backgroundBlur_25_73"
                                result="effect2_dropShadow_25_73" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_25_73" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_25_73" x1="30.3158" y1="92" x2="30.3158" y2="13"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className={styles.cutLines}>
                <svg width="100%" height="100%" viewBox="0 0 82 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="33.6065" y1="13.0782" x2="31.5227" y2="1.26047" stroke="#DB1212" strokeWidth="3" />
                    <line x1="11.0607" y1="11.9393" x2="19.5459" y2="20.4246" stroke="#DB1212" strokeWidth="3" />
                    <line x1="0.260472" y1="32.5228" x2="12.0782" y2="34.6066" stroke="#DB1212" strokeWidth="3" />
                    <line x1="1.4139" y1="58.308" x2="12.46" y2="53.6193" stroke="#DB1212" strokeWidth="3" />
                    <line x1="19.701" y1="77.6423" x2="25.701" y2="67.25" stroke="#DB1212" strokeWidth="3" />
                    <line x1="42.5" y1="85.3158" x2="42.5" y2="73.3158" stroke="#FF0000" strokeWidth="3" />
                    <g filter="url(#filter0_b_25_77)">
                        <line x1="51.6405" y1="12.2418" x2="56.712" y2="1.36611" stroke="#DB1212" strokeWidth="3" />
                    </g>
                    <line x1="68.1183" y1="22.8399" x2="77.8265" y2="15.7865" stroke="#DB1212" strokeWidth="3" />
                    <line x1="70" y1="40.5" x2="82" y2="40.5" stroke="#DB1212" strokeWidth="3" />
                    <defs>
                        <filter id="filter0_b_25_77" x="19.2811" y="-30.2678" width="69.7903" height="74.1436" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="15.5" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_25_77" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_25_77" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className='absolute z-[2] size-[8rem] '>
                <Compass />
            </div>

            <div className='flex mt-[5rem] ml-[7.8rem]'>
                {children}
            </div>
        </div>
    );
}

Tachometer.propTypes = {
    children: PropTypes.element.isRequired
};


export default Tachometer;