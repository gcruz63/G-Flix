import jsonRequests from "./JsonRequestData"


const useSimpleAuth = () => {

    const isAuthenticated = () => localStorage.getItem("gflix_user") !== null
        || sessionStorage.getItem("gflix_user") !== null

    const getCurrentUser = () => {
        const encoded = localStorage.getItem("gflix_user")
        const parsed = JSON.parse(encoded)
        return parsed
    }

    return { isAuthenticated, getCurrentUser }
}

export default useSimpleAuth
