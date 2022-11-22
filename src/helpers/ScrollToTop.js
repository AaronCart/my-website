import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Helper used to scroll page to top when changing to different pages on smaller screens
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, [pathname]);

    return null;
}