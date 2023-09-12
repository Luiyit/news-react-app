import { isNumber } from './number';

export function numberToPixels(num: number | string): string {
  if (!isNumber(num)) return num as string;
  
  return `${num}px`
}