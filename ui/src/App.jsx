import { useContext, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './App.css';
import Layout from './components/shared/Layout.jsx';
import InstrumentPanel from './components/dashboard/InstrumentPanel.jsx';
import PlayerStatus from './components/player/PlayerStatus.jsx';
import PlayerInfo from './components/player/PlayerInfo.jsx';
import { Context } from './services/Memory.jsx';


function App() {
    const { state } = useContext(Context);
    const hudStatus = state.objects.hud;

    const [statusVisible, setStatusVisible] = useState(null);
    const [panelVisible, setPanelVisible] = useState(null);

    useEffect(() => {
        setStatusVisible(hudStatus.showHud);
        setPanelVisible(hudStatus.carHud);
    }, [hudStatus]);

    const statusSpring = useSpring({
        opacity: statusVisible ? 1 : 0,
        transform: statusVisible ? 'translateY(0)' : 'translateY(-20px)',
    });
    const panelSpring = useSpring({
        opacity: panelVisible ? 1 : 0,
        transform: panelVisible ? 'translateY(0)' : 'translateY(-20px)',
    });

    return (
        <div className='app'>
            {statusVisible && (
                <animated.div style={statusSpring}>
                    <Layout>
                        <>
                            <div className='min-w-[33.3%] ml-8'>
                                <PlayerStatus />
                            </div>
                            <animated.div className='my-6 min-w-[33.3%] flex items-center justify-center' style={panelSpring}>
                                {panelVisible && <InstrumentPanel />}
                            </animated.div>
                            <animated.div className='min-w-[33.3%] mr-8' style={statusSpring}>
                                <PlayerInfo />
                            </animated.div>
                        </>
                    </Layout>
                </animated.div>
            )}
        </div>
    );
}


export default App;