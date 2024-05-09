import CountUp from "react-countup";
import "./style.css"
type CounterProps = {
    numb: number;
    title: string;
    secondText?: string;
}

const Counter: React.FC<CounterProps> = ({ numb, title, secondText }) => {
    return (
        <div className="number">
            <CountUp style={{ fontWeight: '700', fontFamily: "JetBrains Mono" }} duration={6} className="counter" end={numb} />
            <div>
                <span className="counter-title">{title}</span>
                <span className="counter-title">{secondText}</span>
            </div>
        </div>
    );
}

export default Counter