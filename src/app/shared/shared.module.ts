import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MortgageFormulaDirectiveModule } from '../_directives/mortgage-formula.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MortgageFormulaDirectiveModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MortgageFormulaDirectiveModule
    ]
})
export class SharedModule {
}
