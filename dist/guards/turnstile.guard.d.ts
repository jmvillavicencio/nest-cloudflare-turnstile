import { ExecutionContext, CanActivate } from '@nestjs/common';
import { TurnstileService } from '../services/turnstile.service';
import { ITurnstileOptions } from '../interfaces/turnstile';
export declare class TurnstileGuard implements CanActivate {
    private readonly turnstileService;
    private readonly options;
    constructor(turnstileService: TurnstileService, options: ITurnstileOptions);
    throwError(error: any): void;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
//# sourceMappingURL=turnstile.guard.d.ts.map