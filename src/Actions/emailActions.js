import axios from 'axios'

export const GET_EMAIL='GET_EMAIL'
export const ONE_EMAIL='ONE_EMAIL'
export const REMOVE='REMOVE'

export const removeEmail=(e)=>{
    return{
        type:REMOVE
        
    }
}

const getEmail=(email)=>{
    return{
        type:GET_EMAIL,
        payload:email
    }
}
export const startGetAllEmails=()=>{
    return(dispatch)=>{
        (
            async()=>{
                try {
                    const response=await axios.get('https://flipkart-email-mock.now.sh/')
                    dispatch(getEmail(response.data.list))
                } catch (error) {
                    alert(error)
                }
            }
        )()
    }
}

const getOneEmail=(email)=>{
    return{
        type:ONE_EMAIL,
        payload:email
    }
}
export const startGetEmail=(id)=>{
    return(dispatch)=>{
        (
            async()=>{
                try {
                   const response=await axios.get(`https://flipkart-email-mock.now.sh/?id=${id}`) 
                    dispatch(getOneEmail(response.data))
                } catch (error) {
                    alert(error)
                }
            }
        )()
    }
}