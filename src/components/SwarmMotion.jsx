import React, { useEffect } from "react";

const SCRIPT_ID = "swarmline-engine";

function SwarmMotion() {
  useEffect(() => {
    let disposed = false;
    let script = document.getElementById(SCRIPT_ID);

    const startEngine = () => {
      if (disposed) return;
      if (window.__swarmline) {
        window.__swarmline.start();
        return;
      }
      script = document.getElementById(SCRIPT_ID);
      if (script) return;

      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "/swarmline.js";
      script.async = true;
      script.onerror = () => {
        console.error("Swarmline could not be loaded. Please refresh and try again.");
        window.dispatchEvent(new CustomEvent("swarmline:load-error"));
        script?.remove();
      };
      document.body.appendChild(script);
    };

    const stopEngine = () => {
      window.__swarmline?.stop();
    };

    const handleToggle = (event) => {
      if (event.detail?.active) startEngine();
      else stopEngine();
    };

    window.addEventListener("swarmline:toggle", handleToggle);
    return () => {
      disposed = true;
      window.removeEventListener("swarmline:toggle", handleToggle);
      window.__swarmline?.stop(true);
    };
  }, []);

  return null;
}

export default SwarmMotion;
