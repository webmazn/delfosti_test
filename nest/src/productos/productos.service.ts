import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductosService {

  private productos: Producto[] = [
    { id:1, name:'Samsung', category:'Móviles', slug:'celular', createdAt: new Date},
    { id:2, name:'LG', category:'Televisores', slug:'tv', createdAt: new Date},
    { id:3, name:'Motorola', category:'Móviles', slug:'celular', createdAt: new Date},
    { id:4, name:'Xiomi', category:'Televisores', slug:'tv', createdAt: new Date},
    { id:5, name:'IPhone', category:'Móviles', slug:'celular', createdAt: new Date},
  ];

  constructor(
    @InjectModel('Productos') private productosModel: Model<Producto>
  ){
  }

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const producto = new this.productosModel(createProductoDto);
    return await producto.save();
  }

  async findAll(): Promise<Producto[]> {
    const productos = await this.productosModel.find()
    return productos;
  }

  async findOne(id: string): Promise<Producto> {
    const producto = await this.productosModel.findById(id);
    return producto;
  }

  async update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const productoActualizado = await this.productosModel.findByIdAndUpdate(id, updateProductoDto, {new: true})
    return productoActualizado;
  }

  async remove(id: string): Promise<Producto> {
    const productoEliminado = await this.productosModel.findByIdAndDelete(id);
    return productoEliminado;
  }
}
