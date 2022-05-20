export default interface Step {
    id: string;
    title: string;
    stepDetails: string;
    date?: string;
    email?: string;
    relatedEmails?: string[];
    notes?: string[];
}