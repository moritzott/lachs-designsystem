import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lachs-link',
  styleUrl: 'lachs-link.scss',
  shadow: true,
})
export class LachsLink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
