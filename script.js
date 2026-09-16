"use strict";

const heroVideo = document.querySelector("#hero-video");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (heroVideo && !reducedMotion.matches) {
  const mobileViewport = window.matchMedia("(max-width: 39.99rem)");

  const loadHeroVideo = () => {
    if (reducedMotion.matches || heroVideo.dataset.loaded === "true") {
      return;
    }

    const source = mobileViewport.matches
      ? heroVideo.dataset.mobileSrc
      : heroVideo.dataset.desktopSrc;

    if (!source) {
      return;
    }

    heroVideo.dataset.loaded = "true";
    heroVideo.setAttribute("autoplay", "");
    heroVideo.src = source;
    heroVideo.load();

    const playAttempt = heroVideo.play();
    if (playAttempt) {
      playAttempt.catch(() => {
        // The poster remains visible if the browser blocks autoplay.
      });
    }
  };

  if (mobileViewport.matches) {
    if ("IntersectionObserver" in window) {
      const heroObserver = new IntersectionObserver((entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadHeroVideo();
          observer.disconnect();
        }
      });

      heroObserver.observe(heroVideo);
    }
  } else {
    loadHeroVideo();
  }

  const stopHeroForReducedMotion = (event) => {
    if (!event.matches) {
      return;
    }

    heroVideo.pause();
    heroVideo.removeAttribute("autoplay");
    heroVideo.removeAttribute("src");
    delete heroVideo.dataset.loaded;
    heroVideo.load();
  };

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", stopHeroForReducedMotion);
  } else {
    reducedMotion.addListener(stopHeroForReducedMotion);
  }
}

document.querySelectorAll(".video-facade").forEach((facade) => {
  facade.addEventListener("click", () => {
    const videoId = facade.dataset.vimeoId;

    if (!videoId || !/^\d+$/.test(videoId)) {
      return;
    }

    const player = document.createElement("div");
    player.className = `${facade.className} video-facade--player`;

    const iframe = document.createElement("iframe");
    iframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1&transparent=0`;
    iframe.title = facade.dataset.videoTitle || "Video trên Vimeo";
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    player.append(iframe);
    facade.replaceWith(player);
    iframe.focus();
  });
});

const attachmentInput = document.querySelector("#attachment");
const attachmentError = document.querySelector("#attachment-error");

if (attachmentInput && attachmentError) {
  const allowedExtensions = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt"];
  const maximumFileSize = 7 * 1024 * 1024;

  attachmentInput.addEventListener("change", () => {
    const [file] = attachmentInput.files;
    attachmentInput.setCustomValidity("");
    attachmentError.textContent = "";

    if (!file) {
      return;
    }

    const extension = file.name.split(".").pop()?.toLowerCase();

    if (!extension || !allowedExtensions.includes(extension)) {
      const message = "Chỉ nhận file PDF, Word, Excel, PowerPoint hoặc TXT.";
      attachmentInput.setCustomValidity(message);
      attachmentError.textContent = message;
      return;
    }

    if (file.size > maximumFileSize) {
      const message = "File vượt quá 7 MB. Vui lòng giảm dung lượng hoặc gửi đường dẫn trong brief.";
      attachmentInput.setCustomValidity(message);
      attachmentError.textContent = message;
    }
  });
}
