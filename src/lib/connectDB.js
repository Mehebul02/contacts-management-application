// import { MongoClient, ServerApiVersion } from "mongodb";
// let db;
// export const ConnectDB = async () => {
//   if (db) return db;
//   try {
//     const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.po42dna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//     const client = new MongoClient(uri, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       },
//     });
//     db = client.db("contacts-management");
//     return db;
//   } catch (error) {
//     console.log(error);
//   }
// };
const {username,password}=process.env
export const uri = "mongodb+srv://"+username+":"+password+"@cluster0.po42dna.mongodb.net/contacts-management?retryWrites=true&w=majority&appName=Cluster0";
