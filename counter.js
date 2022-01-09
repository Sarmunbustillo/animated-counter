const getNumber = (counter) => {
  return parseFloat(counter.dataset.countTo);
};
const getSpeed = (counter) => {
  return parseFloat(counter.dataset.duration);
};

const updateTex = (counter, text) => {
  counter.textContent = text;
};

const animate = (counter, countTo, duration) => {
  let startTime = null;

  let currentTime = Date.now();

  const step = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
    }

    const progress = Math.min((currentTime - startTime) / duration, 1);

    const currentNum = Math.floor(progress * countTo);

    updateTex(counter, currentNum);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };

  window.requestAnimationFrame(step);
};

const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  const countTo = getNumber(counter);
  const animationDuration = getSpeed(counter);
  animate(counter, countTo, animationDuration);
});
