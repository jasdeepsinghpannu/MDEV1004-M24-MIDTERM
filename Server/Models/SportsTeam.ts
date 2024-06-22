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
  teamName: { type: String, required: true },
  sportType: { type: String, required: true },
  coach: { type: String, required: true },
  captain: { type: String, required: true },
  players: { type: [String], required: true },
  homeVenue: { type: String, required: true },
  league: { type: String, required: true },
  championshipsWon: { type: Number, default: 0 },
  foundedYear: { type: Number, required: true },
  websiteURL: { type: String, required: true },
  logoURL: { type: String, required: true },
});

let SportsTeam = model<ISportsTeam>('SportsTeams', sportsTeamSchema);

export default SportsTeam;
