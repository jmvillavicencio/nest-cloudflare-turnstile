import { DynamicModule } from '@nestjs/common';
import { IAsyncTurnstileOptions, ITurnstileOptions } from './interfaces/turnstile';
export declare class TurnstileModule {
    static forRoot(options: ITurnstileOptions): DynamicModule;
    static forRootAsync({ imports, inject, useFactory, }: IAsyncTurnstileOptions): DynamicModule;
}
//# sourceMappingURL=turnstile.module.d.ts.map