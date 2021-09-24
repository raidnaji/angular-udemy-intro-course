import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
// The imports of  AccountsService and LoggingService are not needed if @Injectable is used in each service
// import { AccountsService } from './accounts.service';
// import { LoggingService } from './logging.services';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
