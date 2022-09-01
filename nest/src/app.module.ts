import { Module } from '@nestjs/common';
import { MongooseModule  } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [MongooseModule,ProductosModule],
  // controllers: [AppController],
  // providers: [AppService],
  controllers: [],
  providers: [],
})
export class AppModule {}