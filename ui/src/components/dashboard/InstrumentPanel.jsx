import Speedometer from "./Speedometer";
import WarnLights from "./WarnLights";


function InstrumentPanel() {

    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-[225px]">
                    <WarnLights />
            </div>
            <div className="flex w-[225px]">
                <div className="flex justify-center  items-center w-full">
                    <Speedometer />
                </div>
            </div>
        </div>
    );
}


export default InstrumentPanel;