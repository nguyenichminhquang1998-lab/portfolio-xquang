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

const projectTypeSelect = document.querySelector("#project-type");
const otherProjectTypeField = document.querySelector("#other-project-type-field");
const otherProjectTypeInput = document.querySelector("#other-project-type");

const updateOtherProjectType = (shouldFocus = false) => {
  if (!projectTypeSelect || !otherProjectTypeField || !otherProjectTypeInput) {
    return;
  }

  const isOtherProjectType = projectTypeSelect.value === "khac";
  otherProjectTypeField.hidden = !isOtherProjectType;
  otherProjectTypeInput.disabled = !isOtherProjectType;
  otherProjectTypeInput.required = isOtherProjectType;

  if (!isOtherProjectType) {
    otherProjectTypeInput.value = "";
  } else if (shouldFocus) {
    otherProjectTypeInput.focus();
  }
};

if (projectTypeSelect) {
  projectTypeSelect.addEventListener("change", () => updateOtherProjectType(true));
  updateOtherProjectType();
}

const attachmentInput = document.querySelector("#attachment");
const attachmentError = document.querySelector("#attachment-error");
const documentLinkInput = document.querySelector("#document-link");

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
      const message = "File vượt quá 7 MB nên chưa được đính kèm. Vui lòng dùng ô “Link tài liệu dung lượng lớn” bên dưới.";
      attachmentInput.value = "";
      attachmentError.textContent = message;
    }
  });

  if (documentLinkInput) {
    documentLinkInput.addEventListener("input", () => {
      if (documentLinkInput.value.trim()) {
        attachmentError.textContent = "";
      }
    });
  }
}

const briefForm = document.querySelector(".brief-form");
const briefFormStatus = document.querySelector("#brief-form-status");
const briefSuccess = document.querySelector("#brief-success");

if (briefForm && briefFormStatus && briefSuccess) {
  const submitButton = briefForm.querySelector('button[type="submit"]');

  briefForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!briefForm.reportValidity()) {
      return;
    }

    briefFormStatus.textContent = "";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Đang gửi...";
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        body: new FormData(briefForm),
      });

      if (!response.ok) {
        throw new Error("Brief submission failed");
      }

      briefForm.reset();
      updateOtherProjectType();
      briefForm.hidden = true;
      briefSuccess.hidden = false;
      briefSuccess.focus();
    } catch {
      briefFormStatus.textContent = "Chưa gửi được brief. Vui lòng thử lại hoặc liên hệ trực tiếp với XQuang.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Gửi brief";
      }
    }
  });
}
