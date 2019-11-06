import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SidenavService } from './services/sidenav.service'


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    HeaderComponent,
    LeftMenuComponent
  ],
  providers: [ SidenavService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
