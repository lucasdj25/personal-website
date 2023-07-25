export interface ProjectModel {
    title: string;
    image: string;
    description?: string;
    skills: string[];
    links?: ProjectLink[]
}

interface ProjectLink {
    name: string;
    url: string;
}