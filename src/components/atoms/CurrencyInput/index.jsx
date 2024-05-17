import { TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import IMask from "imask";

const CurrencyInput = (...props) => {
 const inputRef = useRef(null);
 let mask;

 useEffect(() => {
  mask = IMask(inputRef.current, {
   mask: "R$ num",
   blocks: {
    num: {
     mask: Number,
     scale: 2,
     thousandsSeparator: ",",
     padFractionalZeros: true,
     normalizeZeros: true,
     radix: ".",
     prefix: "R$ "
    }
   }
  });

  return () => {
   mask.destroy();
  };
 }, []);

 return (
  <TextField
   {...props}
   inputRef={inputRef}
   onInput={() => props.onChange(mask.value)}
  />
 );
};

export default CurrencyInput;
