// Small shared surface so every component imports from one place.
// No JSX and no build step: React.createElement is used directly (aliased "h"),
// which is why the site can ship straight to GitHub Pages as static files.
import React from "react";

export const h = React.createElement;
export const Fragment = React.Fragment;
export { useState, useEffect, useRef, useMemo } from "react";
