import { Injectable } from '@angular/core';
import { HttpFactory } from '../Shared/service/httpservice/http';

@Injectable()
export class HomeService {
    constructor(private http: HttpFactory) {}

    getTypeList(){
        return this.http.post('inventorytypeList', {"list":5});
    }
    setTypeList(reqData){
        return this.http.post('addupdate', reqData);
    } 

    deleteInventoryType(prdId){
        return this.http.post('deleteinventoryType', {productId:prdId});
    }
    
    // regAuth(formData) {
    //     return this.http.post('authentication', {});
    // }
}