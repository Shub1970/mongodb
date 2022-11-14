const { MongoClient } = require('mongodb');

async function main() {
    const url = 'mongodb+srv://shubdb:it880s9198@cluster0.gesxnbt.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(url);
    try {
        await client.connect();
        await findOneByName(client, 383777)
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await client.close();
    }
}
main().catch(console.error);

async function findOneByName(client, accountId) {
    const result = await client.db('sample_analytics').collection("accounts").findOne({ account_id: accountId })

    if (result) {
        console.log(result);
    }
    else {
        console.log("no data");
    }
}

async function 