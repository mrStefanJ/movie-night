import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  // transform(list: any[], searchMovie?: any): any {
  //   if(!list){
  //     return null;
  //   }

  //   if(!searchMovie){
  //     return list;
  //   }

  //   searchMovie = searchMovie.toLowerCase();

  //   return list.filter(data => {
  //     return JSON.stringify(data).toLowerCase().includes(searchMovie);
  //   });
  // }
  
  transform(list: any, value: [], key: []):any {
      value.forEach((name, index) => {
        if(name){
          list = list.filter((item: any) => {
            return (item[key[index]]
              .toString()
              .toLowerCase()
              .indexOf(name) !== -1)
          });
        }
      });
      return list;
  }
}
