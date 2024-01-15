import {configureStore} from "@reduxjs/toolkit";
import setOpacity from "../features/handleOpacity";
import savedBeach from "../features/savedBeach";

export default configureStore({
    reducer: {
        opacity: setOpacity,
        savedBeach
    },
})

