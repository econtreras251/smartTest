import { Injectable } from '@angular/core';
import { LatLngLiteral } from '@agm/core/services/google-maps-types';
import { SmartwayhttpService } from './smartwayhttp.service'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor( private smartService:SmartwayhttpService ) {
    this.smartStream();


  }

  timestamp:any[] = [];

  parameters:any[] = [];

  RPMS:any[] = [];
  distancie:any[] = [];
  fuel:any[] = [];
  total_fuel:any[] = [];
  position:any[] = [];
  residual:any[] = [];
  relanti_hours:any[] = [];

  magnitude:LatLngLiteral[] = [];

  public data:any[] = [];
  public vehiculo;

  setDataArray( dato:any, arreglo:any[] ){
    arreglo.push( dato );
  }

  private smartStream(){
    this.smartService.getData$()
      .subscribe( smartData=>{

        this.data = smartData[0].data;
        this.vehiculo = smartData[0].vehicle_id;

        this.data.forEach( data =>{
          this.setDataArray( data.timestamp, this.timestamp );
          this.setDataArray( data.parameters, this.parameters );
          this.setDataArray( data.position, this.position );

        })

        this.position.forEach( dataIndivual =>{
          this.setDataArray( {'lat': dataIndivual.latitude, 'lng': dataIndivual.longitude}, this.magnitude );
        })

        this.setRpm();
        this.setDistance();
        this.setFuel();
        this.setTotalFuel();
        this.setRelantiHours();
      })
  }


  private setDistance(){
    let posicionValor = 1;
    for (let contador = 0; contador < this.parameters.length; contador++) {
      if(this.parameters[contador][posicionValor] !== undefined && this.parameters[contador][posicionValor].variable_key=='distance'){
          this.setDataArray(this.parameters[contador][posicionValor].value, this.distancie);
      } else {
        this.setDataArray( 0 , this.distancie);
        if (this.parameters[contador][posicionValor] !== undefined) {
            this.setDataArray( this.parameters[contador][posicionValor], this.residual )
        }
      }
    }
  }

  private setTotalFuel(){
    let posicionValor = 3;
    for (let contador = 0; contador < this.parameters.length; contador++) {
      if(this.parameters[contador][posicionValor] !== undefined && this.parameters[contador][posicionValor].variable_key=='total_fuel'){
          this.setDataArray(this.parameters[contador][posicionValor].value, this.total_fuel);
      } else {
        this.setDataArray( 0 , this.total_fuel);
        if (this.parameters[contador][posicionValor] !== undefined) {
            this.setDataArray( this.parameters[contador][posicionValor], this.residual )
        }
      }
    }
  }

  private setFuel(){
    let posicionValor = 2;
    for (let contador = 0; contador < this.parameters.length; contador++) {
      if(this.parameters[contador][posicionValor] !== undefined && this.parameters[contador][posicionValor].variable_key=='fuel'){
          this.setDataArray(this.parameters[contador][posicionValor].value, this.fuel);
      } else {
        this.setDataArray( 0 , this.fuel);
        if (this.parameters[contador][posicionValor] !== undefined) {
            this.setDataArray( this.parameters[contador][posicionValor], this.residual )
        }
      }
    }
  }


  private setRpm(){
    let posicionValor = 0;
    for (let contador = 0; contador < this.parameters.length; contador++) {
      if(this.parameters[contador][posicionValor] !== undefined && this.parameters[contador][posicionValor].variable_key=='rpm'){
          this.setDataArray(this.parameters[contador][posicionValor].value, this.RPMS);
      } else {
        this.setDataArray( 0 , this.RPMS);
        if (this.parameters[contador][posicionValor] !== undefined) {
            this.setDataArray( this.parameters[contador][posicionValor], this.residual )
        }
      }
    }
  }

  private setRelantiHours(){
    let posicionValor = 4;
    for (let contador = 0; contador < this.parameters.length; contador++) {
      if(this.parameters[contador][posicionValor] !== undefined && this.parameters[contador][posicionValor].variable_key=='ralenti_hours'){
          this.setDataArray(this.parameters[contador][posicionValor].value, this.relanti_hours);
      } else {
        this.setDataArray( 0 , this.relanti_hours);
        if (this.parameters[contador][posicionValor] !== undefined) {
            this.setDataArray( this.parameters[contador][posicionValor], this.residual )
        }
      }
    }
  }

}
