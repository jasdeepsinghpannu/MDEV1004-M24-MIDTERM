"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
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
let SportsTeam = (0, mongoose_1.model)('SportsTeams', sportsTeamSchema);
exports.default = SportsTeam;
//# sourceMappingURL=SportsTeam.js.map