import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: string[], ...args: any[]): any {

    if(value.length === 0 || args.length === 0) return value;

    let filter = args[0];

    return value.filter(
      v => v.toLocaleLowerCase().indexOf(filter) !== -1
    )
  }

}
