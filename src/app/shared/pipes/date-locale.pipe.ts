import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateLocale'
})
export class DateLocalePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: Date, ...args: string[]): string {
    const loc: string = args[0] ? args[0] : "en-IN";
    // return new Intl.DateTimeFormat(loc, {
    //   day: '2-digit',
    //   month: 'long',
    //   year: 'numeric',
    //   hour: '2-digit',
    //   minute: '2-digit'
    // }).format(new Date(value));
    return new Intl.DateTimeFormat(loc, {
      month: 'long'
    }).format();
  }

}
