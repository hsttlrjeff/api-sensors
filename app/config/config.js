/**
 * Created by jeffreyhostetler on 11/29/14.
 */
(function () {
    "use strict";
    module.exports = {
        port: process.env.port || 8080,
        allowOrigin: process.env.allowOrigin || '*',
        connectionString: process.env.connectionString || 'mongodb://testUser:j553093h@localhost:27017/testdb'
    };
})();
