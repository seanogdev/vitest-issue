import { config } from '@vue/test-utils';
import { vuetifyPlugin } from '../src/vuetifyPlugin'
if (typeof window === 'object') {
  config.global.plugins = [vuetifyPlugin];
}
