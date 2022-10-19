import { configure } from "@testing-library/react";
import user from "./features/user/user";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});


