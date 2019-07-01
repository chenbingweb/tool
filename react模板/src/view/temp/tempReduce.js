let inistate={
    imgs:[],
    current:{
        id:'',
        src:''
    }
}

const TEMP = 'myapp/view/temp/temp';

export const Load = () => ( dispatch,getStore )=>{
    console.log(getStore())
    dispatch({
        type:TEMP,
        imgs:[{id:2,src:'23'}]
    })
}

export default function(state=inistate,action){
    let { type,imgs } = action;
    switch (type) {
        case TEMP:
            return {
                ...state,imgs
            }
            break;
        default :
            return state
    }
}