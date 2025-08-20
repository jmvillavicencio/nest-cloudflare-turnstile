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
exports.TurnstileService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let TurnstileService = class TurnstileService {
    constructor(httpService, options) {
        this.httpService = httpService;
        this.options = options;
        this.BASE_URL = 'https://challenges.cloudflare.com';
    }
    async validateToken(token) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService
            .post(`${this.BASE_URL}/turnstile/v0/siteverify`, {
            response: token,
            secret: this.options.secretKey,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        })
            .pipe((0, rxjs_1.catchError)((error) => {
            if (this.options.onError)
                this.options.onError(error);
            throw new common_1.InternalServerErrorException('Failed turnstile verification.');
        })));
        return data;
    }
};
exports.TurnstileService = TurnstileService;
exports.TurnstileService = TurnstileService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('TurnstileServiceOptions')),
    __metadata("design:paramtypes", [axios_1.HttpService, Object])
], TurnstileService);
//# sourceMappingURL=turnstile.service.js.map