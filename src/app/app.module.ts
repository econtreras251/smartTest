import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { LineaComponent } from './linea/linea.component';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKFEL6pzRi-KTCPfrpSrOi1JwzcJPJrtg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
