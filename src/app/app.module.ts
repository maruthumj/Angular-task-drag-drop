import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponentComponent } from './pop-up-component/pop-up-component.component';
import { FormsModule } from '@angular/forms';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PopUpComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
