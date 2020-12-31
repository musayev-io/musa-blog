
const epsagon = require('epsagon');
const epsagonHandler = require('../sls/functions/handler.js');



epsagon.init({
    token: '374923e6-8272-4e79-923f-c3912af9bc14',
    appName: 'musa-blog-dev',
    traceCollectorURL: undefined,
    metadataOnly: Boolean(0),
    labels: [],
    urlPatternsToIgnore: [],
    ignoredKeys: [],
});

exports.nuxt = epsagon.lambdaWrapper(epsagonHandler.nuxt);
