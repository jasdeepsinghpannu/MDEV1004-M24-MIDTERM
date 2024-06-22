import express from 'express';
import { DisplaySportsTeamList, DisplaySportsTeamById } from '../Controllers/SportsTeam';


const router = express.Router();

/* List of routes (endpoints) */

/* GET Sports Team List. */
router.get('/', function(req, res, next) {
  // Display some data
  DisplaySportsTeamList(req,res,next);
});

/* GET Sports Team through Id. */
router.get('/:id', (req, res, next) => {
  // Display some data
  DisplaySportsTeamById(req,res,next);
});

export default router;
