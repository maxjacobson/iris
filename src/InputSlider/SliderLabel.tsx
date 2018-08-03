import React from 'react';
import styled from 'styled-components';
import { getSliderThemeColors } from './InputSliderHelpers';
import { rem, rgba } from 'polished';
import COLORS from '../globals/js/constants/COLORS';

export interface SliderLabelProps {
    editable: boolean;
    value: number;
    id: string;
    format: 'dark' | 'light';
    onUserInput: (value) => void;
}

interface LabelWrapperStyledProps {
    format: 'dark' | 'light';
    isDisabled: boolean;
}

const LabelWrapper = styled<LabelWrapperStyledProps, 'div'>('div')`
    background: ${props => getSliderThemeColors(props.format).labelBackground};
    width: ${rem(60)};
    height: ${rem(34)};
    color: ${props => getSliderThemeColors(props.format).labelColor};
    text-align: center;
    padding: ${props => (props.isDisabled ? 0 : rem(2))};
    border-radius: ${rem(3)};
    margin-top: ${props => (props.isDisabled ? rem(2) : 0)};
`;
const LabelStyled = styled.label`
    width: 100%;
    height: 100%;
`;

const commonLabelStyles = props => {
    return `
    width: 100%;
    height: 100%;
    text-align: center;
    background: transparent;
    font-size: ${rem(14)};
    line-height: ${rem(28)};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    border-radius: ${rem(3)};
    color: ${getSliderThemeColors(props.format).labelColor};
`;
};

const LabelValueStyled = styled<LabelWrapperStyledProps, 'label'>('label')`
    ${props => commonLabelStyles(props)};
    border: ${rem(1)} solid
        ${props =>
            props.format === 'dark'
                ? rgba(COLORS.Black, 0.8)
                : COLORS.Porcelain};
`;

const LabelInputStyled = styled<LabelWrapperStyledProps, 'input'>('input')`
    ${commonLabelStyles};
    border: ${props =>
        props.format == 'dark'
            ? `${rem(1)} solid ${rgba(COLORS.White, 0.33)}`
            : `${rem(1)} solid ${rgba(COLORS.White, 0.66)}`};
    &:hover {
        cursor: pointer;
        background-color: ${props =>
            getSliderThemeColors(props.format).labelHoverBackground};
    }
    &:focus {
        outline: none;
        cursor: text;
        border: ${rem(2)} solid ${COLORS.VimeoBlueDarkened};
        background: ${COLORS.White};
        color: ${COLORS.AstroGranite};
    }
`;

const SliderLabel: React.SFC<SliderLabelProps> = ({
    editable,
    value,
    id,
    format,
    onUserInput,
    ...filteredProps
}) => {
    const updateValue = e => {
        const newValue = parseInt(e.target.value, 10);
        if (isNaN(newValue)) {
            e.preventDefault();
            return;
        }
        if (e.keyCode === 13) {
            onUserInput(newValue);
        }
    };

    const inputProps = {
        type: 'text',
        disabled: editable ? false : true,
        id: id,
        onKeyUp: updateValue,
        onChange: () => {},
        defaultValue: String(value),
        format: format,
        isDisabled: editable ? false : true,
    };
    return (
        <LabelWrapper
            {...filteredProps}
            format={format}
            isDisabled={inputProps.disabled}
        >
            {editable ? (
                <LabelStyled htmlFor={id} key={value}>
                    <LabelInputStyled {...inputProps} />
                </LabelStyled>
            ) : (
                <LabelValueStyled
                    format={format}
                    isDisabled={inputProps.disabled}
                >
                    {value}
                </LabelValueStyled>
            )}
        </LabelWrapper>
    );
};

export default SliderLabel;