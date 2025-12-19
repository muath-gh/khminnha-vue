export interface Category {
  id: number;
  theme_id: number;
  name: string;
  slug: string;
  description?: Record<string, string> | string | null;
  image?: string | null;
  created_at?: string;
  updated_at?: string;
  used?: boolean;
}
