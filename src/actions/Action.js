
export const getUser = (users) => {
    return{
        type : 'GETVALUE',
        payload : users
    }
}

export const deleteA = (id) => {
    return{
        type: 'DELETE',
        payload : id
    }
}
export const addme = (data) => {
    return{
        type: 'ADDME',
        payload : data
    }
}

export const upDateMe = (uid_key) => {
    console.log(uid_key)

    return{
        type : 'UPDATE',
        payload : uid_key
    }
}

