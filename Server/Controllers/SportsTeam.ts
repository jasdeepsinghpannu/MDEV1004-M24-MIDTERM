import { Request, Response, NextFunction } from 'express';
import SportsTeam from '../Models/SportsTeam';


/**
 * This Controller is response for calling the Get Sport Team List API
 * @param req 
 * @param res 
 * @param next 
 */
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

/**
 * 
 * This function returns the details about a sports team when the correct id is passed in the request parameters.
 * @param req 
 * @param res 
 * @param next 
 */
export function DisplaySportsTeamById(req: Request, res: Response, next:NextFunction): void{
    // Get the Id from the endpoint
    let id = req.params.id;
    // Ensure that the Id is Valid
    if(id.length!= 24) {
        res.status(400).json({success: false, msg: "A valid ID is required to retrieve a team", data: ""});
    } else {
        SportsTeam.findById({_id: id})
        .then((data) => {
            if(data){
                res.status(200).json({success: true, msg: "One Sports Team retrived and displayed", data: data})
            }
            if(!data) {
                res.status(404).json({success: false, msg: "Error: Sports Team not found", data: ""});
            }
        })
        .catch((err) => 
        {
            console.error(err);
        })
    }
}

