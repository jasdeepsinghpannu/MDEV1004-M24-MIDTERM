"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplaySportsTeamById = exports.DisplaySportsTeamList = void 0;
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
function DisplaySportsTeamById(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrieve a team", data: "" });
    }
    else {
        SportsTeam_1.default.findById({ _id: id })
            .then((data) => {
            if (data) {
                res.status(200).json({ success: true, msg: "One Sports Team retrived and displayed", data: data });
            }
            if (!data) {
                res.status(404).json({ success: false, msg: "Error: Sports Team not found", data: "" });
            }
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.DisplaySportsTeamById = DisplaySportsTeamById;
//# sourceMappingURL=SportsTeam.js.map