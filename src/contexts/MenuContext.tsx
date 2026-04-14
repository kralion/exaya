import React, { createContext, useState } from "react";

interface MenuContextData {
  selectedKey: string;
  setSelectedKey: (key: string) => void;
}

interface CollapsedContextData {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
}

export const SelectedContext = createContext<MenuContextData>({
  selectedKey: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSelectedKey: () => {},
});

export const CollapsedContext = createContext<CollapsedContextData>({
  isCollapsed: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleCollapsed: () => {},
});

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedKey, setSelectedKey] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <SelectedContext.Provider value={{ selectedKey, setSelectedKey }}>
      <CollapsedContext.Provider value={{ isCollapsed, toggleCollapsed }}>
        {children}
      </CollapsedContext.Provider>
    </SelectedContext.Provider>
  );
};
