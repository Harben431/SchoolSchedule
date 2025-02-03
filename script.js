document.querySelectorAll('td').forEach(item => {
    item.addEventListener('click', function() {
      const subject = item.textContent;
      document.getElementById('lesson-details').textContent = `Details for ${subject} will be available soon.`;
    });
  });
  