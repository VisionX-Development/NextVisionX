import { useState, useRef } from "react";

function useAsyncReference(value: unknown, isProp = false) {
  const ref = useRef(value);
  const [, forceRender] = useState(false);

  function updateState(newState: unknown) {
    if (!Object.is(ref.current, newState)) {
      ref.current = newState;
      forceRender((s) => !s);
    }
  }

  if (isProp) {
    ref.current = value;
    return ref;
  }

  return [ref, updateState];
}
export default useAsyncReference;
