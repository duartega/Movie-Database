const Authorize = require('../app/Authorize.js');

/*
|--------------------------------------------------------------------------
| Default router
|--------------------------------------------------------------------------
|
| Default router is used to define any routes that don't belong to a
| controller. Also used as a parent container for the other routers.
|
*/

// All websites must use this after the port number
// http://cs.sonoma.edu:8230/api/v1     -     alternate port :8231
const router = require('koa-router')({
    prefix: '/api/v1'
});

router.get('/', function (ctx) {
    return ctx.body = 'What is up?';
});


/*
|--------------------------------------------------------------------------
| Students router
|--------------------------------------------------------------------------
|
| Description
|
*/

const LoginController = new (require('../app/Controllers/LoginController.js'))();
const loginRouter = require('koa-router')({
    prefix: '/login'
});
// Now added 5461929 which is my i.d.
loginRouter.get('/:user_id', LoginController.authorizeUser, (err) => console.log("routers.js: loginRouter error:", err));


const adviseeController = new (require('../app/Controllers/adviseeController.js'))();
const adviseeRouter = require('koa-router')({
    prefix: '/advisee'
});

adviseeRouter.post('/post/:S_ID/:F_Name/:L_Name/:T_Code', Authorize('admin'), adviseeController.postAdvisee, (err) => console.log(err));

/**
 * Register all of the controllers into the default controller.
 */
router.use(
    '',
    loginRouter.routes(),
    adviseeRouter.routes(),
);

module.exports = function (app) {
    app.use(router.routes());
    app.use(router.allowedMethods({throw: true}));
};
