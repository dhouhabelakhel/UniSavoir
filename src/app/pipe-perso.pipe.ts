import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePerso'
})
export class PipePersoPipe implements PipeTransform {

  transform(value: string): string {

    const words = value.split(' ');
    const transformedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return ` ${transformedWords.join(' ')} `;
  } }

