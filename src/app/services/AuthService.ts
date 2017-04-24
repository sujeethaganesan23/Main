import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

export class validUser{
    username:string;
    password:string;
}

@Injectable()
export class AuthService{
    validusers:validUser[];
    valid=false;
    
    constructor(private http:Http){}
    // showMenu():boolean{
    //     return true;
    // }
    sub:any;

    registerEmployee(sub)
    {
    let headers = new Headers({ 'Content-Type': 'application/json' });

  let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/employees/register', sub, options)
    .map(res => res.json());
  }

  getTable()
  {
     let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:3000/employees/table', options)
    .map(res => res.json()); 
  }

  //DeleteEmployee
  deleteEmployee(id)
  {
     let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:3000/employees/table/'+id,options)
            .map(res => res.json()); 
  }

  //UpdateEmployee
  updateEmployee(sub,id)
  {
     let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:3000/employees/table/'+id, sub, options)
            .map(res => res.json());  
  }

    getUser(){
        this.http.get('../../app/assets/data/data.json').subscribe((res:Response)=>{
            this.validusers=res.json();
         });
    }

    validateUser(user,pass){
      
            for(let i=0;i<this.validusers.length;i++)
            {
                let uname=this.validusers[i].username
                let pname=this.validusers[i].password
             if(user===uname && pass===pname){
                this.valid=true;
              }
            }
            if(this.valid===true)
            return true;
            else
            return false;
       }
}
