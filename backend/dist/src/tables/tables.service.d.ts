import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
export declare class TablesService {
    create(createTableDto: CreateTableDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTableDto: UpdateTableDto): string;
    remove(id: number): string;
}
