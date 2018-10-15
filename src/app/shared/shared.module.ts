import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatToolbarModule,
        MatDialogModule,
        MatCardModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatToolbarModule,
        MatDialogModule,
        MatCardModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ]
})
export class SharedModule {
}
