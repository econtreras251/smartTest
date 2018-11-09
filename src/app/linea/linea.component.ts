import { Component } from '@angular/core';
import { DatosService } from '../services/datos.service'


@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html'
})
export class LineaComponent{

  constructor( private getService:DatosService,
                ){
    setTimeout(()=>{
      this.vehiculo = this.getService.vehiculo;
      this.full = this.timestamp.length;
      this.upRegister();
    },3000);
  }

  public smartData:Array<any> = [
    { data: this.getService.RPMS , label: 'RPM' },
    { data: this.getService.distancie, label: 'Distancie' },
    { data: this.getService.fuel, label: 'Fuel' },
    { data: this.getService.total_fuel, label: 'Total fuel' },
    { data: this.getService.relanti_hours, label: 'Relanti hours' }
  ];



  public timestamp:Array<any> = this.getService.timestamp;

  public vehiculo:number;

  public dataViewTimestamp:Array<any> = [];
  public dataViewSmartdata:Array<any> = [
    {},
    {},
    {},
    {},
    {}
  ];

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [];

 public lineChartLegend:boolean = true;
 public lineChartType:string = 'line';


 //pagination
 private hasta:number = 20;
 private desde:number = 0;
 private full:number;
 private load:boolean = false;

 upRegister(){

   this.dataViewTimestamp = this.timestamp.slice( this.desde , this.hasta );
   this.dataViewSmartdata[0] = this.smartData[0].data.slice(this.desde , this.hasta );
   this.dataViewSmartdata[1] = this.smartData[1].data.slice(this.desde , this.hasta );
   this.dataViewSmartdata[2] = this.smartData[2].data.slice(this.desde , this.hasta );
   this.dataViewSmartdata[3] = this.smartData[3].data.slice(this.desde , this.hasta );
   this.dataViewSmartdata[4] = this.smartData[4].data.slice(this.desde , this.hasta );

   this.load = true;

 }



 cambiarDesde( valor: number ) {

   let desde = this.desde + valor;

   if ( desde >= this.full ) {
     return;
   }

   if ( desde < 0 ) {
     return;
   }


   this.desde += valor;
   this.hasta += valor;
   this.upRegister();

 }




}
