import React, {
  useState,
  useEffect,
  ReactNode,
  useCallback,
  createContext,
} from "react";

interface ChildrenProps<RN> {
  children: RN;
}

interface WidthProps<T> {
  readonly width: T;
}

export const NuContext = createContext<WidthProps<number>>({
  width: window.innerWidth,
});

export default function NuProvider({ children }: ChildrenProps<ReactNode>) {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowState = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowState);
    return () => window.removeEventListener("resize", handleWindowState);
  }, [handleWindowState]);

  const state = { width };
  Object.freeze(state);
  return <NuContext.Provider value={state}>{children}</NuContext.Provider>;
}
