import express from 'express';
import { DisplaySportsTeamList } from '../Controllers/SportsTeam';


const router = express.Router();

/* List of routes (endpoints) */

/* GET Movie List. */
router.get('/', function(req, res, next) {
  // Display some data
  DisplaySportsTeamList(req,res,next);
});

export default router;
