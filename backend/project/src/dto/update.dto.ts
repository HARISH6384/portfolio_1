import { PartialType } from '@nestjs/mapped-types';
 
import Createdto from './create.dto';

export class UpdateDto extends PartialType(Createdto) {}
