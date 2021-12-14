import jsonRequests from "../JsonRequestData"
import { fetchIt } from "./Fetch"

export default {
    async get(id) {
        return await fetchIt(`${jsonRequests.remoteURL}/users/${id}`)
    },
    async getAllEmployees() {
        return await fetchIt(`${jsonRequests.remoteURL}/users?user=true`)
    }
}