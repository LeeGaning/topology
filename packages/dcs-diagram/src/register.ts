import { registerNode } from '@topology/core';

import { dcsTxt, dcsTxtIconRect, dcsTxtTextRect } from './dcstxt';

export function register() {
  registerNode('dcsTxt', dcsTxt, null, null, null);
  // registerNode('dcsTxt', dcsTxt, null, dcsTxtIconRect, dcsTxtTextRect);
}
