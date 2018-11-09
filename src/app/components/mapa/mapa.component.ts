import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from '@agm/core/services/google-maps-types';
import { DatosService } from '../../services/datos.service'

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: []
})
export class MapaComponent implements OnInit {

  constructor( private datos:DatosService ) {
    setTimeout(()=>{
      this.getPoints();
      this.lat = this.pointGeo[0].lat;
      this.lng = this.pointGeo[0].lng;
      this.tiempo = true
    },2000)
  }

  ngOnInit() {
  }

  tiempo:boolean = false;

  dato:LatLngLiteral[] = [
    {
      lat: -31.144866943359375,
      lng: -55.810115814208984
    },
    {
      lat: -33.085018157958984,
      lng: -56.46126174926758
    }
  ];

  pointGeo:LatLngLiteral[] = [];

  dataFormatLat:LatLngLiteral[] = this.datos.magnitude;

  getPoints(){
    for (let i = 0; i < this.dataFormatLat.length; i = i+142) {
        this.datos.setDataArray(this.dataFormatLat[i], this.pointGeo);
    }
  }

  lat: number = 55;
  lng: number = 30;
  lat1: number = -33.085018157958984;
  lng1: number = -56.46126174926758;
  zoom:number = 12.56;




}
