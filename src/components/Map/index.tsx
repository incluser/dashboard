import "./style.css"
import BasicWorldMap from 'react-basic-world-map'
interface ContinentItem {
  key: string;
  value: string;
}
const Map = () => {
  const continents: ContinentItem[] = [
    { key: "africa", value: "Africa: 134 Bonds" },
    { key: "south_america", value: "South America: 308 Bonds" },
    { key: "europe", value: "Europe: 5701 Bonds" },
    { key: "asia", value: "Asya: 5449 Bonds" },
    { key: "america", value: "North America: 1328 Bonds" },
    { key: "australia", value: "Australia: 191 Bonds" }
  ]
  return (
    <div className='map-container'>
      <span className="global-heading">Number of Issuers and Bonds per Country</span>
      <div className="map-itself">

        <BasicWorldMap
          primaryColor="green"
          secondaryColor="#29b12e"
          continents={continents}
        />
      </div>
    </div>
  )
}

export default Map