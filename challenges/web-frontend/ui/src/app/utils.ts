export const timeFormat = (time: number) => {
    let hour = (time - (time % 3600)) / 3600;
    let minutes = ((time % 3600) - ((time % 3600) % 60)) / 60;
    let seconds = (time % 3600) % 60;

    return `${hour}h:${minutes}m:${seconds}s`;
}

export const baseUrl = 'https://api-core-dev.caronsale.de/api';