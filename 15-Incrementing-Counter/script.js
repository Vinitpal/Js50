const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target"); // used + to change type into int
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1); // keep calling it to get new num at increment
    } else {
      counter.innerText = target; // just in case, it Math.ceil mess up xD
    }
  };

  updateCounter();
});
