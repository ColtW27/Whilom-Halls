require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples: 
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create(email: "lillyflower101@user.com", password: "123456", first_name: "Lilly", last_name: "Flower")
file = open('https://whilomhalls-seeds.s3.amazonaws.com/659a18376bba5afc9799b16b13eb9591.jpg')
demo_user.profile_picture.attach(io: file, filename: '659a18376bba5afc9799b16b13eb9591.jpg')

# demo_user2 = User.create(email: "linziemirth31@user.com", password: "123456", first_name: "Linzie", last_name: "Mirth")
# file2 = open('https://whilomhalls-seeds.s3.amazonaws.com/8a3e608b4b94a19c2c33c2f4b5937dc8.jpg')
# demo_user2.profile_picture.attach(io: file2, filename: '8a3e608b4b94a19c2c33c2f4b5937dc8.jpg')
# User.create(email: "Allisterprim86@user.com", :password: "123456", first_name: "Allister", last_name: "Prim")

# User.create(email: "Forestlarks9@user.com", :password: "123456", first_name: "Forest", last_name: "Larks")

# User.create(email: "edgarmoralez22@user.com", :password: "123456", first_name: "Edgar", last_name: "Moralez")

listing1 = Listing.create(name: "Allerdale Hall", latitude: 51.225039 , longitude: -3.689588, size: 12666, bedrooms: 16, bathrooms: 8, pricing: 380, description: "Allerdale Hall is a terrifyingly gorgeous gothic mansion on the moors of England. The land is often called Crimson Peak, as the rich clay prominent in the soil stains the snow a bright red. Built over the clay mines, one can find red oozing from the walls and seeping into the floors. Reparations to the house are being made, but the sheer size makes upkeep a challenge, and only so much can be done about the hole in the ceiling. We apologize for any inconvenience this may cause, but we think that you will find the place rather charming, and will even find it most difficult to leave. The house likes to keep its vict.. I mean, residents.",max_num_guests: 30 )
file3 = open('https://whilomhalls-seeds.s3.amazonaws.com/crimson-peak-set-design-002.jpg') 

# Listing.create(name: "Wuthering Heights", latitude: 51.641389 , longitude: -4.704266, size: 6735, bedrooms: 9, bathrooms: 5, pricing: 355, description: "Wuthering Heights, the windy and looming home of Mr. Heathecliff. Perched on a cliffside in rural England, Wuthering Heights has a gorgous view over the water. Just be cautious, as the dogs have a tendency to be a bit snippy. Also, bring your coat but leave your umbrella, as the winds can be quite strong and the house a bit drafty at times.", max_num_guests: 19 )

# Listing.create(name: "Maiden Spire", latitude: 50.137318 , longitude: -5.377226, size: 9088, bedrooms: 10, bathrooms: 6, pricing: 703, description: "Maiden Spire, known for its single tower that stretches toward the sky, sits in the southwest tip of England. The house is lovely but we don't get a lot of visitors, we are hopign this will bring new people into our lives. The only person that comes around now is a young rapscallion that claims royal blood. He won't let us be. We get a lot of jokes about our 'Rapunzel' tower, but we assure you, we cut our daughter's hair to prevent any mishaps.",max_num_guests: 18 )

# Listing.create(name: "Draves Manor", latitude: 52.201135 , longitude: -7.455342, size: 10656, bedrooms: 12, bathrooms: 6, pricing: 478, description: "Stately manorhouse in Ireland. The horses run in the fields, wild - that is - we don't take care of them, but they seem to choose to stay in our fields. The house is built of grey stone, and seems to stay the perfect temperature year around. Some claim the spot was chosen for the out-of-place geothermal nature, and it would explain a number of happenings. The basement is also the hottest..well the first basement that is. Rumor has is that there are many floors below, but the temperatures are so hot that no one in remembered years has traversed them. An eerie red glow comes from the corridor leading down to the next floor.",max_num_guests: 17 )

# Listing.create(name: "Bride's Head Castle", latitude: 42.669995 , longitude: -70.636305, size: 8130, bedrooms: 6, bathrooms: 4, pricing: 327, description: "",max_num_guests: 12 )

# Listing.create(name: "Manderley Mansion", latitude: 41.974837 , longitude: -70.028289, size: 7200, bedrooms: 12, bathrooms: 6, pricing: 267, description: "On the cape of Rhode Island", max_num_guests: 26 )

