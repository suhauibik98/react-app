import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./reducer";
import {
  CLICK_BUTTON_A,
  CLICK_BUTTON_B,
  CLICK_BUTTON_C,
  CLICK_BUTTON_D,
  GEMBA_BUTTON_UNLOCK
} from "./actions";
const LockContext = createContext();
const initialState = {
  a: false,
  b: false,
  c: false,
  d: false,
  unLock:false
};

export const LockProvider = ({ children }) => {
  const [stats, dispatch] = useReducer(reducer, initialState);

  const [isLock, setLock] = useState(false);
  const [isQ, setQ] = useState(false);
  // const [unLock, setUnlock] = useState(false);

  const handelclick_A = () => {
    dispatch({ type: CLICK_BUTTON_A });
  };
  const handelclick_B = () => {
    dispatch({ type: CLICK_BUTTON_B });
  };
  const handelclick_C = () => {
    dispatch({ type: CLICK_BUTTON_C });
  };
  const handelclick_D = () => {
    dispatch({ type: CLICK_BUTTON_D });
  };
  const GEMBA_UNLOCK = () => {
    dispatch({ type: GEMBA_BUTTON_UNLOCK });
  };

  const handelShowQ = () => {
    if (stats.a && stats.b && stats.c && stats.d) {
      setQ(true);
    }  };

  useEffect(() => {
    handelShowQ();

  }, [stats]);

  const handleLockChange = () => {
    setLock(true);
  };

  return (
    <LockContext.Provider
      value={{
        isLock,
        isQ,
        handleLockChange,
        ...stats,
        handelclick_A,
        handelclick_B,
        handelclick_C,
        handelclick_D,
        GEMBA_UNLOCK,
      }}
    >
      {children}
    </LockContext.Provider>
  );
};

//custem hook
export const useLock = () => {
  return useContext(LockContext);
};
