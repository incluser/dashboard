import "./style.css"

import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
const Figures = () => {
    return (
        <div className="figures-container">
            <span className="global-heading">Aggregated Figures</span>
            <div className="figures-container-info">
                <div className="figures-container-data">
                    <ApartmentOutlinedIcon color="success" fontSize="large" />
                    <span className="text">
                        <span className="amount">3135</span>
                        <span className="label">Issuers</span>
                    </span>
                </div>
                <div className="figures-container-data">
                    <ApartmentOutlinedIcon color="success" fontSize="large" />
                    <span className="text">
                        <span className="amount">15006</span>
                        <span className="label">Bonds</span>
                    </span>
                </div>
                <div className="figures-container-data">
                    <ApartmentOutlinedIcon color="success" fontSize="large" />
                    <span className="text">
                        <span className="amount">4540.66 B. ₸</span>
                        <span className="label">Amount</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Figures