# Listing.create(name: "Clairmore", latitude: 51.408810 , longitude: -3.397150, size: 6806, bedrooms: 15, bathrooms: 5, pricing: 290, description: "Named and built by a wealthy Scottish tradesman that fell in love with an heiress from spain. Clairmore originally posessed another name, but soon became imfamous after the tradesman's lover jumped form the tower. Many stories errupted from the tragedy, but the tradesman was never seen again. Few dare enter, are you scared?", max_num_guests: 30 )

# Listing.create(name: "Thrushcross Grange", latitude: 51.571607 , longitude: -2.782845, size: 3400, bedrooms: 6, bathrooms: 4, pricing: 180, description: "Although the size pales in comparison to most of the estates on our list, the elaborate woodwork and winding hallways make Thrushcross Grange feel much larger than it is. Some report getting lost for days, swearing to the home's vast size. Delusion is a popular theme. We hope you'll come join us...",max_num_guests: 12 )

# Listing.create(name: "Hill House", latitude: 44.771720 , longitude: -70.364897, size: 5400, bedrooms: 6, bathrooms: 5, pricing: 420, description: "The guests never really leave Hill House. Quaint, charming, if only one knew why the tragedies kept occuring. One family after the other, year after year. Hill house love's it's families. But that should't deter you, we limit stays to a week, day 8 is when it starts.",max_num_guests: 8 )

# Listing.create(name: "Thornfield Hall", latitude: 44.225507 , longitude: -68.324317, size: 12666, bedrooms: 16, bathrooms: 8, pricing: 380, description: "Many miles from Bass harbor, aptly named for the deep waling sounds made when the East wind blows across the seaside caverns, lies Thornfield Hall. The peculiar thing is that the deep music from those distant caverns can be heard more clearly from Thornfield Hall than from other locations much nearer to the source. Guests also claim to hear music at night, but no one has ever been able to record it or describe it. They also seem to forget it before their last day. It's a strange thing, you see, because during their stay they will speak of nothing else but the beuty of the quaint sound. I've been living here nearly 230 years and have never heard it once. I think they are all crazy, but guests are guests I suppose.  ",max_num_guests: 30 )

# Listing.create(name: "Gardencourt", latitude:  , longitude: , size: 12666, bedrooms: 16, bathrooms: 8, pricing: 380, description: "Named from the many gardens on the massive grounds, but namely for the private garden of Lady Elling, situated in the center courtyard. Filled with a rare breed of rose that flourish here.",max_num_guests: 30 )

# Listing.create(name: "The Castellated Abbey", latitude:  , longitude: , size: 12666, bedrooms: 16, bathrooms: 8, pricing: 380, description: "",max_num_guests: 30 )

# Listing.create(name: "Barton Cottage", latitude:  , longitude: , size: 12666, bedrooms: 16, bathrooms: 8, pricing: 380, description: "",max_num_guests: 30 )

# Listing.create(name: "Satishouse", latitude:  , longitude: , size: 12666, bedrooms: 16, bathrooms: 8, pricing: 380, description: "With the clocks all stopped at 20 'til nine.",max_num_guests: 30 )

# Listing.create(name: "Wildfell Hall", latitude:  , longitude: , size: 12666, bedrooms: 16, bathrooms: 8, pricing: 380, description: "",max_num_guests: 30 )

# Listing.create(name: "House of Usher", latitude:  , longitude: , size: 12666, bedrooms: 16, bathrooms: 8, pricing: 380, description: "",max_num_guests: 30 )

# Listing.create(name: "Castle Udolphe", latitude:  , longitude: , size: , bedrooms: , bathrooms: , pricing: , description: "", max_num_guests: )

# Listing.create(name: "Seven Gables", latitude:  , longitude: , size: 7777, bedrooms: 7, bathrooms: 7, pricing: 777, description: "We wish you the best of luck with your stay here at Seven Gables.", max_num_guests: 17 )

# Listing.create(name: "Pemberly Brook", latitude:  , longitude: , size: , bedrooms: , bathrooms: , pricing: , description: "Large, cold, and mostly..well, mostly all stone. At least the fireplaces seem to light themselves.", max_num_guests: )

# Listing.create(name: "Ravenhurst", latitude:  , longitude: , size: , bedrooms: , bathrooms: , pricing: , description: "", max_num_guests: )

# Listing.create(name: "Skulagato Row", latitude:  , longitude: , size: , bedrooms: , bathrooms: , pricing: , description: "", max_num_guests: )

# Listing.create(name: "Misselthwaite Manor", latitude:  , longitude: , size: , bedrooms: , bathrooms: , pricing: , description: "", max_num_guests: )

# Listing.create(name: "", latitude:  , longitude: , size: , bedrooms: , bathrooms: , pricing: , description: "", max_num_guests: )

