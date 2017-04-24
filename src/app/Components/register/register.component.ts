import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthService';

class details {
    _id:number;
    empid: number;
    empname: string;
    title: string;
    competency: string;
    position: string;
}

@Component({
    selector:'register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']
})

export class RegisterComponent implements OnInit{
    registerForm:FormGroup;
    datas: details[];
    saveShow:boolean=true;
    updateShow:boolean=false;
    constructor(private router:Router,public registerBulider:FormBuilder, private authService:AuthService)
    {
        this.authService.getTable().subscribe(datas => {
                    this.datas = datas;
        });
    }

    ngOnInit(){
        this.registerForm=this.registerBulider.group({
            _id:[''],
            empid:['',[Validators.required,Validators.pattern('^[5][0-9]{5}$')]],
            empname:['',[Validators.required,Validators.pattern('^[a-zA-Z_ ]*$')]],
            title:['',Validators.required],
            position:['',Validators.required],
            competency:['',Validators.required],
            contact:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
            blood:['',[Validators.required,Validators.pattern('^(A|B|AB|O)[+|-]$')]],
            address:['',Validators.required]

        });
    }
    submit(sub: details){
        this.authService.registerEmployee(sub).subscribe(data => {
            if(data.success)
            {
                console.log("SUCCESS");
                this.datas.push(sub);
                
            }
            else{
                console.log("Error");
            }
        });
        this.registerForm.reset();
        
    }

    update(sub:details, id){
        console.log(id);
        this.authService.updateEmployee(sub,id).subscribe(data => {
            
                console.log(sub);
                console.log("Updated");
                this.datas.push(sub);
            
        })
        this.registerForm.reset();
    }

     edit = function(index){
         this.saveShow=false;
    this.updateShow=true;
           for(let i=0;i<this.datas.length;i++){
               if(i==index){
                    console.log(this.datas[i]);
                    this.registerForm.setValue(this.datas[i]);
                    this.datas.splice(i,1);
                }
            }
     }
     delete(id){
          var datas = this.datas;
        
        this.authService.deleteEmployee(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < datas.length;i++){
                    if(datas[i]._id == id){
                        datas.splice(i, 1);
                    }
                }
            }
        });
    }

}
