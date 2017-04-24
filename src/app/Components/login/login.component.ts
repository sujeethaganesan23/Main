import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{

    userForm: FormGroup;

    constructor(private router:Router,private authService:AuthService,private userBuilder:FormBuilder){
    }
    ngOnInit(){
        this.authService.getUser();
        this.userForm = this.userBuilder.group({
            name: ['', Validators.required],
            pass: [null, Validators.required]
        })
    }
    
    login(){
         let username= this.userForm.value.name;
         let password= this.userForm.value.pass;
        //  let menu:boolean=true;
        if(this.authService.validateUser(username,password)){
            this.router.navigate(['register']);
            // this.authService.showMenu();
        }
        else{
             alert("incorrect credentials")
        }
    }
}