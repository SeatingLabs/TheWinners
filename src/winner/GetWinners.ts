export class GetTheWinners {

    private _participants: string[] = [];

    public constructor(participants: string[]) {
        if (participants.length === 0) throw new Error('No participants to work with.');
        this._participants = participants;
    }
}