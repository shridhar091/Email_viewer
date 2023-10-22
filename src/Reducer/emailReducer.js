import { GET_EMAIL, ONE_EMAIL, REMOVE } from "../Actions/emailActions"


const intialEmailState={
    data:[],
    oneData:[],
    error:{}
}

const emailReducer=(state=intialEmailState,action)=>{
    switch(action.type){
        case GET_EMAIL:{
            return{...state,data:action.payload}
        }
        case ONE_EMAIL:{
            return{...state,oneData:action.payload}
        }
        case REMOVE:{
            return {...state,oneData:''}
        }
        default:{
            return{...state}
        }
    }
}

export default emailReducer