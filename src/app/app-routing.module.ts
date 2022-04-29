import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactlistComponent } from './components/app1/components/contactlist/contactlist.component';
import { ContatDetailsComponent } from './components/app1/components/contat-details/contat-details.component';
import { MessagelistComponent } from './components/app1/components/messagelist/messagelist.component';
import { MessageDetailsComponent } from './components/app1/components/message-details/message-details.component';
import { MenuComponent } from './components/app/menu/menu.component';

const routes: Routes = [
  {path:'', redirectTo: 'menu', pathMatch:'full'},
  {path: 'menu', component: MenuComponent },
  {path: 'contacts', component: ContactlistComponent },
  {path: 'contact/:id', component: ContatDetailsComponent },
  {path: 'whatsapp', component: MessagelistComponent },
  {path: 'whatsapp/:userId', component: MessageDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
