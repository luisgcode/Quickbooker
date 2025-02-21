import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const loadBotpress = async () => {
      await loadScript("https://cdn.botpress.cloud/webchat/v2.2/inject.js");
      await loadScript("https://files.bpcontent.cloud/2025/02/21/03/20250221035731-JE8JOKE4.js");

      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: "e540b96d-7f35-41a3-8c49-3db4b7664b77",
          host: "https://cdn.botpress.cloud",
          composerPlaceholder: "Type your message...",
          useSessionStorage: true,
          configUrl: "https://files.bpcontent.cloud/2025/02/21/03/20250221035731-GH5LL9G2.json"
        });
      }
    };

    loadBotpress();

    return () => {
      document
        .querySelectorAll(
          'script[src*="botpress.cloud"], script[src*="bpcontent.cloud"]'
        )
        .forEach((s) => s.remove());
    };
  }, []);

  return null;
};

export default Chatbot;
