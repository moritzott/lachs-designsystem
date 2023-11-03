import { Component, Host, Prop, h } from '@stencil/core';
import { ClassNames } from '../../interfaces/types';

@Component({
  tag: 'lachs-button',
  styleUrl: 'lachs-button.scss',
  shadow: true,
})
export class LachsButton {

  @Prop() label: string = "";

  @Prop() type: 'primary' | "secondary" | "tertiary"  = "primary"

  render() {


    const buttonClasses: ClassNames = {
      primary: this.type === 'primary',
      secondary: this.type === 'secondary'
    }

    return (
      <Host>
        <button class={buttonClasses}>{this.label}</button>
      </Host>
    );
  }

}
