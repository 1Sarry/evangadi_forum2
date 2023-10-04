import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from 'react-router-dom'
import Cookie from 'js-cookie'
import { axiosInstance, endPoint } from "../../endPoint/api";


const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: true,
}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                isLoading: false
            }
    }
} 
    export const AuthContext = createContext()
    export const AuthProvider = ({ children }) => {
        const navigate = useNavigate()
        const [state, dispatch] = useReducer(reducer, initialState)

        useEffect(() => {
            const checkAuthentication = async () => {
                const token = Cookie.get("accessToken")
                if (token) {
                    try {
                        const response = await axiosInstance.get(endPoint.ME, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        })
                        if (response.status === 200) {
                            dispatch({
                                type: "SET_USER",
                                payload: response.data?.user,
                            })
                        }
                    } catch (error) {

                    }
                }
            }
        }, [])
    };