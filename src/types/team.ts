export interface ITeamMember {
    id: number;
    name: string;
    role: string | null;
    bio: string | null;
    image_url: string | null;
    country: string | null;
    category?: string;
}
