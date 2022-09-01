import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateProductoDto } from './create-producto.dto';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?: string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    category?: string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    slug?: string;

    // @IsDate()
    // @IsNotEmpty()
    // @IsOptional()
    createdAt?: Date;
}
