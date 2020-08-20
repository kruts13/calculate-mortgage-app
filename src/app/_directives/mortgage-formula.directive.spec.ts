import { MortgageFormulaDirective } from './mortgage-formula.directive';

describe('MortgageFormulaDirective', () => {

  const directive = new MortgageFormulaDirective();
  let r = 5/(12 * 100);
  let n = 12 * 30;
  let num = r * Math.pow((1 + r), n);
  let deno = Math.pow((1 + r), n) - 1;

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should return the right numerator in the formula', () => {
    expect(directive.formNumerator(r, n)).toBe(num);
  });

  it('should return the right denominator in the formula', () => {    
    expect(directive.formDenominator(r, n)).toBe(deno);
  });

  it('should return the right monthly payment in the formula', () => {
    let p: number = 300000;
    let formula = p * num/deno;
    expect(directive.formMortFormula(p, num, deno)).toBe(formula);
  });
});
