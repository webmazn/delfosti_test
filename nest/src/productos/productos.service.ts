import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {

  private productos: Producto[] = [
    { id:1, name:'Samsung', category:'Móviles', slug:'celular'},
    { id:2, name:'LG', category:'Televisores', slug:'tv'},
    { id:3, name:'Motorola', category:'Móviles', slug:'celular'},
    { id:4, name:'Xiomi', category:'Televisores', slug:'tv'},
    { id:5, name:'IPhone', category:'Móviles', slug:'celular'},
  ];

  create(createProductoDto: CreateProductoDto): Producto {
    // console.log(`${createProductoDto}`);
    // console.log({createProductoDto});
    const producto = new Producto();
    producto.id = Math.max( ...this.productos.map( producto => producto.id),0 ) + 1;
    producto.name = createProductoDto.name
    producto.category = createProductoDto.category
    producto.slug = createProductoDto.slug
    this.productos.push(producto);
    // return 'This action adds a new producto';
    return producto;
  }

  findAll(): Producto[] {
    // return `This action returns all productos`;
    return this.productos;
  }

  findOne(id: number): Producto {
    const producto = this.productos.find( producto => producto.id === id);
    if ( !producto ) throw new NotFoundException(`Producto con id: ${id} no encontrado`)
    // return `This action returns a #${id} producto`;
    return producto;
  }

  update(id: number, updateProductoDto: UpdateProductoDto): Producto {
    const { name, category, slug } = updateProductoDto
    const producto = this.findOne( id );
    if( name ) producto.name = name
    if( category ) producto.category = category
    if( slug) producto.slug = slug

    this.productos = this.productos.map( dbProductos => {
      if( dbProductos.id === id) return producto;
      return dbProductos;
    })
    // return `This action updates a #${id} producto`;
    return producto;
  }

  remove(id: number) {
    this.findOne( id );
    this.productos = this.productos.filter( producto => producto.id !== id)
    // return `This action removes a #${id} producto`;
  }
}
