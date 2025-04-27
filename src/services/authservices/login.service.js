import { httpClient } from "../../utils";

const login = async (params) => await httpClient.post('auth/login',params)

export {
    login
}