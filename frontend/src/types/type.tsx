export interface Opportunity {
    name: string;
    role?: string;
    eligibility?: string;
    location?: string;
    applicationLink: string;
}

export interface Internship extends Opportunity {
    duration: string;
    stipend: string;
}

export interface Hackathon extends Opportunity {
    startDate: string;
    endDate: string;
    tracks: string[];
}

export interface Job extends Opportunity {
    jobDescription: string;
    skillsRequired: string[];
    salary: string;
    experienceRequired: string;
}