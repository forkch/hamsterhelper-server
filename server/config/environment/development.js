'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/hamsterhelper-dev'
  },

  seedDB: false,
  filestorage : require('../../components/filestorage/s3.js'),
  s3: {
    awsAccessKey: 'AKIAIBV5YYAX74PRZJGA',
    awsSecretKey: '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',
    s3BucketHamsterImages: 'hamsterhelper-dev-hamster-images'
  }
};
