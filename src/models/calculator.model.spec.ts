import { NumericKeys } from '../enums/numeric-keys.enum';
import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ActionKeys } from '../enums/action-keys.enum';

describe('CalculatorModel', (): void => {

  let calculator: ICalculatorModel;

  beforeEach((): void => {
    calculator = new CalculatorModel();
  });

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {

    expect(calculator).toBeDefined();

  });

  it('should have an empty display on init', (): void => {

    // Act
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('');

  });

  it('should display `1` when the `1` key is pressed', (): void => {

    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('1');

  });

  it('should display `2` when the `2` key is pressed', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2');

  });

  it('should display `98` when the `9` key is pressed followed by the `8` key', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('98');
  
  });

  it('should display 9-5 when the 9 key is pressed followed by minus followed by 5', (): void => {
    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.FIVE);
  
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual(9-5);
    });

  it('should display 4 when the 9 key is pressed followed by minus followed by 5 followed by equal', (): void => {
    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.FIVE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    
    const displayValue: string = calculator.display();
    
    expect(displayValue).toEqual(45);
    });

  it('should display 4*3 when the 4 key is pressed followed by mulptiply followed by 3', (): void => {
    calculator.pressNumericKey(NumericKeys.FOUR);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.THREE);
  
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual(9-5);
    });

  it('should display 12 when the 4 key is pressed followed by multiply followed by 3 followed by equal', (): void => {
    calculator.pressNumericKey(NumericKeys.FOUR);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    
    const displayValue: string = calculator.display();
    
    expect(displayValue).toEqual(12);
    });
});