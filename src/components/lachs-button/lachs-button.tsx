import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lachs-button',
  styleUrl: 'lachs-button.scss',
  shadow: true,
})
export class LachsButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
