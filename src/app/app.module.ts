import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgTestComponent } from './ag-test/ag-test.component';
import { PrimeTableComponent } from './prime-table/prime-table.component';
@NgModule({
  declarations: [
    AppComponent,
    AgTestComponent,
    PrimeTableComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
