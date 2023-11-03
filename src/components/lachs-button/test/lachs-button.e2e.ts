import { newE2EPage } from '@stencil/core/testing';

describe('lachs-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lachs-button></lachs-button>');

    const element = await page.find('lachs-button');
    expect(element).toHaveClass('hydrated');
  });
});
