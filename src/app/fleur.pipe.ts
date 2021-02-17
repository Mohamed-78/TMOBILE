import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fleur'
})
export class FleurPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
