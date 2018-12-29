import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

@Pipe({name: 'image'})
export class ImagePipe implements PipeTransform {
  transform(value: string, size: string): string {
    return environment.CDN_URL + value;
  }
}
