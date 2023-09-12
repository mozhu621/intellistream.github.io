// Function to toggle visibility
function toggleVisibility(section) {
  var x = document.getElementById(section);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Function to generate presentation HTML
function generatePresentationHTML(presentation) {
  return `
    <div>
      <h3>${presentation.presenter} will present paper titled: ${presentation.paper}</h3>
      <p>Categories: ${presentation.categories.join(', ')}</p>        
      <p>Date: ${presentation.date}</p>
      <p>Time: ${presentation.time}</p>
      <p>Link: <a href="${presentation.link}" target="_blank">Join Zoom Meeting</a></p>
      <p>Slides: <a href="${presentation.slides}" target="_blank">Download Slides</a></p>
    </div>
  `;
}

// Function to display presentations
function displayPresentations(presentations, elementId) {
  const element = document.getElementById(elementId);
  element.innerHTML = presentations.map(generatePresentationHTML).join('');
}

// Function to display the immediate next presentation
function displayNextPresentation(presentation, elementId) {
  const element = document.getElementById(elementId);
  if (presentation) {
    element.innerHTML = generatePresentationHTML(presentation);
  } else {
    element.innerHTML = "No presentation scheduled";
  }
}

// Function to sort and categorize presentations
function sortAndCategorizePresentations(presentations) {
  // ... (same as before)
  return { past, next, future };
}

// Main logic
const categories = ['system', 'machine_learning'];
categories.forEach(category => {
  const sortedPresentations = sortAndCategorizePresentations(window[`${category}_presentations`]);
  displayPresentations(sortedPresentations.past, `${category}_past`);
  displayNextPresentation(sortedPresentations.next, `${category}_next`);
  displayPresentations(sortedPresentations.future, `${category}_future`);
});

// Additional functionalities like search can be added here
const all_presentations = [...system_presentations.map(p => ({ ...p, category: 'System' })), ...machine_learning_presentations.map(p => ({ ...p, category: 'Machine Learning' }))];
const fuse = new Fuse(all_presentations, { keys: ['presenter', 'paper', 'date', 'time', 'categories'], threshold: 0.3 });

function searchPresentations() {
  const query = document.getElementById('search-input').value;
  const results = fuse.search(query).map(result => result.item);
  displayPresentations(results, 'search-results');
}