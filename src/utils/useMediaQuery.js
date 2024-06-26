import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    // Initialize matches with the current value of the media query on mount
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => {
      setMatches(mediaQueryList.matches);
    };

    // Subscribe to changes
    mediaQueryList.addEventListener("change", updateMatch);

    // Unsubscribe on cleanup
    return () => {
      mediaQueryList.removeEventListener("change", updateMatch);
    };
  }, [query]);

  return matches;
}
