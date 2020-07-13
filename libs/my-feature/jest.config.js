module.exports = {
  name: 'my-feature',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/my-feature',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
