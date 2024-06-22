"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SportsTeam_1 = require("../Controllers/SportsTeam");
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    (0, SportsTeam_1.DisplaySportsTeamList)(req, res, next);
});
router.get('/:id', (req, res, next) => {
    (0, SportsTeam_1.DisplaySportsTeamById)(req, res, next);
});
router.post('/create', (req, res, next) => {
    (0, SportsTeam_1.CreateSportsTeam)(req, res, next);
});
exports.default = router;
//# sourceMappingURL=index.js.map