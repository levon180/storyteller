import React, {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";

const PortalComponent = ({children, id}) => {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(`#${id}`);
    setMounted(true);
  }, []);

  return (mounted && ref.current) ? createPortal(children, ref.current) : null;
}

export default PortalComponent;
