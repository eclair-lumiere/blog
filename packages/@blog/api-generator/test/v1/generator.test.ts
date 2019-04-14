import * as path from 'path';
import * as rimraf from 'rimraf';

import generator from '../../lib/v1/index';


describe('@blog/api-generator:entry', (): void => {

  const TEST_CONFIG_PATH = path.join(__dirname, './fixtures/config-sample.yml');
  const TEST_MD_DIR = path.join(__dirname, './fixtures/posts');

  const TMP_BUILD_DIR = path.join(__dirname, '/build/');
  const TMP_DIST_DIR = path.join(__dirname, '/dist/');


  beforeAll((done): void => {
    rimraf(TMP_DIST_DIR, (): void => {
      done();
    });
  });

  it('# should one-step generate all offline-api correctly', async (): Promise<void> => {
    await generator.generate(TEST_CONFIG_PATH, TEST_MD_DIR, TMP_DIST_DIR);
  });

  it('# should generate at other folder eg dev-time correctly', async (): Promise<void> => {
    await generator.generate(TEST_CONFIG_PATH, TEST_MD_DIR, TMP_BUILD_DIR);
  });

});
