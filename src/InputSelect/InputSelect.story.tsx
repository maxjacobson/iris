import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputSelect } from './InputSelect';
import { ParagraphMd } from '../Type';

const demoOptions = (
  <optgroup label="Option Group">
    <option value="" disabled hidden>
      Select something...
    </option>
    <option value="1">Value 1</option>
    <option value="2">Value 2 has a long label</option>
    <option value="3" disabled>
      Value 2 (Disabled)
    </option>
  </optgroup>
);

storiesOf('components/Inputs', module).add(
  'select',
  () => (
    <div>
      <div data-code>
        <InputSelect
          name="ExampleSelect1XL"
          id="ExampleSelect1XL"
          label="XL Select"
          size="xl"
        >
          {demoOptions}
        </InputSelect>
        <InputSelect
          name="ExampleSelect1Large"
          id="ExampleSelect1Large"
          label="LG Select"
          size="lg"
        >
          {demoOptions}
        </InputSelect>
        <InputSelect
          name="ExampleSelect1"
          id="ExampleSelect1"
          label="MD select (default)"
        >
          {demoOptions}
        </InputSelect>
        <InputSelect
          name="ExampleSelect1sm"
          id="ExampleSelect1sm"
          label="SM Select"
          size="sm"
        >
          {demoOptions}
        </InputSelect>
        <InputSelect
          name="ExampleSelect2"
          helperMsg={<ParagraphMd>I am helpful text!</ParagraphMd>}
          id="ExampleSelect2"
          label="Default with Helper Text"
        >
          {demoOptions}
        </InputSelect>
        <InputSelect
          name="ExampleSelect2"
          format="negative"
          id="ExampleSelect2"
          label="Negative"
          errorMsg={<ParagraphMd>This is a problem!</ParagraphMd>}
        >
          {demoOptions}
        </InputSelect>
        <InputSelect
          name="ExampleSelect3"
          format="positive"
          id="ExampleSelect3"
          label="Positive"
        >
          {demoOptions}
        </InputSelect>
        <InputSelect
          name="ExampleSelect4"
          id="ExampleSelect4"
          label="Disabled"
          disabled
        >
          {demoOptions}
        </InputSelect>
      </div>
      <div className="Pattern-DarkBlock">
        <InputSelect
          name="ExampleSelect2"
          helperMsg={<ParagraphMd>I am helpful text!</ParagraphMd>}
          id="ExampleSelect2"
          label="Default with Helper Text"
          theme="dark"
        >
          {demoOptions}
        </InputSelect>
        <InputSelect
          name="ExampleSelect2"
          format="negative"
          id="ExampleSelect2"
          label="Negative"
          errorMsg={<ParagraphMd>This is a problem!</ParagraphMd>}
          theme="dark"
        >
          {demoOptions}
        </InputSelect>
        <InputSelect
          name="ExampleSelect3"
          format="positive"
          id="ExampleSelect3"
          label="Positive"
          theme="dark"
        >
          {demoOptions}
        </InputSelect>
      </div>
    </div>
  ),
  {
    info: {
      inline: true,
      propTables: [InputSelect],
    },
    options: {
      name: 'Iris',
      url: '#',
    },
  },
);
