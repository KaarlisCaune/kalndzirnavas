function addListeners() {
  const millstones = document.querySelectorAll(".millstone-item");
  millstones.forEach((millstone) => {
    const observer = new IntersectionObserver(handleScroll(millstone), {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    observer.observe(millstone);
  });
}

function handleScroll(millstone) {
  return function handler(entries) {
    const visiblePercentage =
      (Math.round(entries[0].intersectionRatio * 4) / 4).toFixed(2) * 100;
    millstone.setAttribute('data-visible', visiblePercentage);
  };
}

addListeners();
