import { NgModule } from '@angular/core';
import { 
	RouterModule,
	Routes
} from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FaqComponent } from './Components/faq/faq.component';
const appRoutes:Routes=[
    { path: '', component: LoginComponent, pathMatch: 'full'},
    {path:'register',component:RegisterComponent},
	{path:'login',component:LoginComponent},
	{path:'faq',component:FaqComponent}
]

@NgModule({
	imports:[RouterModule.forRoot(appRoutes)],
	exports:[ RouterModule ]
		
})

export class AppRouteModule{ }