import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { fetchNui } from "./fetchNui";


const initialState = {
    objects: {
        hud: { // Estado del HUD
            showHud: true,
            carHud: false,
            customMenu: null,
        },
        player: { // Estado del jugador
            health: 50,
            armor: 50,
            stamina: 100,
            hunger: 100,
            thirst: 100,
            talking: false,
            voicerange: 'normal',
            radio: false,
            id: 2,
        },
        vehicle: { // Estado del vehículo
            speedUnit: 'mph',
            speedValue: 50,
            lights: {
                lightsOn: 1,
                highBeams: 0,
            },
            seatBelt: true,
            hasSeatbelt: true,
            fuel: 25,
            engine: 2,
            rpm: 0.3,
            compass: 'N', // N, NE, E, SE, S, SW, W, NW,
        },
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_HUD_STATUS': // Se actualiza el estado del HUD con la información recibida desde el servidor
            return {
                ...state,
                objects: {
                    ...state.objects,
                    hud: {
                        ...state.objects.hud,
                        ...action.payload,
                    },
                },
            };
        case 'UPDATE_PLAYER_STATUS': // Se actualiza el estado del jugador con la información recibida desde el servidor
            return {
                ...state,
                objects: {
                    ...state.objects,
                    player: {
                        ...state.objects.player,
                        ...action.payload,
                    },
                },
            };
        case 'UPDATE_VEHICLE_STATUS': // Se actualiza el estado del vehículo con la información recibida desde el servidor
            return {
                ...state,
                objects: {
                    ...state.objects,
                    vehicle: {
                        ...state.objects.vehicle,
                        ...action.payload,
                    },
                },
            };
        default:
            break;
    }
};

export const Context = createContext(null);

function Memory({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const handleMessage = (e) => {
            const message = e.data;

            switch (message.action) {
                case 'webDisplay':
                    dispatch({
                        type: 'UPDATE_HUD_STATUS',
                        payload: {
                            showHud: message.data.showHud,
                            carHud: message.data.carHud,
                            customMenu: message.data.customMenu,
                        },
                    })
                    dispatch({
                        type: 'UPDATE_VEHICLE_STATUS',
                        payload: {
                            seatBelt: message.data.seatBelt,
                            speedValue: message.data.speedValue,
                            compass: message.data.compass,
                            fuel: message.data.fuel,
                            rpm: message.data.rpm,

                        },
                    })
                    dispatch({
                        type: 'UPDATE_PLAYER_STATUS',
                        payload: {
                            radio: message.data.radio,
                            id: message.data.id,
                            health: message.data.health,
                            hunger: message.data.hunger,
                            armor: message.data.armor,
                            talking: message.data.talking,
                            voicerange: message.data.voicerange,
                        },
                    })
                    break;
                case 'displayHud':
                    fetchNui('loaded');
                    dispatch({
                        type: 'UPDATE_HUD_STATUS',
                        payload: {
                            showHud: message.display,
                        },
                    })
                    break;
                case 'showCarHud':
                    dispatch({
                        type: 'UPDATE_HUD_STATUS',
                        payload: {
                            carHud: true,
                        },
                    })
                    break;
                case 'hideCarHud':
                    dispatch({
                        type: 'UPDATE_HUD_STATUS',
                        payload: {
                            carHud: false,
                        },
                    })
                    break;
                case 'openCustomizationMenu':
                    dispatch({
                        type: 'UPDATE_HUD_STATUS',
                        payload: {
                            customMenu: true,
                        },
                    })
                    break;
                case 'closeCustomizationMenu':
                    dispatch({
                        type: 'UPDATE_HUD_STATUS',
                        payload: {
                            customMenu: false,
                        },
                    })
                    break;
                case 'updateCarHud':
                    dispatch({
                        type: 'UPDATE_VEHICLE_STATUS',
                        payload: {
                            speedUnit: message.unitofspeed, // mph or kmh
                            speedValue: message.speed, // 0 - 100
                            lights: {
                                lightsOn: message.lights.lightsOn, // 0 = off, 1 =  on
                                highBeams: message.lights.highbeams, // 0 = off, 1 = on
                            },
                            seatBelt: message.seatbelt, // true or false
                            hasSeatbelt: message.hasSeatbelt, // true or false
                            fuel: message.fuel, // 0 - 100
                            engine: message.engineDamageLevel, // 0 = good, 1 = low, 2 = high, 3 = critical
                            rpm: message.rpm, // 0 - 1
                            compass: message.direction, // N, NE, E, SE, S, SW, W, NW
                        },
                    })
                    break;
                case 'updateHud':
                    dispatch({
                        type: 'UPDATE_PLAYER_STATUS',
                        payload: {
                            health: message.health, // 0 - 100
                            armor: message.armor, // 0 - 100
                            stamina: message.stamina, // 0 - 100
                            hunger: message.hunger, // 0 - 100
                            thirst: message.thirst, // 0 - 100
                            talking: message.talking, // true or false
                            voicerange: message.voicerange, // Whisper, Normal, Shouting
                            radio: message.radio, // true or false
                        },
                    })
                    break;
                case 'playSound':
                    if (message.type === 'seatbelt') {
                        const sound = new Audio(message.status && 'sounds/fastening.mp3' || 'sounds/unfastening.mp3');
                        sound.volume = 0.2;
                        sound.play();
                    }
                    break;
                case 'load':
                    dispatch({
                        type: 'UPDATE_PLAYER_STATUS',
                        payload: {
                            id: message.id,
                        },
                    })
                    break;

                default:
                    break;
            }
        };

        window.addEventListener('message', handleMessage);
        window.addEventListener('hud-pzrp:display', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
            window.removeEventListener('hud-pzrp:display', handleMessage);
        }
    }, [state]);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}

Memory.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Memory;