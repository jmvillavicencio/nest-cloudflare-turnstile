import { HttpService } from '@nestjs/axios';
import { ITurnstileOptions } from '../interfaces/turnstile';
export declare class TurnstileService {
    private readonly httpService;
    private readonly options;
    private readonly BASE_URL;
    constructor(httpService: HttpService, options: ITurnstileOptions);
    validateToken(token: string): Promise<any>;
}
//# sourceMappingURL=turnstile.service.d.ts.map