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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
let MailService = class MailService {
    constructor(config) {
        this.config = config;
        this.transporter = nodemailer.createTransport({
            service: config.get('SMTP_SERVICE'),
            auth: {
                user: config.get('SMTP_USERNAME'),
                pass: config.get('SMTP_PASSWORD'),
            },
        });
    }
    async sendMail(to, fromName, subject, text) {
        const mailOptions = {
            from: `"${fromName}" "${this.config.get('SMTP_USERNAME')}"`,
            to,
            subject,
            text,
        };
        try {
            const result = await this.transporter.sendMail(mailOptions);
            console.log(`Email sent: ${result.response}`);
            return result;
        }
        catch (error) {
            console.error(`Error sending email: ${error}`);
            throw error;
        }
    }
    async sendMailMultiple(to, fromName, subject, text) {
        const mailOptions = {
            from: `"${fromName}" "${this.config.get('SMTP_USERNAME')}"`,
            to: to.join(','),
            subject,
            text,
        };
        try {
            const result = await this.transporter.sendMail(mailOptions);
            console.log(`Email sent: ${result.response}`);
            return result;
        }
        catch (error) {
            console.error(`Error sending email: ${error}`);
            throw error;
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map