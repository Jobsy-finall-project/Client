export default interface Step {
    id: string;
    applicationId: String;
    title: string;
    stepDetails: string;
    date: string;
    email: string;
    relatedEmails?: string[];
    notes?: string[];
}