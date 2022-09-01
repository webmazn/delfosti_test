import { Module } from '@nestjs/common';
import { MongooseModule  } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    ProductosModule,
    MongooseModule.forRoot(
      'mongodb+srv://webmazn:HqfkvcHE81bgXfNH@webmazn.yxchdlx.mongodb.net/?retryWrites=true&w=majority'
    )],
  // controllers: [AppController],
  // providers: [AppService],
  controllers: [],
  providers: [],
})
export class AppModule {}