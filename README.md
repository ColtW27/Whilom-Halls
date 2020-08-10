#      𝒲𝒽𝒾𝓁𝓸𝓂 ℋ𝒶𝓁𝓁𝓈

### Whilom Halls is an Airbnb clone that features only large and antiquated manors, mansions, and state homes. Many of these homes are recognizable from popular films, literature, and other lore.

#### Whilom Halls gives users the ability to:
* Signup for an account.
* Login to an account with verifiable auth.
* View an index of listings.
* Swipe through a listing's photos to see the property.


#### View Whilom Halls here:
https://whilom-halls.herokuapp.com/?#/

#### Splash Page
<img width="1440" alt="Screen Shot 2020-08-10 at 5 30 23 PM" src="https://user-images.githubusercontent.com/35855017/89833615-54bf7200-db2f-11ea-8fe1-75da9fbacbfe.png">

#### Listing's Index
<img width="1440" alt="Screen Shot 2020-08-10 at 5 30 34 PM" src="https://user-images.githubusercontent.com/35855017/89833661-6b65c900-db2f-11ea-9c2c-66f5c7dabd2a.png">

#### Listing's Show Page
<img width="1438" alt="Screen Shot 2020-08-10 at 5 30 02 PM" src="https://user-images.githubusercontent.com/35855017/89833728-86383d80-db2f-11ea-8ad0-f36eb2899f18.png">

#### Signup Modal
<img width="1440" alt="Screen Shot 2020-08-10 at 5 40 53 PM" src="https://user-images.githubusercontent.com/35855017/89834371-b92f0100-db30-11ea-8461-6111c410494a.png">

#### Login Modal
<img width="1440" alt="Screen Shot 2020-08-10 at 5 41 07 PM" src="https://user-images.githubusercontent.com/35855017/89834456-dfed3780-db30-11ea-971f-ceab2eed6498.png">

### Technologies
#### Whilom Halls was built with technology used in many popular large scale applications.

#### Database
* Postgresql - Modern database with scalability.
#### Backend
* Ruby - Used for user authorization and for accessing the database.
#### Framework
* Rails - Used in conjunction with Ruby to deploy the application and house the logic and state.
#### Frontend
* Javascript - Language that allows our logic to be embedded in our views.
* React - Javascript library that allows the application to update and rerender only the new information, making for a faster application with less frequent server requests and a more fluid user experience.
* Redux - Javascript library that allows the app to contain and manage front end state in a predictable and efficient manner.

### Features
#### User Authentication
* This feature allows users to safely create a profile in order to interact with the application personally. User information is safely stored in a database. The user's password is also hashed and salted before being stored - this encryption means that even we do not have access to passwords. Users will be able to create bookings at locations and access them through their user profile.
#### Listings Index
* This feature allows any number of listings to be placed in the database, storing information from price to bed and bath counts, as well as pictures so that the user knows what to expect from a booking.

### Future direction
#### Listing Show Pages
* Implementation will allow users to view individual listings in detail, with larger pictures and ammenities unique to a stay. Bookings will also be available from this page, as will reviews and the ability to contact hosts.
#### Destination Search
* The destination search feature will make filtering listings simple. Filters will include location, price, size, etc. 
#### Reviews
* Implementation will allow users to leave reviews on stays, giving future guests a more rounded view of what to expect form a stay.


