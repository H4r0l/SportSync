// import Tournaments from "@/models/Tournaments";
// import connectDB from "@/utils/db";

// export default async function handler(req, res) {
//     const { method } = req;
//     await Tournaments.connectDB();
//     switch (method) {
//         case "GET":
//             try {
//                 const tournaments = await Tournaments.find({});
//                 res.status(200).json({ success: true, data: tournaments });
//             } catch (error) {
//                 res.status(400).json({ success: false });
//             }
//             break;
//         case "POST":
//             try {
//                 const tournament = await Tournaments.create(req.body);
//                 res.status(201).json({ success: true, data: tournament });
//             } catch (error) {
//                 res.status(400).json({ success: false });
//                 console.log(error);
//             }
//             break;
//         default:
//             res.status(400).json({ success: false });
//             break;
//     }
// }