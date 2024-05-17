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
                    <div key={`DADI:PS_${index}`} className='ml-[-32px] mt-3'>
                        <SquareStatus progress={data.progress}>
                            {data.icon}
                        </SquareStatus>
                    </div>
            ))}
        </>
    );

    const inVehicleSpring = useSpring({
        opacity: isInVehicle ? 1 : 1,
        transform: isInVehicle ? 'translateX(300px)' : 'translateX(20px)',
    });

    const DisplayPlayerStatus = () => {
            return (
                <animated.div className="flex flex-col justtify-start my-[50px]" style={inVehicleSpring}>
                    {playerStadistics()}
                </animated.div>
            );
    }

    return (
        <div className='ml-6'>
            <DisplayPlayerStatus />
        </div>
    );
}