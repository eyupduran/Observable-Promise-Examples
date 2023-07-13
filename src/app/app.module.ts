import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SenderComponent } from './component/sender/sender.component';
import { ReceiverComponent } from './component/receiver/receiver.component';
import { PromiseTestComponent } from './component/promise-test/promise-test.component';


@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    ReceiverComponent,
    PromiseTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
