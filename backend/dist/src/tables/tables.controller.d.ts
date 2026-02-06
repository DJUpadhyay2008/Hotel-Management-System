import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
export declare class TablesController {
    private readonly tablesService;
    constructor(tablesService: TablesService);
    create(createTableDto: CreateTableDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTableDto: UpdateTableDto): string;
    remove(id: string): string;
}
