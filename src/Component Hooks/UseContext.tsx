import { useContext, useState } from "react";
import UserContext, { UserState } from "../store";

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>First Name: {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    firstName: "Ramzi",
    lastName: "Bouzaiene",
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
        <button
          onClick={() =>
            setUser({
              firstName: "Yassine",
              lastName: "BZ",
            })
          }
        >
          Change Context
        </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
