module.exports = {
  name: 'login',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/login',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
