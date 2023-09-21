## REACT GOOD PRACTICES.

<p>For bad practice: a ref element was used as a dependency for useEffect but useRef elements aren't proper dependencies for useEffect </p>
<p>For good practice: used the useCallback hook, react will call the function with a reference to the DOM element when it mounts or null when it unmounts. With this we can conditionally and properly update the height of the element. </p>
