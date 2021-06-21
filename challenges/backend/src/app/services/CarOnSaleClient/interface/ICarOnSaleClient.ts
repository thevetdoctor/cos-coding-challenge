/**
 * This service describes an interface to access auction data from the CarOnSale API.
 */
export interface ICarOnSaleClient {

    /* TODO: Introduce a type */
    getRunningAuctions(): Promise<IAuction>[] 

}

export interface IAuction {
        label: string,
        associatedVehicle : IAssociatedVehicle
        endingTime: string,
        remainingTimeInSeconds: number,
        currentHighestBidValue: number
}

export interface IAssociatedVehicle {
        make: string,
        model: string,
        vehicleImages: IVehicleImage[],
        mileageInKm: number,
        category: number,
        fuelType: number,
        transmission: number,
        ez: string
}

export interface IVehicleImage {
        uuid: string,
        rawData: null,
        url: string,
        _fk_uuid_vehicle: string,
        perspective: number,
        encoding: null,
        mimeType: null,
        createdAt: string,
        updatedAt: string
}