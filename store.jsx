import {createSlice,configureStore} from "@reduxjs/toolkit"
const savedUsers=JSON.parse(localStorage.getItem("cardss")) || [];
const savedlogins=JSON.parse(localStorage.getItem("logins")) || [];
const initialState={
    user:savedUsers,
    edit:null,
    nextid:savedUsers.length+1,
    logins:savedlogins,
    log:false,
    
};
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        submit:(state,action)=>{
            state.user.push({
                id:Date.now(),
                ...action.payload,
                
            });
        },
        edit:(state,action)=>{
            state.edit=action.payload;
        },
        update:(state,action)=>{
           const index=state.user.findIndex(
            item=>item.id===action.payload.id
           );
           if(index!==-1){
            state.user[index]=action.payload;
        }
            state.edit=null;
        },
        det:(state,action)=>{
           state.user=state.user.filter(
            item=>item.id!==action.payload
           )

        },
        login:(state,action)=>{
            state.logins.push(action.payload)
            state.log=true  
        },
        make:(state,action)=>{
            state.log=false
        }
    }
})
export const {submit,edit,update,det,login,make}=userSlice.actions;
const anotherin={
    selected:""
}
const templateSlice=createSlice({
    name:"template",
    initialState:anotherin,
    reducers:{
        addtemp:(state,action)=>{
            state.selected=action.payload
        },
        removetemp:(state,action)=>{
            state.selected=""
        }
    }
})
export const {addtemp,removetemp}=templateSlice.actions
const store=configureStore({
    reducer:{
        user:userSlice.reducer,
        template:templateSlice.reducer,
    }
})

export default store;