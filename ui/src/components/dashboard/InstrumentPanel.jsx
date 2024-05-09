import Speedometer from "./Speedometer";
import WarnLights from "./WarnLights";


function InstrumentPanel() {

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center">
                    <WarnLights />
            </div>
            <div className="flex">
                <div className="flex justify-center items-center w-full">
                    <Speedometer />
                </div>
            </div>
        </div>
    );
}


export default InstrumentPanel;