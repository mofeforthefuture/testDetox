describe("Mofe's test", () => {
  before(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have hello text', async () => {
    await expect(element(by.id('title'))).toBeVisible();
  });
  it('should type bluebird3000 text', async () => {
    const input = element(by.id('input'));
    await input.typeText('bluebird3000 is awesome');
  });
  it('should tap the submit button ', async () => {
    await element(by.id('button')).tap();
  });

  it('should alert typed text', async () => {
    await expect(
      element(by.text('bluebird3000 is awesome')).atIndex(1),
    ).toBeVisible();
  });

  // it('should have welcome screen', async () => {
  //   await expect(element(by.id('welcome'))).toBeVisible();
  // });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
