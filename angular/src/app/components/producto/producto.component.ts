import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.sass']
})
export class ProductoComponent implements OnInit {

  productos: any = [];
  filterProducto: any = '';
  productosSuscritos: Subscription = new Subscription;

  constructor(private productosService: ProductosService) {

  }

  ngOnInit(): void {
    this.productosSuscritos = this.productosService.listar().subscribe(
      res => {
        console.log(res);
        this.productos = res;
      },
      err => console.error(err)
    );
  }

}
