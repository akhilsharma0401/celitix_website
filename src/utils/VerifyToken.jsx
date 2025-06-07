import axios from "axios";

export const verifyToken = async (token) => {
    // const url = import.meta.env.VITE_URL
    const url = "https://celitix.com:3001";

    const res = await axios.get(`${url}/verify-token/${token}`)
    return res

}