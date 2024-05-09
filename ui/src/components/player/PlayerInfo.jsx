import { useEffect, useState, useContext, memo } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Context } from '../../services/Memory';
import Square from "../shared/Square";
import MicroIcon from "../icons/Microphone";
import RadioIcon from "../icons/Radio";
import SmallSquare from '../shared/SmallSquare';

const SquareRange = memo(({ voicerange }) => {
    if (voicerange === 'Whisper') {
        return (
            <>
                <div className='mt-[-8px] ml-4'>
                    <SmallSquare />
                </div>
            </>
        );
    } else if (voicerange === 'Normal') {
        return (
            <>
                <div className='mt-[-8px] ml-4'>
                    <SmallSquare />
                </div>
                <div className='mt-[-8px] ml-4'>
                    <SmallSquare />
                </div>
            </>
        );
    } else if (voicerange === 'Shouting') {
        return (
            <>
                <div className='mt-[-8px] ml-4'>
                    <SmallSquare />
                </div>
                <div className='mt-[-8px] ml-4'>
                    <SmallSquare />
                </div>
                <div className='mt-[-8px] ml-4'>
                    <SmallSquare />
                </div>
            </>
        );
    }
});

function PlayerInfo() {
    const { state } = useContext(Context);
    const playerProps = state.objects.player;
    const [playerInfo, setPlayerInfo] = useState({});
    const [radioState, setRadioState] = useState(false);

    useEffect(() => {
        setPlayerInfo(playerProps);
    }, [playerProps]);

    useEffect(() => {
        setRadioState(playerInfo.radio || false);
    }, [playerInfo.radio]);

    const radioSpring = useSpring({
        opacity: radioState ? 1 : 0,
        transform: radioState ? 'translateY(0)' : 'translateY(-20px)',
    });

    const idSpring = useSpring({
        transform: radioState ? 'translateX(0px)' : 'translateX(44px)',
    });

    return (
        <>
            <div className='flex mr-20 justify-end align-bottom my-14'>
                <animated.div style={idSpring}>
                    <Square>
                        <div className='flex items-center justify-center'>
                            <span className="text-white font-bold font-inter text-m">{playerInfo.id}</span>
                        </div>
                    </Square>
                </animated.div>

                <animated.div className='ml-[-20px]' style={radioSpring}>
                    <Square>
                        <div>
                            <RadioIcon />
                        </div>
                    </Square>
                </animated.div>

                <div className='ml-[-20px]'>
                    <Square>
                        <div>
                            <MicroIcon />
                            <div className='flex flex-col gap-4 ml-8 mt-[-16px]'>
                                <SquareRange voicerange={playerInfo.voicerange} />
                            </div>
                        </div>
                    </Square>
                </div>
            </div>
        </>
    );
}

export default PlayerInfo;
