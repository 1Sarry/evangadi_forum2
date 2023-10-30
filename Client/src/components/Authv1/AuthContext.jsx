import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { axiosInstance, endPoint } from "../../endPoint/api";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

// Token

  useEffect(() => {
    const checkAuthentication = async () => {
      //Cookie.set('accessToken', { sameSite: 'none' })
      const token = Cookies.get("accessToken" , { sameSite: 'none' });
      if (token) {
        try {
          const response = await axiosInstance.get(endPoint.ME, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          //console.log(response.data.Me.firstName)
          if (response.status === 201) {
            dispatch({
              type: "SET_USER",
              payload: response.data?.Me,
            });
          }
          
        } 
        
        catch (error) {
          console.log("Authentication Error", error);
          dispatch({
            type: "LOGOUT",
          });
          navigate("/");
        }
      } 
      
      else {
        dispatch({
          type: "LOGOUT",
        });
        navigate("/");
      }
    };
    
    checkAuthentication();
  }, [navigate]);

// LogOut

  const logout = () => {
    Cookie.remove("accessToken");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  
// LogIn

  const login = async (email, password) => {
    console.log(endPoint.LOGIN)
    try {
      const response = await axios.post(endPoint.LOGIN, {
        email, password
      });

      console.log(response)
      if (response.status === 201) {
        const { accessToken, user } = response.data;
        Cookie.set("accessToken", accessToken);

        dispatch({
          type: "SET_USER",
          payload: user,
        });
        toast.success('Successfully Logged In!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        navigate("/home");
      }
    } catch (error) {
      toast.error(error.response?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log(error);
    }
  };

  // Sign Up

  const signup  = async ( firstName, lastName, email, password) =>{
try {
  const response = await axiosInstance.post(endPoint.SIGNUP, {firstName, lastName, email, password})
  if(response.status === 201){
const {accessToken, user} =response.data
toast.success('Successfully Signed Up!', {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });
Cookies.set("accessToken", accessToken)
dispatch({type: "SET_USER", payload: user})
navigate("/home")
  }
} catch (error) {
  console.log(error)
  toast.error(error.response?.data?.message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
  }

  
  return (
    <AuthContext.Provider value={{ state, logout, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
