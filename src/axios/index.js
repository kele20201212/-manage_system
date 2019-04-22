import JsonP from 'jsonp';
export default class Axios{
    static jsonp(optios){
        return new Promise((resolve,reject) => {
            JsonP(optios.url,{
                param:'callback'
            },(err,response) => {
                //TODO
                console.log(err,response);
                if(response.status==='success'){
                    resolve(response);
                }else{
                    reject(response.message);
                }
            })
        })
    }
}