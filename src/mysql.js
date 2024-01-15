
import mysql from 'mysql';


export const mysqlDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
})

// // export async function connect() {
//     try {
//         mysqlDB.connect((err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("Ket noi thanh cong");
//             }
//         }); // closing parenthesis for mysqlDB.connect
//     } catch (error) {
//         console.error(error);
//     }
// } // closing brace for connect function

export async function connect() {
    try {
        mysqlDB.connect((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Ket noi thanh cong");
            }
        }); // closing parenthesis for mysqlDB.connect
    } catch (error) {
        console.error(error);
    }
} // closing brace for connect function