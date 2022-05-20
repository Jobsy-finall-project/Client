import Step from "./StepModel";

export default interface Position {
    positionId: string;
    name: string;
    description: string;
    template?: Step[]
}