const imagePaths = [
    "assets/images/Bassheads.webp",
    "assets/images/Bassheads1.webp",
    "assets/images/Bassheads2.webp",
    "assets/images/Bassheads3.webp"
  ];
  
  let currentIndex = 0;
  const mainImage = document.getElementById("mainImage");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  
  function updateImage(index) {
    mainImage.style.opacity = 0;
    setTimeout(() => {
      mainImage.src = imagePaths[index];
      mainImage.style.opacity = 1;
    }, 300);
  }
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    updateImage(currentIndex);
  });
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    updateImage(currentIndex);
  });

const toggleBtn = document.getElementById("toggleFormBtn");
    const formContainer = document.getElementById("reviewForm");
    const form = document.getElementById("form");
    const reviewText = document.getElementById("reviewText");
    const reviewsContainer = document.getElementById("reviewsContainer");

    toggleBtn.addEventListener("click", () => {
      formContainer.classList.toggle("hidden");
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const rating = document.querySelector('input[name="rating"]:checked');
      const text = reviewText.value.trim();

      if (!rating || !text) return;

      const reviewDiv = document.createElement("div");
      reviewDiv.className = "review";
      reviewDiv.innerHTML = `<div class="stars">${'★'.repeat(rating.value)}${'☆'.repeat(5 - rating.value)}</div><p>${text}</p>`;
      reviewsContainer.appendChild(reviewDiv);

      form.reset();
      formContainer.classList.add("hidden");
    });


    function updateImage(index) {
        mainImage.classList.remove("fade-in", "slide-in", "zoom-in");
        void mainImage.offsetWidth; 
      
        mainImage.src = imagePaths[index];
      
        mainImage.classList.add("fade-in"); 
    }
    