import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='pedidos';
  btn: boolean = true;
  o_codigo: number=0;
  o_nombre: string="";
  o_estado: string="";
  o_envio: string="";
  o_precio: number=0;

  pedido = {
    Codigo: 2002,
    Nombre: "Juan",
    Estado: "Entregado",
    Envio: "via delivery",
    Precio: 87
  }

  pedidos: any[] = [
    {
      Codigo: 2002,
      Nombre: "Juan",
      Estado: "Entregado",
      Envio: "via delivery",
      Precio: 87
    },
    {
      Codigo: 2003,
      Nombre: "Alex",
      Estado: "Sin Entregar",
      Envio: "via delivery",
      Precio: 40
    },
    {
      Codigo: 2004,
      Nombre: "Fernanda",
      Estado: "Sin Entregar",
      Envio: "Entrega en local",
      Precio: 52
    }
  ]

  agregarpedido(): void {
    const nuevopedido = {
      Codigo: this.o_codigo,
      Nombre: this.o_nombre,
      Estado: this.o_estado,
      Envio: this.o_envio,
      Precio: this.o_precio
    };
    this.pedidos.push(nuevopedido)
    this.o_codigo= 0;
    this.o_nombre= "";
    this.o_estado= "";
    this.o_envio= "";
    this.o_precio= 0
  }

  eliminarpedido(posicion: number): void{
    this.pedidos.splice(posicion,1);
  }
}