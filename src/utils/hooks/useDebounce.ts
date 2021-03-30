/**
 * 延迟函数
 * @param callback
 * @param delay
 */
import React from 'react';

export const debounce = (callback: (args: any) => void, delay: number) => {
  let timer: NodeJS.Timer | null = null;

  return (params?: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(params);
    }, delay);
  };
};

export const useDebounce = (str: any, delay: number) => {
  const [deb, setDeb] = React.useState(str);

  React.useEffect(() => {
    const timer: NodeJS.Timer = setTimeout(() => setDeb(str), delay);
    return () => clearTimeout(timer);
  }, [str, delay]);

  return deb;
};
