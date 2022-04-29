import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

import { environment } from 'src/environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { ContactlistComponent } from './components/app1/components/contactlist/contactlist.component';
import { ContactItemComponent } from './components/app1/components/contact-item/contact-item.component';
import { ContatDetailsComponent } from './components/app1/components/contat-details/contat-details.component';
import { MessagelistComponent } from './components/app1/components/messagelist/messagelist.component';
import { MessageItemComponent } from './components/app1/components/message-item/message-item.component';
import { MessageDetailsComponent } from './components/app1/components/message-details/message-details.component';
import { MenuComponent } from './components/app/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactlistComponent,
    ContactItemComponent,
    ContatDetailsComponent,
    MessagelistComponent,
    MessageItemComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 0 }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
