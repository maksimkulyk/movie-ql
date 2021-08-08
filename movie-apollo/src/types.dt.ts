export interface IMovie {
  id: string;
  isLiked: boolean;
  medium_cover_image: string;
  title?: string;
  description_intro?: string;
  language?: string;
  rating?: number;
}

export interface ISuggestion {
  id: string;
  title: string;
  medium_cover_image: string;
}
