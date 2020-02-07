'use strict';

const Hapi = require('@hapi/hapi');
const Routes = require('./Routes');

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.PORT ? '0.0.0.0' : 'localhost'
    });

    server.route(Routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
