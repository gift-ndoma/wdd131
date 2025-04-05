let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("counter").innerHTML = `You've submitted <span class="review-count">${count}</span> reviews.`;