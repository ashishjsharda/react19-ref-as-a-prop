import React from "react";
const MyInput = React.forwardRef(({placeholder},ref) => {
    return <input placeholder={placeholder} ref={ref} />;
});
export default MyInput;