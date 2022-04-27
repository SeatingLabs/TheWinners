import {ReadDataFromFile} from "./datasource/ReadFile";
import {GetTheWinners} from "./winner/GetWinners";

const read = new ReadDataFromFile('./src/test.csv');
read.readDataSource()

//console.log(read.getParticipants())

const winner = new GetTheWinners(read.getParticipants());

winner.getParticipants();

console.log(winner.getWinners(3));