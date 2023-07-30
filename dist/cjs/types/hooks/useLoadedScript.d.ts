interface LoadedScriptReturn {
    loaded: boolean;
    error: boolean;
}
declare const useLoadedScript: () => LoadedScriptReturn;
export default useLoadedScript;
