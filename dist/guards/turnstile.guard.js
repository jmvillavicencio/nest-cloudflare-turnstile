"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnstileGuard = void 0;
const common_1 = require("@nestjs/common");
const turnstile_service_1 = require("../services/turnstile.service");
const messages_1 = require("../constants/messages");
let TurnstileGuard = class TurnstileGuard {
    constructor(turnstileService, options) {
        this.turnstileService = turnstileService;
        this.options = options;
    }
    throwError(error) {
        if (this.options.onError) {
            return this.options.onError(error);
        }
        throw error;
    }
    async canActivate(context) {
        const skipValidation = this.options?.skipIf === true;
        if (skipValidation)
            return true;
        const request = context.switchToHttp().getRequest();
        const responseToken = this.options.tokenResponse(request);
        if (!responseToken)
            this.throwError(new common_1.BadRequestException(messages_1.Messages.MISSING));
        const { success } = await this.turnstileService.validateToken(responseToken);
        if (!success)
            this.throwError(new common_1.BadRequestException(messages_1.Messages.INVALID));
        return success;
    }
};
exports.TurnstileGuard = TurnstileGuard;
exports.TurnstileGuard = TurnstileGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('TurnstileServiceOptions')),
    __metadata("design:paramtypes", [turnstile_service_1.TurnstileService, Object])
], TurnstileGuard);
//# sourceMappingURL=turnstile.guard.js.map