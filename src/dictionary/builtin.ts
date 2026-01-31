import type { Dictionary } from './schema';
import { allEntries } from './entries';

const BUILTIN_DICTIONARY_UPDATED_AT = '2026-01-28T00:00:00.000Z';

export const builtinDictionary: Dictionary = {
  version: '0.2.0',
  updatedAt: BUILTIN_DICTIONARY_UPDATED_AT,
  entries: allEntries,
};
