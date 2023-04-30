import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ROUTER from "./routers/routers";

function App() {
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
