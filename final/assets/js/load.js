const redirectTime = 5000; 
const timer = setInterval(() => {
  const counter = document.querySelector('.loading-counter');
  let count = parseInt(counter.textContent);
  if (count < 100) {
    count += 10;
    counter.textContent = `${count}%`;
  } else {
    clearInterval(timer);
	counter.textContent = 'Loading complete!';	
    setTimeout(() => {
      window.location.href = "index.html";
	}, 1000);
  }
}, redirectTime / 10);
