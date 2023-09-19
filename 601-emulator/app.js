// <imports>
import { MongoClient } from 'mongodb'
// </imports>

// <client>
const client = new MongoClient(
  'mongodb://localhost:C2y6yDjf5%2FR%2Bob0N8A7Cgv30VRDJIWEHLM%2B4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw%2FJw%3D%3D@localhost:10255/admin?ssl=true&retrywrites=false',
  { tlsAllowInvalidCertificates: true }
)

await client.connect()
// </client>

// <resources>
const database = client.db('cosmicworks')

const collection = database.collection('products')
// </resources>

// <upsert>
const item = {
  name: 'Kiama classic surfboard'
}

await collection.insertOne(item)
// </upsert>

process.exit()
