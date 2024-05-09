import { useState } from "react"
import { ScopeOfData } from "../../../static"
import Donut from "../../../widgets/Pie"
import ToggleSwitch from "../../../widgets/ToggleSwitch"
import "./style.css"

const Scope = () => {
    const [alignment, setAlignment] = useState<'bonds' | 'volume'>('bonds');
    return (
        <div className="scope-container">
            <div className="scope-container-actions">
                <span className="global-heading">Scope of Data</span>
                <ToggleSwitch alignment={alignment} setAlignment={setAlignment} />
            </div>
            <div className="scope-container-chart">
                <div className="scope-container-bonds">
                    <ul>
                        {
                            ScopeOfData.map((data) => {
                                return <li key={data.name} className={data.className}>
                                    <span>{data.name === "SLB" ? "Sustainable-Linked" : data.name}</span>
                                    <span>{alignment === 'bonds' ? data.bonds : data.volumeString}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <Donut alignment={alignment} />
            </div>
        </div>
    )
}

export default Scope