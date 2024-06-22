import express from 'express';
import { DisplaySportsTeamList, DisplaySportsTeamById, CreateSportsTeam, UpdateSportsTeam, DeleteSportsTeam} from '../Controllers/SportsTeam';


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

/* Create Sports Team. */
router.post('/create', (req, res, next) => {
  // Display some data
  CreateSportsTeam(req,res,next);
});

/* Update Sports Team through Id. */
router.put('/update/:id', (req, res, next) => {
  // Display some data
  UpdateSportsTeam(req,res,next);
});

/* Delete Movie through Id. */
router.delete('/delete/:id', (req, res, next) => {
  // Display some data
  DeleteSportsTeam(req,res,next);
});

export default router;
