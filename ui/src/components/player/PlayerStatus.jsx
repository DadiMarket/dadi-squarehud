import { useContext, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Context } from '../../services/Memory';
import SquareStatus from './SquareStatus';
import HearthIcon from '../icons/Hearth';
import ArmorIcon from '../icons/Armor';
import HungerIcon from '../icons/Food';
import ThirstIcon from '../icons/Water';
import StamineIcon from '../icons/Stamine';


export default function PlayerStatus() {

    const { state } = useContext(Context);
    const isInVehicle = state.objects.hud.carHud;
    const playerstats = state.objects.player;
    const [localArmor, setLocalArmor] = useState(0);
    const [localPlayerStats, setlocalPlayerStats] = useState(0);	

    useEffect(() => {
        setLocalArmor(localPlayerStats.armor);
    }, [localPlayerStats.armor]);

    useEffect(() => {
        setlocalPlayerStats(playerstats);
    }, [playerstats]);

    function showArmorStatus(localArmor) {
        if (
            localArmor === 0 ||
            localArmor < 0 ||
            localArmor === null ||
            localArmor === undefined
        ) {
            return false;
        } else {
            return true;
        }
    }

    const PLAYER_DATA = [
        {
            progress: localPlayerStats.health,
            icon: <HearthIcon />,
        },
        {
            progress: localPlayerStats.armor,
            icon: <ArmorIcon />,
            show: showArmorStatus(localArmor),
        },
        {
            progress: localPlayerStats.hunger,
            icon: <HungerIcon />,
        },
        {
            progress: localPlayerStats.thirst,
            icon: <ThirstIcon />,
        },
        {
            progress: localPlayerStats.stamina,
            icon: <StamineIcon />,
        },
    ];

    const playerStadistics = () => (
        <>
            {PLAYER_DATA.map((data, index) => (
                data.show === false ? null :
                    <div key={`PLZ:PS_${index}`} className='ml-[-23px] mt-3'>
                        <SquareStatus progress={data.progress}>
                            {data.icon}
                        </SquareStatus>
                    </div>
            ))}
        </>
    );

    const inVehicleSpring = useSpring({
        opacity: isInVehicle ? 1 : 0,
        transform: isInVehicle ? 'translateY(-180px)' : 'translateY(-20px)',
    });
    const outVehicleSpring = useSpring({
        opacity: !isInVehicle ? 1 : 0,
        transform: !isInVehicle ? 'translateY(0)' : 'translateY(20px)',
    });

    const DisplayPlayerStatus = () => {
        if (isInVehicle) {
            return (
                <animated.div className="flex ml-6 justtify-start my-14" style={inVehicleSpring}>
                    {playerStadistics()}
                </animated.div>
            );
        } else {
            return (
                <animated.div className="flex ml-6 justify-start my-14" style={outVehicleSpring}>
                    {playerStadistics()}
                </animated.div>
            );
        }
    }

    return (
        <div className='ml-6'>
            <DisplayPlayerStatus />
        </div>
    );
}