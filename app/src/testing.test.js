import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils'
import { VBtn } from 'vuetify/components';

describe('testing', () => {
  test('should work', () => {
    const wrapper = mount(VBtn, {
      slots: {
        default: 'Hello',
      },
    });

    const button = wrapper.get('button');

    expect(button.html()).toContain('Hello');
  });
})
