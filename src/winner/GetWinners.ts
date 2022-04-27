export class GetTheWinners {

    private _participants: string[] = [];

    /**
     * Constructor of the class GeTwinners. Take one arguments which represents the Array of Participants
     * which was read from the data source.
     * @param{string[]} participants an array of participants
     */
    public constructor(participants: string[]) {
        if (participants.length === 0) throw new Error('No participants to work with.');
        this._participants = participants;
    }

    /**
     * This method prints every participant from the array. 
     */
    public getParticipants(): void {
        for (let x = 0; x < this._participants.length; x++) {
            console.log('Participant' + (x + 1) + ': ' + this._participants[x]);
        }
    }

    /**
     * This method returns the array of winners. 
     * @param runtime{number} Indicates how many winners should be found.
     * @returns an array of winners
     */
    public getWinners(runtime: number): string[] {
        let winners: string[] = [];
        for (let x = 0; x < runtime; x++) {
            let random = Math.floor(Math.random() * this._participants.length);
            if (winners.includes(this._participants[random])) {
                x--;
            } else {
                winners.push(this._participants[random])
            }
        }
        return winners;
    }
}