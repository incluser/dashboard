import Counter from "./Counter"
import "./style.css"
const Count = () => {
    return (
        <div className="counter-container">
            <Counter numb={105} title="Trillion ₸ " secondText="issued through LGX securities" />
            <Counter numb={5175} title="labelled bonds" />
            <Counter numb={468} title="securities" />
        </div>
    )
}

export default Count