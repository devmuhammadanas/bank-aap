
const initialState = []

export const addValue = (state = initialState, action) => {

         switch (action.type) {
         case 'GETVALUE': return [...state,action.payload]
         case 'DELETE': return state.filter( (myid) => myid.id !== action.payload )
         case 'UPDATE':return state = action.payload
         default: return state
         
        }
}

export const addnew = (state = 0 , action) => {
        

        switch (action.type) {
                case 'ADDME': return state + action.payload
                                
                default: return state
        }
}



