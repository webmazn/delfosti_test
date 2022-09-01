import { Module } from '@nestjs/common';
import { MongooseModule  } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    ProductosModule,
    MongooseModule.forRoot(
      'mongodb+srv://webmazn:HqfkvcHE81bgXfNH@webmazn.yxchdlx.mongodb.net/?retryWrites=true&w=majority'
    )],
  controllers: [],
  providers: [],
})
export class AppModule {}