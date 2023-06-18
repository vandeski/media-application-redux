export class Media {
  id: number | undefined;
  title: string = "";
  type: "movie" | "tv-show" | "game" | undefined; // As more types are added to the platform we can expand this list and eventually turn it into a enum
  genre: string = "";
  releaseYear: number | undefined;
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.title) this.title = initializer.title;
    if (initializer.type) this.type = initializer.type;
    if (initializer.genre) this.genre = initializer.genre;
    if (initializer.releaseYear) this.releaseYear = initializer.releaseYear;
    if (initializer.rating) this.rating = initializer.rating;
  }
}
