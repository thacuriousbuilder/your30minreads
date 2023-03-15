import { createContext, useContext, useState } from 'react';


interface ITextSizeProvider{
    children:React.ReactNode
}
const TextSizeContext = createContext<{
  textSize: string;
  setTextSize: React.Dispatch<React.SetStateAction<string>>;
}>({
  textSize: 'text-base',
  setTextSize: () => {},
});

export const useTextSize = () => useContext(TextSizeContext);

export const TextSizeProvider: React.FC<ITextSizeProvider> = ({ children }) => {
  const [textSize, setTextSize] = useState('text-base');

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </TextSizeContext.Provider>
  );
};