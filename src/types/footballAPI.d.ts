import { EFixtureStatus } from '../enums/footballAPI';
import { ETimezones } from '../enums/timezones';

export declare namespace FootballAPI {
  type TScore = number | null;

  interface IVenue {
    id: number;
    name: string;
    city: string;
  }

  interface ILeague {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  }

  interface ITeam {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
  }

  interface IFixtureStatus {
    long: string;
    short: EFixtureStatus;
    elapsed: number;
  }

  interface IFixtureDetails {
    id: number;
    referee: string;
    timezone: ETimezones;
    date: string;
    timestamp: number;
    periods: {
      first: number;
      second: number;
    };
    venue: IVenue;
    status: IFixtureStatus;
  }

  interface IFixture {
    fixture: IFixtureDetails;
    league: ILeague;
    teams: {
      home: ITeam;
      away: ITeam;
    };
    goals: {
      home: TScore;
      away: TScore;
    };
    score: {
      halftime: {
        home: TScore;
        away: TScore;
      };
      fulltime: {
        home: TScore;
        away: TScore;
      };
      extratime: {
        home: TScore;
        away: TScore;
      };
      penalty: {
        home: TScore;
        away: TScore;
      };
    };
  }
}
