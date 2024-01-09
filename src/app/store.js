import {configureStore} from "@reduxjs/toolkit";
import setOpacity from "../features/handleOpacity";

export default configureStore({
    reducer: {
        opacity: setOpacity,
    },
})

