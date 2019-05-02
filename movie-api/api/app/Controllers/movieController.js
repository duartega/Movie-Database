
const dbConnection = require('../../database/mySQLconnect');

class movieController    {
    constructor() {
        console.log('constructor of CourseCatalogController.');
    }

    async movieTitles(ctx) {

        return new Promise((resolve, reject) => {
            let query = `SELECT * FROM movies`;
            dbConnection.query(query, (error, tuples, fields) => {
                if (error) {
                    return reject(`Connection error in CourseCatalogController::movieTitles ${error}`);
                }
                ctx.body = tuples;
                console.log('movieTitles: returning', tuples.length, 'movie titles.');
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => {
            console.log("Database connection error.", err);
            ctx.status = 500,
            ctx.body = err
        });
    }


    async genres(ctx) {
        return new Promise((resolve, reject) => {
            console.log();
            const genre = ctx.params.genre;
            let query = `SELECT * FROM movies where genre = ?`;
            console.log(query);
            dbConnection.query({
                sql: query,
                values: [genre]
            }, (error, tuples) => {
                if (error) {
                    return reject(`Error when trying to retrieve genres for ${genre} --- 
                                    in genres. The error msg: ${error}`);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            })
        }).catch(err => {
            console.log(`Error in genres${genre}: ${err}`);
            ctx.body = {error: err};
            ctx.status = "Failed";
        });
    }


    async rating(ctx) {
        return new Promise((resolve, reject) => {
            const rating = ctx.params.rating;
            let query = `SELECT * from movies where rating = ?`;

            dbConnection.query({
                sql: query,
                values: rating
            }, (error, tuples) => {
                if (error) {
                    return reject(`Database issue in rating: Error: ${error}`);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => {
            console.log('Database connection error.', err);
            ctx.body = err;
        });
    }

    async theaters(ctx) {
        return new Promise((resolve, reject) => {
            const theaters = ctx.params.theaters;
            let query = `SELECT * from movieTheaters;`;

            dbConnection.query({
                sql: query,
                values: theaters
            }, (error, tuples) => {
                if (error) {
                    return reject(`Database issue in theaters: Error: ${error}`);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => {
            console.log('Database connection error.', err);
            ctx.body = err;
        });
    }

    async getCities(ctx) {
        return new Promise((resolve, reject) => {
            const cities = ctx.params.cities;
            let query = `SELECT * from cities;`;

            dbConnection.query({
                sql: query,
                values: cities
            }, (error, tuples) => {
                if (error) {
                    return reject(`Database issue in cities: Error: ${error}`);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => {
            console.log('Database connection error.', err);
            ctx.body = err;
        });
    }

    async showTimes(ctx) {
        return new Promise((resolve, reject) => {
            const showTimes = ctx.params.showTimes;
            let query = `SELECT * from showTimes;`;

            dbConnection.query({
                sql: query,
                values: showTimes
            }, (error, tuples) => {
                if (error) {
                    return reject(`Database issue in showTimes: Error: ${error}`);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => {
            console.log('Database connection error.', err);
            ctx.body = err;
        });
    }

}


module.exports = movieController;
