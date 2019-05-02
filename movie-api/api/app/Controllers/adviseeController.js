
const dbConnection = require('../../database/mySQLconnect');

class adviseeController    {
    constructor() {
        console.log('constructor of adviseeController.');
    }

    async postAdvisee(ctx) {
        return new Promise((resolve, reject) => {
            const S_ID = ctx.params.S_ID, F_Name = ctx.params.F_Name,
            L_Name = ctx.params.L_Name, T_Code = ctx.params.T_Code;
            let query = `Insert into Advisees values(?, ?, ?, ?)`;
            dbConnection.query({
                sql: query,
                values: [S_ID, F_Name, L_Name, T_Code]
            }, (error, tuples) => {
                if (error) {
                    return reject(`Database issue in showTimes: Error: ${error}`);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => {
            console.log("Database connection error.", err);
            ctx.status = 500,
            ctx.body = err
        });
    }

    async postAdviseeCalendar(ctx) {
        return new Promise((resolve, reject) => {
            const S_ID = ctx.params.s_id, appt_date_start = ctx.params.appt_date_start,
            appt_date_end = ctx.params.appt_date_end, fName = ctx.params.fName,
            lName = ctx.params.lName, email = ctx.params.email, phone = ctx.params.phone,
            description = ctx.params.description, advisor_name = ctx.params.advisor_name,
            advisor_id = ctx.params.advisor_id;
            let query = `Insert into advisee_calendar values(?, "2019-4-20 13:23:44", "2019-4-20 14:23:44", ?, ?, ?, ?, ?, ?, ?)`;
            dbConnection.query({
                sql: query,
                values: [S_ID, F_Name, L_Name, T_Code]
            }, (error, tuples) => {
                if (error) {
                    return reject(`Database issue in showTimes: Error: ${error}`);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => {
            console.log("Database connection error.", err);
            ctx.status = 500,
            ctx.body = err
        });
    }
}


module.exports = adviseeController;
