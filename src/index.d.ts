import Results from './types/results';

export interface Mp3Finder {
	findMp3: (song: string) => Promise<Results>;
}
