export interface Activity {
    id: string;
    title: string;
    description: string;
    category: string;
    city: string;
    venue: string;
    IsShow?: boolean;// Tornar a propriedade IsShow opcional adicionando "?"
}