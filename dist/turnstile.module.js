"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TurnstileModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnstileModule = void 0;
const common_1 = require("@nestjs/common");
const turnstile_service_1 = require("./services/turnstile.service");
const axios_1 = require("@nestjs/axios");
const turnstile_guard_1 = require("./guards/turnstile.guard");
const TurnstileServiceOptionsToken = 'TurnstileServiceOptions';
const providers = [turnstile_guard_1.TurnstileGuard, turnstile_service_1.TurnstileService];
let TurnstileModule = TurnstileModule_1 = class TurnstileModule {
    static forRoot(options) {
        const TurnstileModuleOptionsProvider = {
            provide: TurnstileServiceOptionsToken,
            useValue: options,
        };
        return {
            module: TurnstileModule_1,
            imports: [axios_1.HttpModule],
            providers: [...providers, TurnstileModuleOptionsProvider],
            exports: [...providers, TurnstileModuleOptionsProvider],
        };
    }
    static forRootAsync({ imports, inject, useFactory, }) {
        const TurnstileModuleOptionsProvider = {
            provide: TurnstileServiceOptionsToken,
            inject: inject || [],
            useFactory: useFactory,
        };
        return {
            module: TurnstileModule_1,
            imports: [...(imports || []), axios_1.HttpModule],
            providers: [...providers, TurnstileModuleOptionsProvider],
            exports: [...providers, TurnstileModuleOptionsProvider],
        };
    }
};
exports.TurnstileModule = TurnstileModule;
exports.TurnstileModule = TurnstileModule = TurnstileModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], TurnstileModule);
//# sourceMappingURL=turnstile.module.js.map