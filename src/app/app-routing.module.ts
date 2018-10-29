import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{InfoComponent} from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path:'Info', component: InfoComponent },
  {path:'Contact', component: ContactComponent},
  {path:'Home',component:HomeComponent},
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  {path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[InfoComponent,ContactComponent,HomeComponent,PageNotFoundComponent]