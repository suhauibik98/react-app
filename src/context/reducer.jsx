import  { CLICK_BUTTON_A,CLICK_BUTTON_B,CLICK_BUTTON_C,CLICK_BUTTON_D,GEMBA_BUTTON_UNLOCK } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLICK_BUTTON_A) {
    return { ...state, a: true };
  }
  if (action.type === CLICK_BUTTON_B) {
    return { ...state, b: true };
  }
  if (action.type === CLICK_BUTTON_C) {
    return { ...state, c: true };
  }
  if (action.type === CLICK_BUTTON_D) {
    return { ...state, d: true };
  }
  if (action.type === GEMBA_BUTTON_UNLOCK) {
    return { unLock: true };
  }
  throw new Error (`this action :  ${action.type}`)
};


 export default reducer

// import {
//     LOGIN_START ,
//     LOGIN_SUCCESS ,
//     LOGIN_FAILED ,
//     LOGOUT_USER ,
//     SIGNUP_START ,
//     SIGNUP_SUCCESS ,
//     SIGNUP_FAILED ,
//     NEW_ANNOUNCEMENT_ADDED,
//     UPDATE_USER_START ,
//     UPDATE_USER_SUCCESS ,
//     UPDATE_USER_FAILED
// } from "./actions"

// import { initialState } from "./appContext"

// const reducer = (state , action) => {
//     if(action.type === LOGIN_START){
//         return{
//             ...state,
//             loading : true
//         }
//     }
//     if(action.type === LOGIN_SUCCESS){
//         return{
//             ...state,
//             loading : false,
//             user : action.payload.user,
//             token : action.payload.token,
//             isAdmin : action.payload.isAdmin,
//             isAnnouncing : action.payload.isAnnouncing,
//         }
//     }
//     if(action.type === LOGIN_FAILED){
//         return{
//             ...state,
//             loading : false,
//             error : action.payload.msg
//         }
//     }
//     if(action.type === SIGNUP_START){
//         return{
//             ...state,
//             loading : true
//         }
//     }
//     if(action.type === SIGNUP_SUCCESS){
//         return{
//             ...state,
//             loading : false,
//             user : action.payload.user,
//         }
//     }
//     if(action.type === SIGNUP_FAILED){
//         return{
//             ...state,
//             loading : false,
//             error : action.payload.msg
//         }
//     }
//     if(action.type === LOGOUT_USER){
//         return{
//             ...initialState
//         }
//     }
//     if(action.type === NEW_ANNOUNCEMENT_ADDED){
//         return{
//             ...state,
//             newAnnouncement : true
//         }
//     }
//     if(action.type === UPDATE_USER_START){
//         return{
//             ...state,
//             loading : true
//         }
//     }
//     if(action.type === UPDATE_USER_SUCCESS){
//         return{
//             user : action.payload,
//             loading : false,
//             error : null
//         }
//     }
//     if(action.type === UPDATE_USER_FAILED){
//         return{
//             ...state,
//             loading : false,
//             error : action.payload.msg
//         }
//     }

//     throw new Error(`no such action :  ${action.type} `)

// }

// export default reducer
