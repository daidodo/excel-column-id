import { assertTrue } from '@dozerg/condition';

/**
 * Generate IDs similar to Microsoft Excel column IDs:
 * ```txt
 *   A, B, C, ...,
 *   AA, AB, AC, ...,
 *   BA, BB, BC, ...,
 *   ...
 * ```
 *
 * @param index - Index of the ID, starting from 0.
 * @returns ID string
 */
export default function generateId(index: number): string {
  assertTrue(index >= 0, `Invalid index: ${index}`);
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const a = index % LETTERS.length;
  const b = Math.floor(index / LETTERS.length);
  const n = LETTERS.slice(a, a + 1);
  if (!b) return n;
  return generateId(b - 1) + n;
}
