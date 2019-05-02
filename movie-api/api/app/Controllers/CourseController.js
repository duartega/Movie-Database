const dbConnection = require('../../database/mySQLconnect');
const dateFormat = require('dateformat');

function now() {
    return dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
}

let count = 0;

class CourseController {
    constructor() {
        console.log('Constructor of CourseController is called.');
    }
    async allCoursesForTerm(ctx) {
        return new Promise((resolve, reject) => {
            const query = `
SELECT  cb.subject, cb.catalog, cb.term, cb.course_title, 
	cb.units, cc.component, cc.class_number,
	cc.section, ci.instructor_fName, ci.instructor_lName,
    mp.meeting_pattern, mp.start_time, mp.end_time, mp.facility_name
FROM 
	course_base cb,
	course_components cc 
		left join course_instructors ci
			left join meeting_pattern mp
				on (ci.class_number = mp.class_number)
			on (cc.class_number = ci.class_number)
where 	cb.ge_designation is not null AND
	cb.class_number = cc.parent_class_number 
    ORDER BY cb.term, cb.subject, cb.catalog, cb.units
    LIMIT 100
                        `;
            dbConnection.query({
                sql: query,
                values: [ctx.params.term, ctx.params.subject]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in CourseController::allCourses", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }

    async allGECoursesForTerm(ctx) {
        return new Promise((resolve, reject) => {
            const query = ` 
SELECT  cb.subject, cb.catalog, cb.term, cb.course_title, 
	cb.units, cc.component, cc.class_number,
	cc.section, ci.instructor_fName, ci.instructor_lName,
    mp.meeting_pattern, mp.start_time, mp.end_time, mp.facility_name
FROM 
	course_base cb,
	course_components cc 
		left join course_instructors ci
			left join meeting_pattern mp
				on (ci.class_number = mp.class_number)
			on (cc.class_number = ci.class_number)
where 	cb.ge_designation is not null AND
cb.class_number = cc.parent_class_number AND cb.term = ?
    ORDER BY cb.term, cb.subject, cb.catalog, cb.units
    limit 100;
                        `;
            dbConnection.query({
                sql: query,
                values: [ctx.params.term, ctx.params.subject]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in CourseController::allCourses", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }

    async allGECoursesBySubject(ctx) {
        return new Promise((resolve, reject) => {
            const query = `
SELECT  cb.subject, cb.catalog, cb.term, cb.course_title, 
	cb.units, cc.component, cc.class_number,
	cc.section, ci.instructor_fName, ci.instructor_lName,
    mp.meeting_pattern, mp.start_time, mp.end_time, mp.facility_name
FROM 
	course_base cb,
	course_components cc 
		left join course_instructors ci
			left join meeting_pattern mp
				on (ci.class_number = mp.class_number)
			on (cc.class_number = ci.class_number)
where cb.ge_designation is not null AND
    cb.class_number = cc.parent_class_number AND cb.term = ? AND cb.subject = ?
    ORDER BY cb.term, cb.subject, cb.catalog, cb.units;

                        `;
            dbConnection.query({
                sql: query,
                values: [ctx.params.term, ctx.params.subject]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in CourseController::allCourses", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }

    async allCoursesBySubject(ctx) {
        return new Promise((resolve, reject) => {
            const query = `
SELECT  cb.subject, cb.catalog, cb.term, cb.course_title, 
	cb.units, cc.component, cc.class_number,
	cc.section, ci.instructor_fName, ci.instructor_lName,
    mp.meeting_pattern, mp.start_time, mp.end_time, mp.facility_name
FROM 
	course_base cb,
	course_components cc 
		left join course_instructors ci
			left join meeting_pattern mp
				on (ci.class_number = mp.class_number)
			on (cc.class_number = ci.class_number)
where 
    cb.class_number = cc.parent_class_number AND cb.term = ? AND cb.subject = ?
    ORDER BY cb.term, cb.subject, cb.catalog, cb.units;

                        `;
            dbConnection.query({
                sql: query,
                values: [ctx.params.term, ctx.params.subject]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in CourseController::allCourses", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }


    async courseInfoByInstructor_id(ctx){
        return new Promise((resolve, reject) =>{
            let query= `SELECT  cb.subject, cb.catalog, cb.term, cb.course_title, 
	cb.units, cc.component, cc.class_number,
	cc.section, ci.instructor_fName, ci.instructor_lName,
    mp.meeting_pattern, mp.start_time, mp.end_time, mp.facility_name
FROM 
	course_base cb,
	course_components cc 
		left join course_instructors ci
			left join meeting_pattern mp
				on (ci.class_number = mp.class_number)
			on (cc.class_number = ci.class_number)
where cb.class_number = cc.parent_class_number AND ci.instructor_id = ?
    ORDER BY cb.term, cb.subject, cb.catalog, cb.units;
`;
            const id = ctx.params.instructor_id;
            dbConnection.query({
                sql: query,
                values: [id]
            }, (error, tuples) => {
                if (error) {
                    return reject(`Database issue in courseDescriptionForSubjectAndCatalog: Error: ${error}`);
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

    async courseInfoForSubjectAndCatalog(ctx) {
        return new Promise((resolve, reject) => {
            let query = `SELECT  cb.subject, cb.catalog, cb.term, cb.course_title, 
	cb.units, cc.component, cc.class_number,
	cc.section, ci.instructor_fName, ci.instructor_lName,
    mp.meeting_pattern, mp.start_time, mp.end_time, mp.facility_name
FROM 
	course_base cb,
	course_components cc 
		left join course_instructors ci
			left join meeting_pattern mp
				on (ci.class_number = mp.class_number)
			on (cc.class_number = ci.class_number)
where cb.class_number = cc.parent_class_number AND cb.subject = ? AND cb.catalog= ?
    ORDER BY cb.term, cb.subject, cb.catalog, cb.units
    `;
            const subject = ctx.params.subject, catalog = ctx.params.catalog;

            dbConnection.query({
                sql: query,
                values: [subject, catalog]
            }, (error, tuples) => {
                if (error) {
                    return reject(`Database issue in courseDescriptionForSubjectAndCatalog: Error: ${error}`);
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

module.exports = CourseController
