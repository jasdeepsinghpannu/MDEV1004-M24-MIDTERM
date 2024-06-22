"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplaySportsTeamList = void 0;
const SportsTeam_1 = __importDefault(require("../Models/SportsTeam"));
function DisplaySportsTeamList(req, res, next) {
    SportsTeam_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Sports Team list retrived and displayed", data: data });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.DisplaySportsTeamList = DisplaySportsTeamList;
//# sourceMappingURL=SportsTeam.js.map