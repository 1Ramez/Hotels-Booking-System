db.hotels.insertMany([
    {
        name: "Hilton Cairo",
        city: "Cairo",
        address: "Corniche El Nile",
        starRating: 5,
        description: "Luxury hotel overlooking the Nile.",
    },
    {
        name: "Marriott Zamalek",
        city: "Cairo",
        address: "Zamalek",
        starRating: 5,
        description: "Premium hotel in Zamalek.",
    },
    {
        name: "Steigenberger El Tahrir",
        city: "Cairo",
        address: "Tahrir Square",
        starRating: 4,
        description: "Modern business hotel.",
    },
    {
        name: "Helnan Palestine",
        city: "Alexandria",
        address: "Montaza",
        starRating: 5,
        description: "Beachfront luxury resort.",
    },
    {
        name: "Tolip Aswan",
        city: "Aswan",
        address: "Corniche Aswan",
        starRating: 4,
        description: "Beautiful Nile view.",
    },
    {
        name: "Movenpick El Gouna",
        city: "Hurghada",
        address: "El Gouna",
        starRating: 5,
        description: "Luxury Red Sea resort.",
    },
]);

db.users.insertMany([
    {
        firstName: "Ahmed",
        lastName: "Ali",
        email: "ahmed@example.com",
        phone: "01012345678",
        password: "123456",
    },
    {
        firstName: "Sara",
        lastName: "Mohamed",
        email: "sara@example.com",
        phone: "01198765432",
        password: "123456",
    },
    {
        firstName: "Omar",
        lastName: "Hassan",
        email: "omar@example.com",
        phone: "01234567890",
        password: "123456",
    },
    {
        firstName: "Mona",
        lastName: "Ibrahim",
        email: "mona@example.com",
        phone: "01555555555",
        password: "123456",
    },
]);

db.hotels.find();
db.rooms.insertMany([
    {
        hotelId: ObjectId("6a747cc54de2d49c1a1895c1"),
        roomNumber: 101,
        roomType: "Single",
        pricePerNight: 1200,
        capacity: 1,
        isAvailable: true,
    },
    {
        hotelId: ObjectId("6a747cc54de2d49c1a1895c1"),
        roomNumber: 102,
        roomType: "Double",
        pricePerNight: 1800,
        capacity: 2,
        isAvailable: true,
    },
    {
        hotelId: ObjectId("6a747cc54de2d49c1a1895c2"),
        roomNumber: 201,
        roomType: "Suite",
        pricePerNight: 3500,
        capacity: 4,
        isAvailable: false,
    },
    {
        hotelId: ObjectId("6a747cc54de2d49c1a1895c3"),
        roomNumber: 301,
        roomType: "Single",
        pricePerNight: 900,
        capacity: 1,
        isAvailable: true,
    },
    {
        hotelId: ObjectId("6a747cc54de2d49c1a1895c4"),
        roomNumber: 401,
        roomType: "Double",
        pricePerNight: 1600,
        capacity: 2,
        isAvailable: false,
    },
    {
        hotelId: ObjectId("6a747cc54de2d49c1a1895c5"),
        roomNumber: 501,
        roomType: "Suite",
        pricePerNight: 4200,
        capacity: 5,
        isAvailable: true,
    },
    {
        hotelId: ObjectId("6a747cc54de2d49c1a1895c6"),
        roomNumber: 601,
        roomType: "Family",
        pricePerNight: 2800,
        capacity: 6,
        isAvailable: true,
    },
]);

db.users.find();
db.rooms.find();
db.bookings.insertMany([
    {
        userId: ObjectId("6a747cde83cfb072439ed98a"),
        roomId: ObjectId("6a747d7b3becc4298df2f577"),
        checkInDate: ISODate("2026-08-15"),
        checkOutDate: ISODate("2026-08-18"),
        totalPrice: 3600,
        bookingStatus: "Confirmed",
    },
    {
        userId: ObjectId("6a747cde83cfb072439ed98b"),
        roomId: ObjectId("6a747d7b3becc4298df2f579"),
        checkInDate: ISODate("2026-08-20"),
        checkOutDate: ISODate("2026-08-25"),
        totalPrice: 17500,
        bookingStatus: "Confirmed",
    },
    {
        userId: ObjectId("6a747cde83cfb072439ed98c"),
        roomId: ObjectId("6a747d7b3becc4298df2f57b"),
        checkInDate: ISODate("2026-09-01"),
        checkOutDate: ISODate("2026-09-04"),
        totalPrice: 4800,
        bookingStatus: "Pending",
    },
    {
        userId: ObjectId("6a747cde83cfb072439ed98d"),
        roomId: ObjectId("6a747d7b3becc4298df2f57d"),
        checkInDate: ISODate("2026-09-10"),
        checkOutDate: ISODate("2026-09-15"),
        totalPrice: 14000,
        bookingStatus: "Confirmed",
    },
]);
db.bookings.find();
