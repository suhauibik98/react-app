import React, { createContext, useContext, useReducer } from "react";
import { CLICK_BUTTON_A } from "./actions";
import reducer from "./reducer";

const initialState = {
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isState, dispatch] = useReducer(reducer, initialState);

  const handelclick = () => {
    dispatch({ type: CLICK_BUTTON_A });

    // try {
    //   console.log(isState);
    // } catch {
    //   console.log("ba");
    // }
  };

  return (
    <AppContext.Provider value={{ ...isState, handelclick }}>
      {{ children }}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
// import reducer from "./reducers"
// import {axiosObj} from "../utils/axios"

// import {
//     LOGIN_START ,
//     LOGIN_SUCCESS ,
//     LOGIN_FAILED ,
//     LOGOUT_USER ,
//     SIGNUP_START ,
//     SIGNUP_SUCCESS ,
//     SIGNUP_FAILED ,
//     NEW_ANNOUNCEMENT_ADDED,
//     UPDATE_USER_START,
//     UPDATE_USER_SUCCESS,
//     UPDATE_USER_FAILED
// } from "./actions"

// const user = localStorage.getItem("user")

// const token = localStorage.getItem("token")

// const initialState = {
//     user : user ? JSON.parse(user) : null ,
//     token : token,
//     loading : false,
//     error :  null,
//     isAdmin : false,
//     isAnnouncing : false,
//     newAnnouncement : false
// }

// const AppContext = React.createContext()

// const AppProvider = ({children}) => {

//     const [state , dispatch] = useReducer(reducer , initialState)

//     const login = async ({username , password}) => {

//         dispatch({type : LOGIN_START})

//         try {

//             const respone = await axiosObj.post("/auth/signin" , {
//                 username,
//                 password
//             })

//             const {user , token , isAdmin , isAnnouncing} = respone.data

//             dispatch({type : LOGIN_SUCCESS , payload : {user , token , isAdmin , isAnnouncing}})

//             setUpLocalstorage({user , token})

//         } catch (error) {
//             dispatch({type : LOGIN_FAILED , payload : {msg : error.response.data.msg}})
//         }

//     }

//     const signUp = async ({username , email , password , cpassword}) => {

//         dispatch({type : SIGNUP_START})

//         try {

//             const response = await axiosObj.post("/auth/signup" , {
//                 username,
//                 email,
//                 password,
//                 cpassword
//             })

//             const {user} = response.data

//             dispatch({type : SIGNUP_SUCCESS , payload : {user}})

//         } catch (error) {
//             dispatch({type : SIGNUP_FAILED , payload : { msg : error.response.data.msg}})
//         }

//     }

//     const setUpLocalstorage = ({user , token}) => {

//         localStorage.setItem("user" , JSON.stringify(user))
//         localStorage.setItem("token" , token)

//     }

//     const removeLocalstorage = () => {
//         localStorage.removeItem("user")
//         localStorage.removeItem("token")
//     }

//     const logoutUser = () => {
//         dispatch({type : LOGOUT_USER})
//         removeLocalstorage()
//         window.location.reload()
//     }

//     const newAnnouncementAddedFun = () => {
//         dispatch({type : NEW_ANNOUNCEMENT_ADDED})
//     }

//     return(
//         <AppContext.Provider value={{...state , login , signUp , logoutUser , newAnnouncementAddedFun}}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// // custom hook to access any state context key
// const useAppContext = () => {
//     return useContext(AppContext)
// }

// export {AppProvider , initialState , useAppContext}
