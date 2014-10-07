'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/hamsterhelper-dev'
  },
  seedDB: true,
  filestorage : require('../../components/filestorage/s3.js'),
  s3: {
    awsAccessKey: 'AKIAIBV5YYAX74PRZJGA',
    awsSecretKey: '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',
    s3BucketHamsterImages: 'hamsterhelper-dev-hamster-images'
  }
};
