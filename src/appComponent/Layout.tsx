import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../utils/config"
import React from "react";
import { SkeletonCard } from "./SkeletonCard"


function Layout() {
    return (
        <section>
            <Routes>
                {ROUTES.map(
                    ({ path, component: Component }, index) => {
                        const LazyComponent = React.lazy(Component);

                        return (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <React.Suspense fallback={<div><SkeletonCard /></div>}>
                                        <LazyComponent />
                                    </React.Suspense>} />
                        );
                    })}

            </Routes></section>
    )
}
export default Layout;