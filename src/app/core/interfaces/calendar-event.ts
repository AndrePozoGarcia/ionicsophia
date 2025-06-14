export interface CalendarEvent {
    id: string;
    name: string;
    typeEvent: string;
    descriptionEvent: string;

    imgEvent?: string;

    eventInitDate: string;
    eventEndDate?: string;

    eventInitTime: string;
    eventEndTime?: string;

    price: number;
    location: string;
    shareEvent: boolean;

}