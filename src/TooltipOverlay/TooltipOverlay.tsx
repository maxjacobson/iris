// @flow
import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
//@ts-ignore
import { Manager, Target, Popper } from 'react-popper';
import { Z_INDEX } from '../globals/js/constants';
import Tooltip from '../Tooltip/Tooltip';

const TOOLTIP_SPEED = 50;

export interface TooltipOverlayProps {
    /**
     * The triggering Element
     */
    children: React.ReactNode;
    /**
     * Added to triggering Element
     */
    className?: string;
    /**
     * Tooltip direction
     */
    attachment?: 'top' | 'right' | 'left' | 'bottom';
    /**
     * Event Callback
     */
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    /**
     * Event Callback
     */
    onMouseEnter?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    /**
     * Event Callback
     */
    onMouseLeave?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    /**
     * Tooltip Size (See docs)
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * A translated string of text for the tooltip.
     */
    tooltipText: string;
    /**
     *  Should the tootlip trigger on click instead of hover?
     */
    triggerOnClick: boolean;
    /**
     *  Override the default Z-index
     */
    zIndexOverride?: number;
}

export interface TooltipOverlayState {
    isShowing: boolean;
    isHovered: boolean;
}

// filter out zIndexOverride prop because styled() is failing to do so
const ManagerFiltered = ({
    // @ts-ignore
    zIndexOverride,
    ...filteredProps
}) => <Manager {...filteredProps} />;

interface ManagerStyledProps {
    zIndexOverride?: number;
}

const ManagerStyled = styled<ManagerStyledProps, any>(ManagerFiltered)`
    z-index: ${props => props.zIndexOverride || Z_INDEX.tooltip};
`;

const PopperFiltered = ({
    // @ts-ignore
    zIndexOverride,
    ...filteredProps
}) => <Popper {...filteredProps} />;

const PopperStyled = styled(PopperFiltered)`
    z-index: ${props => props.zIndexOverride || Z_INDEX.tooltip};
`;

const TargetStyled = styled(Target)`
    display: inline;
`;

const TooltipWrapperStyled = styled('div')`
    opacity: 0;
    transition: opacity ${TOOLTIP_SPEED}ms ease-in;
`;

const transitionStyles = {
    entering: {
        opacity: 0.1,
    },
    entered: {
        opacity: 1,
    },
    exiting: {
        opacity: 0,
    },
};
class TooltipOverlay extends React.Component {
    static defaultProps = {
        attachment: 'top',
    };

    constructor(props: TooltipOverlayProps) {
        super(props);
        this.state = {
            isShowing: false,
            isHovered: false,
        };
    }

    state: TooltipOverlayState;

    props: TooltipOverlayProps;
    overlay: any;
    menu: any;

    // Functions

    showTooltip = () => {
        // iOS won't bubble clicks to the body unless it has cursor pointer
        // we listen for a body click to close the tooltip
        if (document.body) {
            document.body.style.cursor = 'pointer';
        }
        this.setState({
            isShowing: true,
        });

        this.listenForClose();
    };

    hideTooltip = () => {
        // unset iOS hack
        if (document.body) {
            document.body.style.cursor = '';
        }

        this.setState({
            isShowing: false,
        });

        this.stopListeningForClose();
    };

    toggleTooltip = () => {
        this.setState({
            isShowing: !this.state.isShowing,
        });
    };

    // Event Handlers
    handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(event);
        }

        if (this.props.triggerOnClick) {
            this.toggleTooltip();
        }
    };

    handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
        this.setState({
            isHovered: true,
        });

        if (typeof this.props.onMouseEnter === 'function') {
            this.props.onMouseEnter(event);
        }

        if (!this.props.triggerOnClick) {
            this.showTooltip();
        }
    };

    handleMouseLeave = (event: React.MouseEvent<HTMLSpanElement>) => {
        this.setState({
            isHovered: false,
        });

        if (typeof this.props.onMouseLeave === 'function') {
            this.props.onMouseLeave(event);
        }

        if (!this.props.triggerOnClick) {
            if (this.state.isShowing) {
                this.hideTooltip();
            }
        }
    };

    listenForClose = () => {
        if (document.body) {
            document.body.addEventListener('click', this.hideTooltip);
        }
    };
    stopListeningForClose = () => {
        if (document.body) {
            document.body.removeEventListener('click', this.hideTooltip);
        }
    };

    render() {
        const {
            children,
            className,
            attachment,
            onClick,
            onMouseEnter,
            onMouseLeave,
            size,
            tooltipText,
            triggerOnClick, // eslint-disable-line no-unused-vars
            zIndexOverride,
            ...filteredProps
        } = this.props;

        const offsetMap = {
            top: '0, 12',
            right: '0, 4',
            bottom: '0, 50% + 4',
            left: '0, 4',
        };

        const tooltipComponent = (
            <Transition
                in={this.state.isShowing}
                timeout={TOOLTIP_SPEED}
                mountOnEnter
                unmountOnExit
            >
                {state => (
                    <TooltipWrapperStyled
                        style={{
                            ...transitionStyles[state],
                        }}
                        ref={overlay => {
                            this.overlay = overlay;
                        }}
                    >
                        <Tooltip size={size}>{tooltipText}</Tooltip>
                    </TooltipWrapperStyled>
                )}
            </Transition>
        );

        return (
            <ManagerStyled zIndexOverride={zIndexOverride}>
                <TargetStyled>
                    <span
                        {...filteredProps}
                        onClick={this.handleClick}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        data-tooltip-trigger
                        aria-label={tooltipText}
                        className={className}
                    >
                        {children}
                    </span>
                </TargetStyled>
                <PopperStyled
                    //@ts-ignore modifiers is a Popper prop
                    modifiers={{
                        offset: {
                            offset: offsetMap[attachment],
                        },
                        positionFixed: true,
                    }}
                    placement={attachment}
                    zIndexOverride={zIndexOverride}
                >
                    {tooltipComponent}
                </PopperStyled>
            </ManagerStyled>
        );
    }
}

export default TooltipOverlay;