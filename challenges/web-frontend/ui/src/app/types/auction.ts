export class Auction {
    label!: string;
    associatedVehicle!: {
        ez: string;
        transmission: number;
        fuelType: number;
        mileageInKm: number;
        vehicleImages: {
            url: string;
        }[]
    };
    currentHighestBidValue!: number;
    endingTime!: string;
    remainingTimeInSeconds!: number;
    amIHighestBidder: boolean | undefined
}