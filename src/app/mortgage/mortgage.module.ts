import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageCalculatorFormComponent } from './mortgage-calculator-form/mortgage-calculator-form.component';
import { SharedModule } from '../shared/shared.module';

export const mortgageRoutes: Routes = [
    {
        path: '',
        component: MortgageCalculatorFormComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(mortgageRoutes)
    ],
    declarations: [
        MortgageCalculatorFormComponent
    ],
    providers: []
})
export class MortgageModule {
}
