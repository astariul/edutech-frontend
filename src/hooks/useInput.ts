import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from "react"

type Handler = (e: any) => void;
type ReturnTypes<T = any> = [T, Handler, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(intialValue: T): ReturnTypes<T> => {
  const [value, setValue] = useState<T>(intialValue);
  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue((e.target.value as unknown) as T);
    }, []
  );
  return [value, handler, setValue];
}

export default useInput;
