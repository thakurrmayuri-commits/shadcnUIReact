import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../utils/config";
import AppHeader from "./AppHeader";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    return isAuthenticated ? children : <Navigate to="/" />;
}

function Applaout() {
    return (
        <section>

            <div>
                {/* <Routes>
                    {ROUTES.map(
                        ({ path, component: Component, exact: isProtected }, index) => {
                            if (!Component) {
                                return (
                                    <Route
                                        key={index}
                                        path={path}
                                        element={<Navigate to="/" />}
                                    />
                                );
                            }

                            const LazyComponent = React.lazy(Component);
                            const lazyElement = (
                                <React.Suspense fallback={<div>Loading...</div>}>
                                    <LazyComponent />
                                </React.Suspense>
                            );

                            const routeElement = isProtected ? (
                                <ProtectedRoute>{lazyElement}</ProtectedRoute>
                            ) : (
                                lazyElement
                            );

                            return <Route key={index} path={path} element={routeElement} />;
                        }
                    )}
                </Routes> */}
            </div>
        </section>
    );
}

export default Applaout;