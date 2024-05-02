// Easing function
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  // Initial and end values for counts
  const initialValues = [0, 0, 0, 0];
  const endValues = [50, 4.8, 37, 10000];
  
  // State variables for counts
  let count1 = initialValues[0];
  let count2 = initialValues[1];
  let count3 = initialValues[2];
  let count4 = initialValues[3];
  
  // Function to handle count animation with easing
  const animateCount = () => {
    const duration = 5000; // Duration for all animations (5 seconds)
  
    // Animation loop
    const loop = (startValue, endValue, setter) => {
      const startTime = Date.now(); // Get the start time
  
      // Animation loop
      const animation = () => {
        const currentTime = Date.now(); // Get the current time
        const elapsedTime = currentTime - startTime; // Calculate elapsed time
        const progress = Math.min(1, elapsedTime / duration); // Calculate progress
  
        const easedProgress = easeInOutQuad(progress, 0, 1, 1); // Apply easing function
  
        const newValue = startValue + (endValue - startValue) * easedProgress; // Calculate new value
  
        setter(newValue); // Update the count
  
        // Continue animation if not finished
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };
  
      // Start animation loop
      requestAnimationFrame(animation);
    };
  
    // Start count animations for each div
    loop(initialValues[0], endValues[0], (value) => {
      count1 = value;
      document.getElementById('count1').textContent = Math.round(value) + "+";
    });
    loop(initialValues[1], endValues[1], (value) => {
      count2 = value;
      document.getElementById('count2').textContent = value.toFixed(1) + "/5";
    });
    loop(initialValues[2], endValues[2], (value) => {
      count3 = value;
      document.getElementById('count3').textContent = Math.round(value);
    });
    loop(initialValues[3], endValues[3], (value) => {
      count4 = value;
      document.getElementById('count4').textContent = Math.round(value) + "+";
    });
  };
  
  // Intersection Observer to trigger count animation when element is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start count animations when component is in view
        animateCount();
        observer.unobserve(entry.target); // Stop observing once animation starts
      }
    });
  });
  
  const targetElement = document.querySelector('.our_numbers');
  
  if (targetElement) {
    observer.observe(targetElement);
  }
  


// Logo Slider

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);