import Step from "./Step";

export default interface Position {
    id: string;
    tags: string[];
    name: string;
    description?: string;
    template?: Step[]
    hrid?: string
}