import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroseis'
})
export class FiltroseisPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
