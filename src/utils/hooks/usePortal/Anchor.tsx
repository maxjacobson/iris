import React, {
  useLayoutEffect,
  RefObject,
  useState,
  ReactElement,
} from 'react';

import { AnchorStyled } from './Anchor.style';
import { Attach } from './usePortal.types';
import { throttle } from '../../general/throttle';

interface Props {
  anchor: RefObject<HTMLElement>;
  anchorToWindow: boolean;
  attach: Attach;
  childRef: RefObject<HTMLElement>;
  children: ReactElement;
  margin?: number;
}

interface State {
  rect?: ClientRect;
  childRect?: ClientRect;
}

export function Anchor({
  anchor,
  anchorToWindow,
  attach,
  childRef,
  children,
  margin,
  ...props
}: Props) {
  const [state, setState] = useState<State>({});

  useLayoutEffect(() => {
    const childElement: HTMLElement = childRef?.current;

    const onResize = throttle(() => {
      if (!childElement) return;

      const viewport = anchorToWindow && windowRect();
      const childRect = calcRect(childRef);
      const rect = viewport || calcRect(anchor, window);

      const changed = compare(state, rect, childRect);

      if (changed) {
        setState({ rect, childRect });
      }
    }, 5);

    onResize();

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize);
    childElement?.addEventListener('transitionend', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize);
      childElement?.removeEventListener('transitionend', onResize);
    };
  }, [children, anchor, anchorToWindow, childRef, state]);

  return (
    <AnchorStyled
      anchorToWindow={anchorToWindow}
      attach={attach}
      childRect={state.childRect}
      children={children}
      margin={margin}
      rect={state.rect}
      {...props}
    />
  );
}

function compare(state: State, a: ClientRect, b: ClientRect) {
  return (
    !state.rect ||
    sizeChanged(a, state.rect) ||
    positionChanged(a, state.rect) ||
    sizeChanged(b, state.childRect)
  );
}

function calcRect(
  ref: RefObject<HTMLElement>,
  { scrollX = 0, scrollY = 0 } = {}
): ClientRect {
  if (ref && ref.current) {
    const { offsetHeight, offsetWidth } = ref.current;
    const { x, y } = ref.current.getBoundingClientRect();

    const height = offsetHeight;
    const left = x + scrollX;
    const top = y + scrollY;
    const width = offsetWidth;

    return {
      bottom: top + height,
      height,
      left,
      right: left + width,
      top,
      width,
    };
  }

  return null;
}

function windowRect() {
  return {
    bottom: 0,
    height: window.innerHeight,
    left: 0,
    right: 0,
    top: 0,
    width: window.innerWidth,
  };
}

function sizeChanged(a: ClientRect, b: ClientRect) {
  if (!a || !b) return false;
  return a.width !== b.width || a.height !== b.height;
}

function positionChanged(a: ClientRect, b: ClientRect) {
  if (!a || !b) return false;
  return a.top !== b.top || a.left !== b.left;
}