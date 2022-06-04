import Position from "./Position";

export default interface Company {
    _id?: string;
    name: string;
    description: string;
    positions: Position[];
}