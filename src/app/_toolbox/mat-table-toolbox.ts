import { MatTableDataSource } from '@angular/material';

export class MatTableToolbox {

    /**
     * Filter management method
     * @param filterValue : view value of the filter
     */
    public static applyFilter(dataSource: MatTableDataSource<any>, filterValue?: string) {
        if (filterValue) {
            dataSource.filter = filterValue.trim().toLowerCase();
        } else {
            // permet de réinit la table
            dataSource.filter = '';
        }
    }

}
