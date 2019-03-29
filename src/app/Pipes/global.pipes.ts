import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filterBy',
    pure: false
})
export class FilterBy implements PipeTransform {
    transform(allTableData, filterText,closestate:false) {
        // if (!selectedColumn || selectedColumn.trim() == " ") {
        //     return allTableData;
        // }
        if(filterText && closestate){
            return allTableData.filter(x => x.productName.indexOf(filterText) >= 0);
        }
        else{
            return [];
        }
    }
}