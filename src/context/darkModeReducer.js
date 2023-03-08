 const DarkModeReducer=(state,action)=>{
    switch(action.type){
       case "LIGHT":{
           return {
               DarkMode:false,
           };
       }
       case "DARK":{
           return{
               DarkMode:true,
           };
       }
       case "TOGGLE":{
           return{
               DarkMode: !state.darkMode,
           };
       }
       default:
           return state;
    }
}
export default DarkModeReducer;
