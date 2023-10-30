import { newSpecPage } from '@stencil/core/testing';
import { LachsButton } from '../lachs-button';

describe('lachs-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LachsButton],
      html: `<lachs-button></lachs-button>`,
    });
    expect(page.root).toEqualHtml(`
      <lachs-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lachs-button>
    `);
  });
});
