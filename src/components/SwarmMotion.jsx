import { useEffect } from "react";

function SwarmMotion() {
  useEffect(() => {
    let desiredActive = true;
    let mounted = true;

    const publishState = () => {
      if (mounted) {
        window.dispatchEvent(
          new CustomEvent("swarmline:state", { detail: { active: desiredActive } })
        );
      }
    };

    const applyState = () => {
      const engine = window.__swarmline;
      if (!engine) return;
      if (desiredActive) engine.start();
      else engine.stop();
      publishState();
    };

    const handleToggle = (event) => {
      desiredActive = Boolean(event.detail?.active);
      applyState();
    };

    window.addEventListener("swarmline:toggle", handleToggle);

    // The original Swarmline engine starts itself when loaded. Keep one copy
    // on the page; React StrictMode must not inject it a second time.
    if (window.__swarmline) {
      applyState();
    } else {
      let script = document.querySelector("script[data-swarmline-engine]");
      if (!script) {
        script = document.createElement("script");
        script.src = "/swarmline.js";
        script.async = false;
        script.dataset.swarmlineEngine = "true";
        script.onload = applyState;
        script.onerror = () => {
          console.error("[portfolio] Could not load the Swarmline build engine.");
        };
        document.head.appendChild(script);
      } else {
        script.addEventListener("load", applyState, { once: true });
      }
    }

    publishState();

    return () => {
      mounted = false;
      window.removeEventListener("swarmline:toggle", handleToggle);
    };
  }, []);

  return null;
}

export default SwarmMotion;
