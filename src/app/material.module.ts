import { MatSortModule,MatInputModule,MatTableModule,MatCheckboxModule,MatFormFieldModule,MatPaginatorModule,MatToolbarModule,MatSidenavModule,MatButtonModule,MatIconModule,MatMenuModule,MatListModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule ({
    imports:[MatSortModule,MatInputModule,MatTableModule,MatCheckboxModule,MatFormFieldModule,MatPaginatorModule,MatToolbarModule,MatSidenavModule,MatButtonModule,MatIconModule,MatMenuModule,MatListModule],
    exports:[MatSortModule,MatInputModule,MatTableModule,MatCheckboxModule,MatFormFieldModule,MatPaginatorModule,MatToolbarModule,MatSidenavModule,MatButtonModule,MatIconModule,MatMenuModule,MatListModule]
})

export class MaterialModule{

}