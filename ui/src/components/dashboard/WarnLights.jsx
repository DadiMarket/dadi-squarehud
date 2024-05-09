import { useState, useContext, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Context } from '../../services/Memory';
import BeltIcon from '../icons/Belt';
import EngineIcon from '../icons/Enginee';
import FuelIcon from '../icons/Fuel';
import LightsIcon from '../icons/Lights';


const useIntermitate = (initialState, interval) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setState(prevState => !prevState);
        }, interval);

        return () => clearInterval(intervalId);
    }, [interval]);

    return state;
};

function WarnLights() {
    const { state } = useContext(Context);
    const vehicleprops = state.objects.vehicle;

    const { lights, seatBelt, hasSeatbelt, fuel, engine, speedValue } = vehicleprops;
    const seatbeltAlarmMinimumSpeed = 40; // Definir el límite de velocidad para activar la alarma
    const seatbeltAlarmVolume = 0.5; // Definir el volumen de la alarma del cinturón de seguridad

    const [seatbeltAlarmPlaying, setSeatbeltAlarmPlaying] = useState(false);

    useEffect(() => {
        if (hasSeatbelt) {
            if (!seatBelt && speedValue >= seatbeltAlarmMinimumSpeed) {
                // Activa la alarma si el cinturón de seguridad no está abrochado y la velocidad supera el límite
                setSeatbeltAlarmPlaying(true);
            } else {
                // Detiene la alarma si el cinturón de seguridad está abrochado o la velocidad está por debajo del límite
                setSeatbeltAlarmPlaying(false);
            }
        }
    }, [seatBelt, speedValue, hasSeatbelt]);

    useEffect(() => {
        if (seatbeltAlarmPlaying) {
            const seatbeltAlarmAudio = new Audio("sounds/seatbelt-alarm.mp3");
            seatbeltAlarmAudio.volume = seatbeltAlarmVolume; // Definir el volumen de la alarma del cinturón de seguridad
            seatbeltAlarmAudio.play();

            // Detener la alarma después de que termine de sonar
            seatbeltAlarmAudio.onended = () => {
                setSeatbeltAlarmPlaying(false);
            };

            return () => {
                // Limpiar el audio cuando el componente se desmonte o cambie
                seatbeltAlarmAudio.pause();
                seatbeltAlarmAudio.src = "";
            };
        }
    }, [seatbeltAlarmPlaying]);

    const damageColor = () => {
        if (engine === 2) return '#FFA800';
        if (engine === 3) return '#FF0000';
    }
    const fuelColor = () => {
        if (fuel <= 30 && fuel > 15) return '#FFA800';
        if (fuel <= 15) return '#FF0000';
    }
    const lightColor = () => {
        if (lights.lightsOn && !lights.highBeams) return '#00DC00';
        if (lights.highBeams) return '#00EEFF';
    }

    const intermitateSeatbelt = useIntermitate(seatBelt, 500);

    const showSeatbelt = useSpring({
        opacity: hasSeatbelt && !seatBelt ? (intermitateSeatbelt ? 1 : 0.15) : 0,
    });
    const showEngine = useSpring({
        opacity: engine >= 2 ? 1 : 0,
    });
    const showFuel = useSpring({
        opacity: fuel <= 30 ? 1 : 0,
    });
    const showLights = useSpring({
        opacity: lights.lightsOn === 1 || lights.highBeams === 1 ? 1 : 0,
    });

    return (
        <div className='flex flex-col justify-around items-center w-[14.2rem] my-[-60px]'>
            <animated.div style={showSeatbelt}><BeltIcon /> </animated.div>
            <animated.div style={showEngine}><EngineIcon className='transition-colors ease-in-out' currentColor={damageColor()} /></animated.div>
            <animated.div style={showFuel}><FuelIcon className='transition-colors ease-in-out' currentColor={fuelColor()} /></animated.div>
            <animated.div style={showLights}><LightsIcon currentColor={lightColor()} /></animated.div>
        </div>
    );
}

export default WarnLights;
