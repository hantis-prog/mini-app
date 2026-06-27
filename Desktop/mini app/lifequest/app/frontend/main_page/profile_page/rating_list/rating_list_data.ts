export interface RatingPlayer {
  id: number;
  place: number;
  name: string;
  level: number;
  xp: number;
  isCurrentUser: boolean;
}

export const RATING_PLAYERS: RatingPlayer[] = [
  { id: 1, place: 1, name: 'ProGamer', level: 50, xp: 95000, isCurrentUser: false },
  { id: 2, place: 2, name: 'CodeMaster', level: 45, xp: 82000, isCurrentUser: false },
  { id: 3, place: 3, name: 'NightOwl', level: 42, xp: 75000, isCurrentUser: false },
  { id: 4, place: 4, name: 'BookWorm', level: 38, xp: 68000, isCurrentUser: false },
  { id: 5, place: 5, name: 'Runner', level: 35, xp: 62000, isCurrentUser: false },
  { id: 6, place: 6, name: 'Artist', level: 32, xp: 55000, isCurrentUser: false },
  { id: 7, place: 7, name: 'Musician', level: 28, xp: 48000, isCurrentUser: false },
  { id: 8, place: 8, name: 'Traveler', level: 25, xp: 42000, isCurrentUser: false },
  { id: 9, place: 9, name: 'Chef', level: 22, xp: 38000, isCurrentUser: false },
  { id: 10, place: 10, name: 'PlayerOne', level: 12, xp: 1250, isCurrentUser: true },
  { id: 11, place: 11, name: 'Newbie', level: 5, xp: 500, isCurrentUser: false },
  { id: 12, place: 12, name: 'Starter', level: 3, xp: 200, isCurrentUser: false },
];