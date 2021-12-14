import jsonRequests from "../JsonRequestData"
import { fetchIt } from "./Fetch"

export default {
    async assignGenre(rel) {
        return await fetchIt(`${jsonRequests.remoteURL}/genres`, "POST", JSON.stringify(rel))
    },
    async getGenres() {
        return await fetchIt(`${jsonRequests.remoteURL}/genres`)
    }
}