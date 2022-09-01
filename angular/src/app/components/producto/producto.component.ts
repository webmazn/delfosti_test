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
  productosSuscritos: Subscription = new Subscription;
  filterProducto: any = '';

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

  ngOnDestroy(){
    this.productosSuscritos.unsubscribe();
  }

}
