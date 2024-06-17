import { useEffect, useState, useContext } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Context } from '../../services/Memory';
import Square from "../shared/Square";
import MicroIcon from "../icons/Microphone";

function PlayerInfo() {
    const { state } = useContext(Context);
    const playerProps = state.objects.player;
    const [playerInfo, setPlayerInfo] = useState({});

    useEffect(() => {
        setPlayerInfo(playerProps);
    }, [playerProps]);

    const [showElement, setShowElement] = useState(true);

    useEffect(() => {
        setShowElement(true);

        const timer = setTimeout(() => {
            setShowElement(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, [playerInfo.voicerange]);

    const voiceRangeSpring = useSpring({
        opacity: showElement ? 1 : 0,
        transform: showElement ? 'translateY(0)' : 'translateY(-24px)',
    });

    return (
        <>
            <div className='flex flex-col gap-2'>
                <animated.div className='w-full flex justify-end items-start px-[4rem] mt-3' style={voiceRangeSpring}>
                    <h2 className='text-white font-bold font-quicksand text-start text-sm'>{playerInfo.voicerange}</h2>
                </animated.div>

                <div className='flex justify-end align-bottom mb-14'>
                    <div>
                        <Square>
                            <div className='flex items-center justify-center'>
                                <span className="text-black font-bold font-quicksand text-m">{playerInfo.id}</span>
                            </div>
                        </Square>
                    </div>

                    <div className='ml-[-32px]'>
                        <Square>
                            <div>
                                <MicroIcon />
                            </div>
                        </Square>
                    </div>
                </div>
            </div>

        </>
    );
}

export default PlayerInfo;
