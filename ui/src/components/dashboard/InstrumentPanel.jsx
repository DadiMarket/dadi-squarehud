import Speedometer from "./Speedometer";
import WarnLights from "./WarnLights";
import Dashboard from "./Dashboard";
import Compass from "./Compass/Compass";
import FuelStat from "./FuelStat";


function InstrumentPanel() {

    return (
        <div className="flex">
            <div className="flex ">
                <Dashboard>
                    <div className="w-[80%]">
                        <Speedometer />
                    </div>
                    <div className="flex flex-col justify-center w-[40%]">
                        <Compass />
                        <FuelStat />
                    </div>
                </Dashboard>
            </div>
            <div className="flex items-center ml-[-55px]">
                <WarnLights />
            </div>
        </div>
    );
}


export default InstrumentPanel;