import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realisateur'
})
export class RealisateurPipe implements PipeTransform {

  transform(nom : string): string {
    return '**'+nom+'**';
  }

}
