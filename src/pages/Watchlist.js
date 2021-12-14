import "./Watchlist.css"
import { useEffect, useState } from "react"
import jsonRequests from "../JsonRequestData"
import Spot from "../components/spot/Spot"
import UserRepository from "../components/UserRepository"
import useSimpleAuth from "../useSimpleAuth"

function Watchlist() {
    const { getCurrentUser } = useSimpleAuth()
    const [isUser, setAuth] = useState(false)
    // useEffect(() => {
    //     setAuth(getCurrentUser().user)
    //         (UserRepository.get)
    // }, [])

    return (
        <div className='watch'>
            <h1>Your watchlist</h1>
            <Spot sectionTitle="Your added Movies" fetchURL={jsonRequests.remoteURL} />
        </div>
    )

}

export default Watchlist