"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSportsTeam = exports.CreateSportsTeam = exports.DisplaySportsTeamById = exports.DisplaySportsTeamList = void 0;
const SportsTeam_1 = __importDefault(require("../Models/SportsTeam"));
const Util_1 = require("../Util");
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
function CreateSportsTeam(req, res, next) {
    let players = (req.body.genres) ? (0, Util_1.SanitizeArray)(req.body.players) : (0, Util_1.SanitizeArray)("");
    let sportsTeam = new SportsTeam_1.default({
        teamName: req.body.teamName,
        sportType: req.body.sportType,
        coach: req.body.coach,
        captain: req.body.captain,
        players: players,
        homeVenue: req.body.homeVenue,
        league: req.body.league,
        championshipsWon: req.body.championshipsWon,
        foundedYear: req.body.foundedYear,
        websiteURL: req.body.websiteURL,
        logoURL: req.body.logoURL,
    });
    SportsTeam_1.default.create(sportsTeam)
        .then(() => {
        res.status(200).json({ success: true, msg: "Sports Team Added Successfully", data: sportsTeam });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.CreateSportsTeam = CreateSportsTeam;
function UpdateSportsTeam(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrieve a movie", data: "" });
    }
    else {
        let players = (req.body.genres) ? (0, Util_1.SanitizeArray)(req.body.players) : (0, Util_1.SanitizeArray)("");
        let sportsTeam = new SportsTeam_1.default({
            teamName: req.body.teamName,
            sportType: req.body.sportType,
            coach: req.body.coach,
            captain: req.body.captain,
            players: players,
            homeVenue: req.body.homeVenue,
            league: req.body.league,
            championshipsWon: req.body.championshipsWon,
            foundedYear: req.body.foundedYear,
            websiteURL: req.body.websiteURL,
            logoURL: req.body.logoURL,
        });
        SportsTeam_1.default.create(sportsTeam)
            .then(() => {
            res.status(200).json({ success: true, msg: "Sports Team Added Successfully", data: sportsTeam });
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.UpdateSportsTeam = UpdateSportsTeam;
//# sourceMappingURL=SportsTeam.js.map