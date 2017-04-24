import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  shownav = false;
  constructor(private router:Router,private authservice:AuthService){}
  // shownav():boolean{
  //    if(this.authservice.showMenu()){
  //      return true;
  //   }
  //    else{
  //    return false;
  //    }
    
  // }
  navfaq(){
    this.router.navigate(['faq']);
  }
}
