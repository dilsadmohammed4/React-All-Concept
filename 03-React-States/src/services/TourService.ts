import {ITour} from "../component/tour/models/ITour";

export class TourService {
    private static tours: ITour[] = [
        {
            sno: 'AA001',
            name: 'China',
            imageUrl: 'https://theplanetd.com/images/Cities-in-Japan.jpg'
        },
        {
            sno: 'AA002',
            name: 'Tokyo',
            imageUrl: 'https://www.aircalin.sg/sites/default/files/2022-08/Tram%20-%20Hong%20Kong_Libre%20de%20droit%20%281%29-min.jpg'
        },
        {
            sno: 'AA003',
            name: 'India',
            imageUrl: 'https://www.g20.org/content/dam/gtwenty/gtwenty_new/explore_india/Culture%20Heritage%20of%20India_1.jpg'
        }
        , {
            sno: 'AA004',
            name: 'Taiwan',
            imageUrl: 'https://www.discoverhongkong.com/content/dam/dhk/intl/explore/attractions/explore-hong-kong-refreshed-harbourfront-spaces/explore-hong-kong-refreshed-harbourfront-spaces-960x720.jpg'
        }
    ];

    public static getAllTours = (): ITour[] => {
        return this.tours;
    }
}