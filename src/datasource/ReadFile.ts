import fs from 'fs';

export class ReadDataFromFile {

    private _filePath: string = '';
    private _participants: string[] = [];

    /**
     * Constructor for the class ReadDataFromFile. Take one argument which
     * represents the file path.
     * @param{string} filePath path to data source.
     */
    public constructor(filePath: string) {
        if (filePath === '') throw new Error('Filepath is empty!');
        this._filePath = filePath;
    }

    /**
     * @returns{string} the filepath to the data source.
     */
    public getFilePath(): string {
        return this._filePath;
    }

     /**
     * @returns{string[]} an array of participants
     */
      public getParticipants(): string[] {
        return this._participants;
    }

    /**
     * Read the date source from the file path to the array of participants.
     * If something went wrong an error will be thrown.
     */
    public readDataSource(): void {
        try {
            let data: string = fs.readFileSync(this._filePath, 'utf-8');
            this._participants = data.split(',');
        } catch (err: any) {
            throw new Error(err);
        }
    }
} 