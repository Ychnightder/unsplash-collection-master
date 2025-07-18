// import { pool } from "../../config/connection";
//
// async function testConnection() {
//   try {
//     const db = pool;
//     const [rows] = await db.query("SELECT 1 + 1 AS result");
//     console.log("🧪 Test query result: ", (rows as any)[0].result); // Should print 2
//   } catch (err) {
//     console.error("❌ Database connection failed:", err);
//   } finally {
//   }
// }
