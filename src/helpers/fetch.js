const baseURL = process.env.REACT_APP_API;

const fetchSinToken = ( endpoint, data, method = 'GET' ) => {
    const url = `${baseURL}/${endpoint}`;
    if ( method === 'GET' ){
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}
<<<<<<< HEAD
const visualizar = ( endpoint, data, method = 'GET' ) => {
    const url = `${baseURL}/${endpoint}`;
    if ( method === 'GET' ){
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}
const consulta =(endpoint)=>{
    const url = `${baseURL}/${endpoint}`;
    return fetch( url);
=======
>>>>>>> fc758a5dacc7485a8daddc37557e17b9033966b8

const getUser = ( endpoint, data ) => {
    // const url = 'http://localhost:3030/api/user/getUser?id=1753788890';
    const url = `${baseURL}/${endpoint}${data}`
    return fetch( url ); 
}



const fetchConToken = ( endpoint, data, method = 'GET' ) => {
    const url = `${baseURL}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    if ( method === 'GET' ){
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        } );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }
}

export {
    fetchConToken,
    fetchSinToken,
<<<<<<< HEAD
    consulta,
    visualizar
=======
    getUser
>>>>>>> fc758a5dacc7485a8daddc37557e17b9033966b8
}