export interface GameData {
    "id": number,
    "slug": string,
    "name": string,
    "released": string,
    "tba": boolean,
    "background_image": string,
    "rating": number,
    "rating_top": number,
    "ratings": object,
    "ratings_count": number,
    "reviews_text_count": string,
    "added": number,
    "added_by_status": object,
    "metacritic": number,
    "playtime": number,
    "suggestions_count": number,
    "updated": string,
    "esrb_rating": 
    {
        "id": number,
        "slug": string,
        "name": string

    },
    "platforms": 
    [{
        "platform": 
        {
            "id": number,
            "slug": string,
            "name": string
        },
        "released_at": string,
        "requirements": 
        {
            "minimum": string,
            "recommended": string
        }
    }
]}