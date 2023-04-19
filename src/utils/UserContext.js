import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy name",
    email: "dummy@email.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
