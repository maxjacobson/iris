// @ts-ignore
import React from 'react';
import styled, { 
    css,
    // @ts-ignore
    StyledComponentClass
 } from 'styled-components';
 import { rem } from 'polished';

import {
    ButtonCoreCSS,
    getActiveCSSByFormat,
    getAutoWidthCSS,
    getDefaultCSSByFormat,
    getDisabledCSSByFormat,
    getHoverCSSByFormat,
    getSizeCSS,
    getVerticalAutoMarginCSS,
} from './ButtonHelpers';

import { ButtonProps } from './ButtonProps';
import { ButtonStyleSettings } from './ButtonStyleSettings';
import { ButtonVariableElement } from './ButtonVariableElement';


const maybeGetFeaturedIconCSS = props => {
    const thisButtonSize = ButtonStyleSettings.Sizes[props.size] || ButtonStyleSettings.Sizes.md;
    if(props.hasFeaturedIcon && thisButtonSize) {
        const combinedPaddingBySize = `${thisButtonSize.minHeight} + 1rem`;
        return `
            padding-right: calc(${combinedPaddingBySize});
            padding-left: calc(${combinedPaddingBySize});
        `
    } 
};

export const ButtonStyled = styled<ButtonProps, any>(ButtonVariableElement)`
    ${ButtonCoreCSS}
    ${getSizeCSS}
    ${maybeGetFeaturedIconCSS}
    ${getVerticalAutoMarginCSS}
    ${getAutoWidthCSS};

    border-radius: ${props => props.size === 'xs'
        ? rem(2)
        : rem(3)};

    ${props => props.customFormat
        ? customDefault(props)
        : getDefaultCSSByFormat}

    &:hover {
        cursor: pointer;
        ${props => props.customFormat
            ? customHoverActive(props)
            : getHoverCSSByFormat};
    }

    &:active {
        transform: scale(0.98);
        ${props => props.customFormat
            ? customHoverActive(props)
            : getActiveCSSByFormat};
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        cursor: not-allowed;
        transform: scale(1);
        pointer-events: none;
        ${getDisabledCSSByFormat}
    }
`;

export const ButtonLabelStyled = styled.span`
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const customDefault = (props) => css`
    background: ${props.customFormat.defaultBackgroundColor};
    border-color: ${props.customFormat.defaultBorderColor || props.customFormat.defaultBackgroundColor};
    color: ${props.customFormat.defaultTextColor};
`;

const customHoverActive = (props) => css`
    background: ${props.customFormat.hoverBackgroundColor};
    border-color: ${props.customFormat.hoverBorderColor || props.customFormat.hoverBackgroundColor};
    color: ${props.customFormat.hoverTextColor || props.customFormat.defaultTextColor};
`;