"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let sportsTeamSchema = new mongoose_1.Schema({
    teamName: String,
    sportType: String,
    coach: String,
    captain: String,
    players: [String],
    homeVenue: String,
    league: String,
    championshipsWon: Number,
    foundedYear: Number,
    websiteURL: String,
    logoURL: String,
}, { collection: 'sportsTeams' });
let SportsTeam = (0, mongoose_1.model)('SportsTeams', sportsTeamSchema);
exports.default = SportsTeam;
//# sourceMappingURL=SportsTeam.js.map