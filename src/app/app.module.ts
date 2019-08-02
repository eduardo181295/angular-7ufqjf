import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

//our components
import { userHomeComponent} from './user/Home/userHome.component';
import { userCapturaComponent} from './user/captura/captura.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, HelloComponent, userHomeComponent, userCapturaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
