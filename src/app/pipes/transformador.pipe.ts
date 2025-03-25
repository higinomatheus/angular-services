import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformador'
})
export class TransformadorPipe implements PipeTransform {

  transform(value: string | null | undefined, name: string | null | undefined, token: number | null | undefined): string {
    return (value || '') + ' - ' + name + ' - ' + token;
  }

}
