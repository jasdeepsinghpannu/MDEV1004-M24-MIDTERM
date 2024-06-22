import mongoose, { Schema, model } from 'mongoose';

// SportsTeam Interface
interface ISportsTeam {
  teamName: string;
  sportType: string;
  coach: string;
  captain: string;
  players: string[];
  homeVenue: string;
  league: string;
  championshipsWon: number;
  foundedYear: number;
  websiteURL: string;
  logoURL: string;
}

// Sports Team Schema
let sportsTeamSchema = new Schema<ISportsTeam>({
  teamName: String,
  sportType: String,
  coach: String,
  captain: String,
  players: [String],
  homeVenue: String,
  league: String,
  championshipsWon: Number,
  foundedYear: Number,
  websiteURL: String,
  logoURL: String,
}, { collection: 'sportsTeams' }); // Specified collection name here

let SportsTeam = model<ISportsTeam>('SportsTeams', sportsTeamSchema);

export default SportsTeam;
