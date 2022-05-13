import Position from "./Position";

export default interface Company {
    id: string;
    name: string;
    description: string;
    positions: Position[];
}