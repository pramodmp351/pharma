document.addEventListener("DOMContentLoaded", function () {
  // GSAP Entry Animations
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Entrance logic using .from to ensure content isn't hidden if JS fails
  tl.from(".abc-badge", {
    y: 20,
    opacity: 0,
    duration: 0.8,
  })
    .from(
      ".abc-title span",
      {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      },
      "-=0.6",
    )
    .from(
      ".abc-desc",
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.6",
    )
    .from(
      ".abc-btn",
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.6",
    )
    .from(
      ".abc-card",
      {
        x: 60,
        opacity: 0,
        duration: 1.2,
      },
      "-=1",
    );

  // Simple parallax effect on mouse move for the floating card (Desktop only)
  if (window.innerWidth > 1024) {
    document.addEventListener("mousemove", (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;

      gsap.to(".abc-card", {
        duration: 1,
        x: 0 + x,
        y: 0 + y,
        ease: "power2.out",
      });
    });
  }
});

gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  // Animate blocks on scroll
  gsap.from(".def-block", {
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".def-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Animate images
  gsap.from(".def-image-large", {
    scale: 0.95,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".def-section",
      start: "top 70%",
    },
  });

  // Adjust speed for mobile
  const track = document.querySelector(".def-clients-track");
  if (window.innerWidth < 768) {
    track.style.animationDuration = "20s";
  }
};

