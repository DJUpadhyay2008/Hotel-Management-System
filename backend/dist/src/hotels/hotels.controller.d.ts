import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
export declare class HotelsController {
    private readonly hotelsService;
    constructor(hotelsService: HotelsService);
    create(createHotelDto: CreateHotelDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHotelDto: UpdateHotelDto): string;
    remove(id: string): string;
}
