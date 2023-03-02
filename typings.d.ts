interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

interface Technology {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: SkillBadge[];
    badgeImage: Image;
    badgeTitle: string;
}


export interface HomePage extends SanityBody {
    _type: "home";
    name: string;
    photo: Image;
    info: string;
    github: string;
    linkedin: string;
    curriculum: string;
    typewriterWords: string[];
}

export interface Service extends SanityBody {
    _type: "service";
    image: Image;
    info: string;
    title: string;
}

export interface AboutMeInfo extends SanityBody {
    _type: "aboutMe";
    image: Image;
    info: string;
}
export interface Project extends SanityBody {
    _type: "project";
    image: Image;
    info: string;
    technologies: Technology[];
    title: string;
    demo: string;
}


export interface SkillBadge extends SanityBody {
    _type: "skillBadge";
    badgeImage: Image;
    badgeTitle: string;
}










