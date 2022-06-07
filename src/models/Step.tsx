export default interface Step {
    _id: string;
    title: string;
    description?: string;
    time: string;
    comments?: string[];
}