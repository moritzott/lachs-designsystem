import { newSpecPage } from '@stencil/core/testing';
import { LachsLink } from '../lachs-link';

describe('lachs-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LachsLink],
      html: `<lachs-link></lachs-link>`,
    });
    expect(page.root).toEqualHtml(`
      <lachs-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lachs-link>
    `);
  });
});
