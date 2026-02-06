import { ReportingService } from './reporting.service';
import { CreateReportingDto } from './dto/create-reporting.dto';
import { UpdateReportingDto } from './dto/update-reporting.dto';
export declare class ReportingController {
    private readonly reportingService;
    constructor(reportingService: ReportingService);
    create(createReportingDto: CreateReportingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateReportingDto: UpdateReportingDto): string;
    remove(id: string): string;
}
