## about this keyword
- In non-strict mode, a special process called **this substitution** ensures that the value of this is always an object. This means:
    - If a function is called with **this** set to undefined or null, this gets substituted with **globalThis**.
    - If the function is called with **this** set to a primitive value, this gets substituted with the **primitive value's wrapper object**.