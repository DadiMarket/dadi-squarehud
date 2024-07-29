import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { fetchNui } from "./fetchNui";


const initialState = {
    objects: {
        hud: { // HUD status
            showHud: false,
            carHud: false,
        },
        player: { // Player status
            health: 0,
            armor: 0,
            stamina: 0,
            hunger: 0,
            thirst: 0,
            talking: false,
            voicerange: 'Normal',
            id: 0,
        },
        vehicle: { // Vehicle status
            speedUnit: 'mph',
            speedValue: 0,
            lights: {
                lightsOn: 1,
                highBeams: 0,
            },
            seatBelt: true,
            hasSeatbelt: true,
            fuel: 0,
            engine: 0,
        },
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_HUD_STATUS':
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
        case 'UPDATE_PLAYER_STATUS':
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
        case 'UPDATE_VEHICLE_STATUS':
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
                            voicerange: message.voicerange // Whisper, Normal, Shouting
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
        return () => window.removeEventListener('message', handleMessage);
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