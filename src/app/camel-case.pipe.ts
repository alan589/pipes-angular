import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return this.capitalize(value);
  }

  capitalize(value: string){
    let texto = '';
    value.split(' ').forEach(word => {
      texto += (word[0].toUpperCase() + word.slice(1).toLowerCase()) + ' ';
    });
    return texto;
  }

}
