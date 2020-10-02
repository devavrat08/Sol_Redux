const { combineReducers } = require("redux");

const songs=()=>{
    return [{
        title:'Blinding monkey',
        duration:'2:30'
        },
        
        {
        title:'Dance Monkey',
        duration:'3:25'
        }  
    
    ]
}


const songSelected=(songSelected=null,action)=>{
    switch(action.type){
        case 'SELECTED_SONG':
            return action.payload;
            default:
                return songSelected
    }

}

const reducers=combineReducers({songs:songs,selectedSong:songSelected})

export default reducers;