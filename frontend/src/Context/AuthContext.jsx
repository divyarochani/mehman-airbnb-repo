import React, { createContext, useState } from "react";
export const authDataContext = createContext();
function AuthContext({ children }) {
  const serverUrl = "https://mehman-airbnb-repo.onrender.com"; // for server which is deployed on render
  // const serverUrl = "http://localhost:8080"; // for local and change ip address according yours

  let [loading, setLoading] = useState(false);

  let value = {
    serverUrl,
    loading,
    setLoading,
  };
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  );
}

export default AuthContext;
