import styled from 'styled-components';

export { default as Input } from './Input';
export { default as InputController } from './Input/controller';

export { default as Select } from './Select';
export { default as SelectController } from './Select/controller';

export { default as CountrySelect } from './country_select';
export { default as CountrySelectController } from './country_select/controller';

export { default as StateSelect } from './state_select';
export { default as StateSelectController } from './state_select/controller';

export { default as CitySelect } from './city_select';
export { default as CitySelectController } from './city_select/controller';

export { default as TextArea } from './TextArea';
export { default as TextAreaController } from './TextArea/controller';

export { default as Checkbox } from './Checkbox';
export { default as CheckboxController } from './Checkbox/controller';

export const Form = styled.form`
  // Overriding ant styles
  &&& {}
`;

export default Form;