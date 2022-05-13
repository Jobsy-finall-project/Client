import Position from "./Position";

export default interface Comapny {
    id: string;
    name: string;
    description: string;
    positions: Position[];
}