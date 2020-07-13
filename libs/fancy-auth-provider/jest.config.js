module.exports = {
  name: 'fancy-auth-provider',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/fancy-auth-provider',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
