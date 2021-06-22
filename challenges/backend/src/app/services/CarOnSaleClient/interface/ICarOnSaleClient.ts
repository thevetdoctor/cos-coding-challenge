/**
 * This service describes an interface to access auction data from the CarOnSale API.
 */
export interface ICarOnSaleClient {

    /* TODO: Introduce a type */
    getRunningAuctions(): Promise<Promise<IRunningAuction>[] | Record<any ,any>> 

}

export interface IRunningAuction {
        id: number,
        label: string,
        endingTime: string,
        state: number,
        minimumRequiredAsk: number,
        currentHighestBidValue: number,
        numBids: number,
        isRatedByDealership: boolean,
        isPaidByBuyer: boolean,
        locationAddress: any,
        locationCity: string,
        locationZip: string,
        startedAt: string,
        createdAt: string,
        updatedAt: string,
        hotBid: boolean,
        originalMinimumRequiredAsk: any,
        incomingPaymentConfirmedAt: any,
        outgoingPaymentConfirmedAt: any,
        purchaseConfirmedAt: any,
        pickupConfirmedAt: any,
        isRatedByBuyer: boolean,
        allowInstantPurchase: boolean,
        didEndWithInstantPurchase: boolean,
        instantPurchasePossibleUntil: string,
        priority: any,
        advertisementHtmlContent: any,
        instantPurchasePrice: number,
        urlToInvoice: any,
        locationCountryCode: string,
        purchaseRejectedAt: any,
        involvedInternalResolverUserRole: any,
        internalReferenceText: any,
        sellerIban: any,
        startingBidValue: number,
        invoiceReference: any,
        uuid: string,
        _fk_uuid_vehicle: string,
        _fk_uuid_sellerUser: string,
        _fk_uuid_highestBiddingBuyerUser: any,
        _fk_uuid_involvedInternalUser: any,
        _fk_uuid_involvedInternalResolverUser: any,
        urlToPickupBuyerDocument: any,
        thirdPartyInvoiceReference: any,
        urlToPaymentSite: any,
        thirdPartyTransferReference: any,
        thirdPartyPayoutReference: any,
        paymentProcess: number,
        pickupPinCodeEnteredAt: any,
        locationGeoLat: any,
        locationGeoLon: any,
        lastOfferBySeller: any,
        isSuspectedCashPayment: boolean,
        type: number,
        _fk_uuid_creatingInternalUser: string,
        counterOfferByBuyer: any,
        _fk_uuid_creatingSellerUser: any,
        isTest: boolean,
        thirdPartyVehiclePurchaseInvoiceReference: any,
        displayMinAsk: boolean,
        pickupPinUuid: any,
        pickupPinUuidEnteredAt: any,
        isLive: boolean,
        amIInvolved: boolean,
        biddingAgentValue: number,
        remainingTimeInSeconds: number,
        remainingTimeForInstantPurchaseInSeconds: any,
        isRejectionWaitPeriodOver: boolean,
        associatedVehicle: IAssociatedVehicle,
        amIHighestBidder: boolean,
        sellerContact: any,
        rating: any,
        transportationTask: any,
        isTransportationAllowedForRegion: boolean,
        isExternalPaymentAllowed: boolean,
        pickupPinCode: any,
        remainingDaysUntilReauctioning: any,
        remainingDaysUntilLatePickup: any,
        latePickupFee: any,
        isTransportationBookingPossible: boolean,
        isExpressPickupAvailable: boolean,
        pickupPossibleInDays: any,
        sellerAccount: Record<any, any>,
        amIRegularBuyer: boolean,
        distanceToVehicleInKms: number,
        isMinAskReached: boolean,
        sellerType: number,
        enforceTransportation: boolean,
        isTransportationAvailable: boolean
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