const { MongoClient } = require('mongodb');

async function main() {
    const url = 'mongodb+srv://shubdb:it880s9198@cluster0.gesxnbt.mongodb.net/?retryWrites=true&w=majority'

    const client = new MongoClient(url);

    try {
        await client.connect();
        await listDatabases(client);
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("databases");
    databasesList.databases.forEach(db => {
        console.log(`-${db.name}`);
    })
}

