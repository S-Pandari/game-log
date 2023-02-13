import axios from 'axios'

export function GetData(url : string, path : string, key : string, setData : Function) {

    axios.get(`${url}/${path}${key === '' ? '' : '?key=' + key}`)
        .then(function (response : any) {
        setData(response);
    })
        .catch(function (error : any) {
        // handle error
        console.log(error);
    });

}