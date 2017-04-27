/**
    * @desc Teste da API
    */

'use strict';

const teste = require('ava');
const server = require('../index.js');


teste('teste de endpoint | POST /', t => {
    const req = {
        method: 'POST',
        url: '/',
        payload: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non ultricies diam. Aenean ac molestie diam. Vestibulum arcu turpis, placerat. '
    };

    return server.inject(req)
        .then(res => {
            const d = JSON.parse(res.payload);
            console.log('MD5: ' + d);
            t.is(typeof(d.hash).toString(), 'string');
        });
});
