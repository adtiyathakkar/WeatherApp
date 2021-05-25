export const initalState = {
    weatherData:[]//single weather data store like temprature langitude long... etc
}

export const reducer = (state = initialState,action)=>{
     console.log("-----------",state)
    switch(action.type){
            case "SET_WEATHER_DATA":
        console.log(action.payload)
                return Object.assign({}, state, {
                    weatherData: action.payload,
                });
        default:
            return state
   }
}