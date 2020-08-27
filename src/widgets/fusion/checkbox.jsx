import React from 'react';
import { Checkbox } from '@alifd/next';

export default function radio(p) {
  return (
    <Checkbox
      disabled={p.disabled || p.readonly}
      onChange={checked => p.onChange(p.name, checked)}
      checked={p.value}
    />
  );
}