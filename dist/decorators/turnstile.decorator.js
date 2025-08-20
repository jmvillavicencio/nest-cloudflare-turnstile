"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnstileCaptcha = TurnstileCaptcha;
const common_1 = require("@nestjs/common");
const turnstile_guard_1 = require("../guards/turnstile.guard");
function TurnstileCaptcha() {
    return (0, common_1.UseGuards)(turnstile_guard_1.TurnstileGuard);
}
//# sourceMappingURL=turnstile.decorator.js.map