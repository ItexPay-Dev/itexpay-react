import { useEffect, useRef, useState } from "react";

interface LoadedScriptReturn {
    loaded: boolean;
    error: boolean;
}

const useLoadedScript = (): LoadedScriptReturn => {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [error, setError] = useState(false);

    const ITEX_SCRIPT = 'https://checkout.itexpay.com/v1.0.0/itexpay-inline-staging-min.js';

    const scriptRef = useRef<HTMLScriptElement>();

    useEffect(() => {
        fetch(ITEX_SCRIPT, { mode: 'no-cors' })
            .then(() => {
                setLoaded(true);

                const script = document.createElement('script');
                script.src = ITEX_SCRIPT;
                script.id = 'ITEXPAY_SCRIPT';
                document.body.append(script)

                scriptRef.current = script;
            })
            .catch(() => {
                setError(true)
            })

        return () => scriptRef.current?.remove();
    }, [])

    return { loaded, error };
}

export default useLoadedScript;