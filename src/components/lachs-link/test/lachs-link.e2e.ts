import { newE2EPage } from '@stencil/core/testing';

describe('lachs-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lachs-link></lachs-link>');

    const element = await page.find('lachs-link');
    expect(element).toHaveClass('hydrated');
  });
});
