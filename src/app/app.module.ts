import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy/zippy.component';
import { SwitchComponent } from './switch/switch.component';


@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
