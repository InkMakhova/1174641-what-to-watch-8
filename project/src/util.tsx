import {monthNames} from './const';

export function formatDate(dateISO: string): string {
  const date = new Date(dateISO);

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth();

  return `${date.getFullYear()}-${month}-${day}`;
}

export function humanizeDate(dateISO: string): string {
  const date = new Date(dateISO);
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}


