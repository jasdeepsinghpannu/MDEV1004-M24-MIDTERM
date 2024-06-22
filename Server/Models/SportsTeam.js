"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
let sportsTeamSchema = new mongoose_1.Schema({
    teamName: { type: String, required: true },
    sportType: { type: String, required: true },
    coach: { type: String, required: true },
    captain: { type: String, required: true },
    players: { type: [String], required: true },
    homeVenue: { type: String, required: true },
    league: { type: String, required: true },
    championshipsWon: { type: Number, default: 0 },
    foundedYear: { type: Number, required: true },
    websiteURL: { type: String, required: true },
    logoURL: { type: String, required: true },
});
exports.default = mongoose_1.default.model('SportsTeam', sportsTeamSchema);
//# sourceMappingURL=SportsTeam.js.map