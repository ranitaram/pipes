import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-cumunes',
  templateUrl: './no-cumunes.component.html',
  styleUrls: ['./no-cumunes.component.css']
})
export class NoCumunesComponent  {

  //i18nselect
  nombre: string = 'Natalia'
  genero: string = 'femenino';
 //masculino: boolean = true;
  clienteBorrado: string = '';

  //objeto
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }
  //i18nplural
  clientes: string[] = ['Maria','Fernando','Ramses','Natalia'];
  //con el signo # transfiere el valor que estamos recibiendo
  clientesMapa ={
    '=0': 'No hay ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Ramses';
    this.genero = 'masculino';
  }

  borrarCliente(){
    //cualquiera de los 2 funciona
    //this.clienteBorrado = this.clientes.shift() || '';
    this.clientes.pop();
  }

  //keyValue pipe
  persona = {
    nombre: 'Ramses',
    edad: 34,
    direccion: 'Nayarit, Mexico'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'batman',
      vuela: false
    },
    {
      nombre: 'spiderman',
      vuela: false
    },
    {
      nombre: 'ironman',
      vuela: true
    },
  ]

  //Async Pipe
  miObservable = interval(1000); //0,1,2,3,4,5

  valorPromesa = new Promise((resolve, reject)=> {
    setTimeout(()=>{
      resolve('Tenemos data de la promesa, ')
    }, 3500);
  });
  
}
