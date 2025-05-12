import { useEffect } from "react";

export function Title() {
    useEffect(() => {
        const originalTitle = document.title;
        const blurMessages = [
          "DŠ <3",
          "Silence is golden",
          "GVBN </3",
          "Does god exist?",
          "What is the meaning of life?",
          "Kedy káva?",
          "Verím alebo neverím v boha?"
        ];
    
        let intervalTimer: number | undefined = undefined;
        let timeoutTimer: number | undefined = undefined;
    
        const handleBlur = () => {
          intervalTimer = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * blurMessages.length);
            document.title = blurMessages[randomIndex];
    
            timeoutTimer = setTimeout(() => {
              document.title = originalTitle;
            }, 4000);
          }, 12000);
        };
    
        const handleFocus = () => {
          clearInterval(intervalTimer);
          clearTimeout(timeoutTimer);
          document.title = originalTitle;
        };
    
        window.addEventListener("blur", handleBlur);
        window.addEventListener("focus", handleFocus);
    
        return () => {
          window.removeEventListener("blur", handleBlur);
          window.removeEventListener("focus", handleFocus);
          clearInterval(intervalTimer);
          clearTimeout(timeoutTimer);
          document.title = originalTitle;
        };
      }, []);   
}
