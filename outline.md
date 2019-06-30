(Disable warnings in dev)

* Build Toggle Counter using useState
* Hookup Counter to numeric useState
* React.useEffect with setTimeout to update counter
  * This is called EVERY render tick
  * Show what happens unmounting counter (bug)
  * Show how to do cleanup
* Convert to `setInterval`
  * Add array
  * But count doesn't update?
  * Use functional argument for useState 
    * Gives full current state, requires full state returned
* Convert Button to `React.memo`
  * Add render `console.log`
  * Passing in the functional component breaks purity
  * `useCallback` and `useMemo`
  * Move existing function into useCallback
    * Show bug - doesn't seem to work
    * Why?
    * Show why
  * Convert to use the boolean to break 
    * Ask for proper fix
    * Mention exception with the setState
