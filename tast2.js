const { MongoClient } = require('mongodb');

async function main() {
    const url = 'mongodb+srv://shubdb:it880s9198@cluster0.gesxnbt.mongodb.net/?retryWrites=true&w=majority';

    const client = new MongoClient(url);

    try {
        await client.connect();
        /*  await createListing(client,
             {
                 name: "lovely Loft",
                 summary: "A charming loft in paris",
                 bedrooms: 1,
                 bathrooms: 1,
                 beds: 5
             }
         ) */
        await createMultipleListings(client, [
            {
                name: "infinite views",
                summary: "mondern home with infinite views from the infinity pool",
                property_type: "House",
                bedrooms: 5,
                bathrooms: 4.5,
                beds: 1
            },
            {
                name: "private room in London",
                property_type: "Apartment",
                bedrooms: 1,
                bathrooms: 1
            },
            {
                name: "Beautiful beach House",
                summary: "Enjoy relaxed beach living in this house with a private beach",
                bedrooms: 4,
                beds: 7,
                last_review: new Date()
            }
        ]);
        await listNameDatabases(client);
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await client.close();
    }
}

main().catch(console.error);

async function listNameDatabases(client) {
    const listData = await client.db().admin().listDatabases();
    listData.databases.forEach((data) => {
        console.log(`-${data.name}`)
    })
}

async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id:${result.insertedId}`);
}

async function createMultipleListings(client, newListings) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

    console.log(result.insertedIds);
}