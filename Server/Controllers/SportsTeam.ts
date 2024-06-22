import { Request, Response, NextFunction } from 'express';
import SportsTeam from '../Models/SportsTeam';



export function DisplaySportsTeamList (req: Request, res: Response, next: NextFunction): void {
    SportsTeam.find({})
    .then((data) =>
    {
        res.status(200).json({success: true, msg: "Sports Team list retrived and displayed", data: data})
    })
    .catch((err) =>
    {
        console.error(err);
    })
}
