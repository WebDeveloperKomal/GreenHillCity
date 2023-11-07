import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSixComponent } from './components/home-six/home-six.component';


const routes: Routes = [
    {path: '', component: HomeSixComponent},
    {path: 'home', component: HomeSixComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }