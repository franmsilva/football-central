export enum EFixtureStatus {
  TimeToBeDefined = 'TBD',
  NotStarted = 'NS',
  FirstHalf = '1H',
  Halftime = 'HT',
  SecondHalf = '2H',
  ExtraTime = 'ET',
  PenaltyInProgress = 'P',
  MatchFinished = 'FT',
  MatchFinishedAfterExtraTime = 'AET',
  MatchFinishedAfterPenalty = 'PEN',
  ExtraTimeBreak = 'BT',
  MatchSuspended = 'SUSP',
  MatchInterrupted = 'INT',
  MatchPostponed = 'PST',
  MatchCancelled = 'CANC',
  MatchAbandoned = 'ABD',
  TechnicalLoss = 'AWD',
  WalkOver = 'WO',
  InProgress = 'LIVE',
}
