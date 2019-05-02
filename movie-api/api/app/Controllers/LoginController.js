const dbConnection = require('../../database/mySQLconnect');

require('dotenv').config();

class LoginController {
    async authorizeUser(ctx) {
        return new Promise((resolve, reject) => {
            const match = ctx.params.user_id.match(/[^0-9]+/);  // We expect an all digit user-id.
            if (match) {
                console.log('about to return because user input contains non-digit characters..');
                return reject("Incorrect login credentials.");
            }
            let query = "SELECT * FROM users WHERE admin_id = ?";
	    console.log('About to run this query.', query);
	    console.log('ctx.params.user_id is', ctx.params.user_id);
            dbConnection.query(
                {
                    sql: query,
                    values: [ctx.params.user_id]
                }, (error, tuples) => {
                    if (error) {
                        return reject(error);
                    }
                    if (tuples.length === 1) {
                        console.log('from LoginController. About to return ', tuples[0]);
                        ctx.body = {
                            status: "OK",
                            user: tuples[0],
                        };
                        return resolve();
                    }
                    return reject("No such user.");
                }
            )
        }).catch(err => {
            ctx.body = {
                status: "Failed",
                error: err,
                user: null
            };
        });

    }

}

module.exports = LoginController;
