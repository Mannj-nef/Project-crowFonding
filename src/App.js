import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ROUTER from "./routers/routers";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken } from "./store/auth/authSlice";
import { getToken } from "./utils/handleToken";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshToken = getToken.refreshToken();
    if (!user) {
      dispatch(authRefreshToken(refreshToken));
    }
  }, [user, dispatch]);

  return (
    <div className="">
      <Suspense fallback={"loading"}>
        <Routes>
          {ROUTER.map((router, index) => {
            const Page = router.component;
            let Layout = React.Fragment;
            if (!!router.layout) {
              Layout = router.layout;
            }
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
