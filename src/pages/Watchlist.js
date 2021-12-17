import "./Watchlist.css"

import jsonRequests from "../JsonRequestData"
import Spot from "../components/spot/Spot"


function Watchlist() {


    return (
        <div className='watch'>
            <h1>Your watchlist</h1>
            <Spot sectionTitle="Your added Movies" fetchURL={jsonRequests.remoteURL} />
        </div>
    )

}

export default Watchlist