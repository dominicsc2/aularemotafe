import {
  useCallback, useEffect, useLayoutEffect, useRef
} from 'react';
import { useWindowSize } from './useWindowSize';

export const useSlider = (gap: string) => {
  const cont = useRef<HTMLDivElement | null>(null);
  const rightButton = useRef<HTMLButtonElement | null>(null);
  const leftButton = useRef<HTMLButtonElement | null>(null);

  const setRefCont = useCallback((node) => {
    cont.current = node;
  }, []);

  const setRefRightButton = useCallback((node) => {
    rightButton.current = node;
  }, []);

  const setRefLeftButton = useCallback((node) => {
    leftButton.current = node;
  }, []);

  let percentage = 0;
  const nodesRemoved: any[] = [];
  let canRightClick = true;

  let gapPixels = 9.6;

  switch (gap) {
    case 'small': gapPixels = 9.6; break;
    case 'medium': gapPixels = 25.6; break;
    case 'large': gapPixels = 41.6; break;
  }

  useLayoutEffect(() => {
    leftButton.current && (leftButton.current.style.display = 'none');
    rightButton.current?.addEventListener('click', () => {
      if (rightButton.current && leftButton.current) {
        moveToRight(rightButton.current, leftButton.current);
      }
    });
    leftButton.current?.addEventListener('click', () => {
      if (leftButton.current && rightButton.current) {
        moveToLeft(leftButton.current, rightButton.current);
      }
    });

    return () => {
      rightButton.current?.removeEventListener('click', () => {
        if (rightButton.current && leftButton.current) {
          moveToRight(rightButton.current, leftButton.current);
        }
      });
      leftButton.current?.removeEventListener('click', () => {
        if (leftButton.current && rightButton.current) {
          moveToLeft(leftButton.current, rightButton.current);
        }
      });
    };
  }, []);

  useWindowSize(updateButtonsDisplay);

  useEffect(() => {
    updateButtonsDisplay();
  }, [cont]);

  function updateButtonsDisplay() {
    const width =    window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    if (cont.current) {
      const eachCardWidth = cont.current.children[0].getBoundingClientRect().width;
      const elementsDisplayed = Math.floor(width / (eachCardWidth + 10));
      if (elementsDisplayed + nodesRemoved.length === cont.current.children.length) {
        rightButton && rightButton.current && (rightButton.current.style.display = 'none');
      } else if (leftButton.current?.style.display !== 'block') { rightButton && rightButton.current && (rightButton.current.style.display = 'block'); }
    }
  }

  function moveToRight(
    rightButton: HTMLButtonElement,
    leftButton: HTMLButtonElement
  ) {
    if (canRightClick) {
      canRightClick = false;
      leftButton.style.display = 'block';
      const lastPosition = cont.current?.getBoundingClientRect().x;
      let calc;

      if (lastPosition) {
        if (lastPosition == 20) {
          calc = Math.abs(lastPosition) - 20;
        } else {
          calc = Math.abs(lastPosition) + 20;
        }
      }

      cont.current && (cont.current.style.right = `${calc}px`);

      const cards = cont.current?.children;

      if (cards && cards.length > 0) {
        const width =        window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        const eachCardWidth = cards[0].getBoundingClientRect().width;
        let elementsDisplayed = Math.floor(width / (eachCardWidth + 10));

        if (cards.length - elementsDisplayed <= elementsDisplayed) {
          elementsDisplayed = cards.length - elementsDisplayed;
          rightButton.style.display = 'none';
        }

        const number = elementsDisplayed * (gapPixels + eachCardWidth);

        cont.current && (percentage = (number / cont.current.getBoundingClientRect().width) * 100);
        cont.current && (cont.current.style.transition = 'all 0.3s ease-in-out');
        cont.current && (cont.current.style.right = `${percentage}%`);

        setTimeout(() => {
          for (let i = elementsDisplayed - 1; i >= 0; i--) {
            if (cards) {
              nodesRemoved.push(cards[0]);
              cards[0].remove();
            }
          }

          cont.current && (cont.current.style.transition = 'none');
          cont.current && (cont.current.style.right = '0px');

          // prevent bug
          if (cards && cards.length == 0) {
            cont.current && (cont.current.style.display = 'none');
          }
          canRightClick = true;
        }, 300);
      }
    }
  }

  function moveToLeft(
    leftButton: HTMLButtonElement,
    rightButton: HTMLButtonElement,
  ) {
    rightButton.style.display = 'block';
    const lastPosition = cont.current?.getBoundingClientRect().x;
    let calc;
    if (lastPosition) {
      if (lastPosition == 20) {
        calc = Math.abs(lastPosition) - 20;
      } else {
        calc = Math.abs(lastPosition) + 20;
      }
    }

    cont.current && (cont.current.style.right = `${calc}px`);

    const cards = cont.current?.children;

    if (cards && cont.current) {
      const width  = window.innerWidth || document.documentElement.clientWidth
      || document.body.clientWidth;
      let eachCardWidth = cards[0].getBoundingClientRect().width;
      const elementsDisplayed = Math.floor(width / (eachCardWidth + 10));

      const number =  elementsDisplayed * (gapPixels + eachCardWidth);

      percentage = (number / cont.current.getBoundingClientRect().width) * 100;

      const initialvalue = eachCardWidth += gapPixels;

      const max = nodesRemoved.length <= elementsDisplayed ? nodesRemoved.length : elementsDisplayed;

      for (let i = max - 1; i >= 0; i--) {
        cont.current.insertBefore(nodesRemoved.pop(), cont.current.firstElementChild);
        cont.current.style.right = `${eachCardWidth}px`;
        eachCardWidth += initialvalue;
      }

      cont.current.style.transition = 'none';
      setTimeout(() => {
        cont.current && (cont.current.style.transition = 'all 0.3s ease-in-out');
        cont.current && (cont.current.style.right = `${0}px`);
      }, 20);

      if (nodesRemoved.length == 0) {
        leftButton.style.display = 'none';
      }
    }
  }

  return {
    setRefCont,
    setRefRightButton,
    setRefLeftButton,
  };
};