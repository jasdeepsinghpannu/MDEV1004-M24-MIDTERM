import { Request, Response, NextFunction } from 'express';
import SportsTeam from '../Models/SportsTeam';
import { SanitizeArray } from '../Util';


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



/**
 * This functions adds a sports team into the database
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function CreateSportsTeam(req:Request, res:Response, next:NextFunction): void {
    let players = (req.body.players)? SanitizeArray(req.body.players as string) : SanitizeArray("");
    let sportsTeam = new SportsTeam({
        teamName: req.body.teamName as string,
        sportType: req.body.sportType as string,
        coach: req.body.coach as string,
        captain: req.body.captain as string,
        players: players,
        homeVenue: req.body.homeVenue as string,
        league: req.body.league as string,
        championshipsWon: req.body.championshipsWon as number,
        foundedYear: req.body.foundedYear as number,
        websiteURL: req.body.websiteURL as string,
        logoURL: req.body.logoURL as string,
        });
        
        SportsTeam.create(sportsTeam)
            .then(() => {
                res.status(200).json({success: true, msg: "Sports Team Added Successfully", data: sportsTeam});
            })
            .catch((err) =>{
                console.error(err);
            });
}



/**
 * This function takes a sportsTeam in the request params and creates an entry in the database
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function UpdateSportsTeam(req:Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    // ensure that id is valid
    if(id.length!=24) {
        res.status(400).json({success: false, msg: "A valid ID is required to retrieve a movie", data: ""});
    }
    else {
        let players = (req.body.genres)? SanitizeArray(req.body.players as string) : SanitizeArray("");
        let sportsTeamToUpdate = new SportsTeam({
        _id: id,
        teamName: req.body.teamName as string,
        sportType: req.body.sportType as string,
        coach: req.body.coach as string,
        captain: req.body.captain as string,
        players: players,
        homeVenue: req.body.homeVenue as string,
        league: req.body.league as string,
        championshipsWon: req.body.championshipsWon as number,
        foundedYear: req.body.foundedYear as number,
        websiteURL: req.body.websiteURL as string,
        logoURL: req.body.logoURL as string,
        });
        
        SportsTeam.updateOne({_id: id}, sportsTeamToUpdate)
            .then(() => {
                res.status(200).json({success: true, msg: "Sports Team Added Successfully", data: sportsTeamToUpdate});
            })
            .catch((err) =>{
                console.error(err);
            });
    }
}


/**
 * This function is responsible for deleting a sports team by its id
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function DeleteSportsTeam(req:Request, res: Response, next:NextFunction): void {
    let id = req.params.id;
    
    // ensure that id is valid
    if(id.length!=24) {
        res.status(400).json({success: false, msg: "A valid ID is required to delete a sports team", data: ""});
    }
    else {
        SportsTeam.deleteOne({_id: id})
        .then(() => {
            res.status(200).json({success: true, msg: "SportsTeam Deleted", data:id})
        })
        .catch((err) => {
            console.error(err);
        })
    }
}
