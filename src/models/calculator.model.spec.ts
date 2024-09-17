import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

describe('CalculatorModel', (): void => {

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {

    const calculator: ICalculatorModel = new CalculatorModel();

    expect(calculator).toBeDefined();

  });

});

it('should have an empty display on init', (): void => {

  // Assemble
  const calculator: ICalculatorModel = new CalculatorModel();

  // Act
  const displayValue: string = calculator.display();

  // Assert
  expect(displayValue).toEqual('');

});

it('should display `1` when the `1` key is pressed', (): void => {

  // Assemble
  const calculator: ICalculatorModel = new CalculatorModel();

  // Act
  calculator.pressNumericKey(NumericKeys.ONE);
  const displayValue: string = calculator.display();

  // Assert
  expect(displayValue).toEqual('1');

});