window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Header Animation (Fade Up)
  gsap.from(".ghi-header", {
    scrollTrigger: {
      trigger: ".ghi-header",
      start: "top 85%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // 2. DNA Image Animation (Scale and Fade)
  gsap.from(".ghi-dna-img", {
    scrollTrigger: {
      trigger: ".ghi-center",
      start: "top 75%",
    },
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
  });

  // 3. Left Cards (Slide Left)
  gsap.from(".ghi-left .ghi-card", {
    scrollTrigger: {
      trigger: ".ghi-left",
      start: "top 75%",
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  // 4. Right Cards (Slide Right)
  gsap.from(".ghi-right .ghi-card", {
    scrollTrigger: {
      trigger: ".ghi-right",
      start: "top 75%",
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });
});

// Use a safer initialization pattern
const initAnimations = () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined")
    return;

  gsap.registerPlugin(ScrollTrigger);

  // Set initial state for JS animations
  gsap.set(".jkl-header-left, .jkl-header-right, .jkl-card, .jkl-bottom", {
    opacity: 0,
    y: 30,
  });

  // Header Animation
  gsap.to(".jkl-header-left, .jkl-header-right", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".jkl-header",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  // Cards Stagger Animation
  gsap.to(".jkl-card", {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".jkl-grid",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Bottom Strip Animation
  gsap.to(".jkl-bottom", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".jkl-bottom",
      start: "top 95%",
      toggleActions: "play none none none",
    },
  });
};

// Run on load
if (document.readyState === "complete") {
  initAnimations();
} else {
  window.addEventListener("load", initAnimations);
}

window.addEventListener("load", () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate Left Content
  gsap.from(".mno-left > *", {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".mno-section",
      start: "top 80%",
    },
  });

  // Animate Cards (Stagger)
  gsap.from(".mno-card", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mno-section",
      start: "top 75%",
    },
  });
});

const testimonials = [
  {
    name: "Prof. Arjun Malhotra",
    role: "Department of life science",
    text: "Working with their laboratory team has been an excellent experience. They demonstrate strong regulatory knowledge and meticulous documentation.",
    avatar: "./assets/ch1.webp",
  },
  {
    name: "James Whitmore",
    role: "Quality Control Head",
    text: "Their analytical precision and compliance-focused approach make them a trusted partner for pharmaceutical testing. We value their consistency.",
    avatar: "./assets/ch8.webp",
  },
  {
    name: "Sofia Martinez",
    role: "R&D Manager",
    text: "From sample analysis to process optimization, their team is thorough & efficient. They have supported key milestones in our product development.",
    avatar: "./assets/ch9.webp",
  },
  {
    name: "Dr. Sarah Chen",
    role: "Chief Scientist",
    text: "The level of detail in their reporting is unmatched. They provide insights that go beyond simple data points, helping us innovate faster.",
    avatar: "./assets/ch10.webp",
  },
  {
    name: "Michael Ross",
    role: "Lab Director",
    text: "We've partnered with many labs, but their commitment to turnaround times and accuracy is what keeps us coming back year after year.",
    avatar: "./assets/ch11.webp",
  },
  {
    name: "Elena Rodriguez",
    role: "Compliance Specialist",
    text: "Navigating international standards is difficult, but their team handled our multi-regional testing requirements with complete ease and professionalism.",
    avatar: "./assets/ch5.webp",
  },
];

const track = document.getElementById("pqrTrack");
const wrap = document.getElementById("pqrSliderWrap");
let currentIndex = 0;
let isTransitioning = false;
let autoPlayInterval;

// Build the slider
function initSlider() {
  // Clear track
  track.innerHTML = "";

  // Create actual cards
  const allCards = [...testimonials];

  // To create a seamless loop, we'll clone a few cards at the end and beginning
  // For simplicity and safety with 6 cards, we just duplicate the array 3 times
  // This ensures enough buffer for any screen size
  const displayData = [...allCards, ...allCards, ...allCards];

  displayData.forEach((item, index) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "pqr-card-container";

    cardContainer.innerHTML = `
                <div class="pqr-card">
                    <div>
                        <div class="pqr-stars">★★★★★</div>
                        <p class="pqr-text">“ ${item.text} ”</p>
                    </div>
                    <div>
                        <div class="pqr-divider"></div>
                        <div class="pqr-bottom">
                            <div class="pqr-user-info">
                                <img src="${item.avatar}" alt="${item.name}" class="pqr-avatar">
                                <div class="pqr-name-box">
                                    <span class="pqr-name">${item.name}</span>
                                    <span class="pqr-role">${item.role}</span>
                                </div>
                            </div>
                            <div class="pqr-quote">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    track.appendChild(cardContainer);
  });

  // Set initial position to the middle set of cards
  currentIndex = testimonials.length;
  updateSliderPosition(false);
}

function getVisibleCards() {
  if (window.innerWidth >= 1200) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function updateSliderPosition(animate = true) {
  const cardWidth = 100 / getVisibleCards();
  track.style.transition = animate
    ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
    : "none";
  track.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
}

function nextSlide() {
  if (isTransitioning) return;

  currentIndex++;
  updateSliderPosition(true);

  // Check if we need to reset to middle for infinite effect
  if (currentIndex >= testimonials.length * 2) {
    isTransitioning = true;
    setTimeout(() => {
      track.style.transition = "none";
      currentIndex = testimonials.length;
      updateSliderPosition(false);
      isTransitioning = false;
    }, 500);
  }
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 1500);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Event Listeners
window.addEventListener("resize", () => {
  updateSliderPosition(false);
});

wrap.addEventListener("mouseenter", stopAutoPlay);
wrap.addEventListener("mouseleave", startAutoPlay);

// Initialize
initSlider();
startAutoPlay();

window.addEventListener("load", () => {
  if (typeof gsap !== "undefined") {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1.2 },
    });

    // Initial states
    gsap.set(".stu-badge", { opacity: 0, y: -20 });
    gsap.set(".stu-title, .stu-desc, .stu-btn", { opacity: 0, y: 40 });
    gsap.set(".stu-doctors", { opacity: 0, x: 80, scale: 0.95 });
    gsap.set(".stu-feature", { opacity: 0, y: 30 });

    // Animation Sequence
    tl.to(".stu-badge", { opacity: 1, y: 0 })
      .to(".stu-title", { opacity: 1, y: 0 }, "-=0.8")
      .to(".stu-desc", { opacity: 1, y: 0 }, "-=1")
      .to(".stu-btn", { opacity: 1, y: 0 }, "-=1")
      .to(
        ".stu-doctors",
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.5,
        },
        "-=1.5",
      )
      .to(
        ".stu-feature",
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
        },
        "-=1",
      );
  }
});
