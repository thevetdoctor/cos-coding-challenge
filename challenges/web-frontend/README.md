# Web Frontend Challenge

Welcome to the CarOnSale Web Frontend Coding Challenge.

To assess your skills and knowledge about the relevant technologies, we want you to build us a simple user interface for our backend service.

Your Task:

Build a simple Angular (v7 - v12 or latest) application that includes:
- Login Page to login registered buyers („salesman“ or "buyer" users). If a Non-Buyer registers, an error message should pop up.
- Overview Page (only for logged in buyers) to display all running auctions (updated every 20 seconds), including
   - vehicle image thumbnail (vehicle images may not show actual vehicles cars on our DEV platform, but only test images)
   - basic vehicle information („Erstzulassung“/EZ, Mileage, Fuel Type, Transmission)
   - current highest bid value in Euro
   - remaining time in format „00h:00m:00s“
   - information whether the logged in buyer is the highest bidder on an auction
   
Please fork the repo and create the Angular project in the directory of this README.

Note that the solution must be coded in Angular, as this is the framework we are using internally. 
No previous professional experience with Angular will be consider when checking the results, of course :)

Your Resources:

You can find the Swagger documentation of our REST API here (The „Authorize“ feature of Swagger is not working with our API):
https://api-core-dev.caronsale.de/swagger/#/

The base URL of our REST service is <https://api-core-dev.caronsale.de/api/v1>.


General Hints:

- The „User ID“ for REST calls is not the internal „id“ of a user, but the „mailAddress“.
- You don’t need to register new users, existing test accounts are
   - Salesman Users:
      - salesman@random.com (PW: 123test)
      - salesman2@random.com (PW: test123)
   - Dealership Users:
      - dealership@alwaysAvailable.com (PW: test123)

Please send the link to the forked repo to coding-challenge@caronsale.de.

If you have any questions, feel free to contact us via <coding-challenge@caronsale.de>

https://api-core-dev.caronsale.de/api/v1​/public​/preview​/auctions
https://api-core-dev.caronsale.de/api/v1/public/preview/auctions