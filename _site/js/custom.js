//document.addEventListener("DOMContentLoaded", function() {

    // Function to sort and categorize presentations
    function sortAndCategorizePresentations(presentations) {
      const past = [], future = [];
      let next = null;
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison
      presentations.sort((a, b) => new Date(a.date) - new Date(b.date));
      presentations.forEach(presentation => {
        const presentationDate = new Date(presentation.date);
        presentationDate.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison
        if (presentationDate < currentDate) {
          past.push(presentation);
        } else {
          future.push(presentation);
        }
      });
      if (future.length > 0) {
        next = future.shift();
      }
      return { past, next, future };
    }

    // Function to display presentations
    function displayPresentations(presentations, elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = ''; // Clear existing content    
    presentations.forEach(presentation => {
    const presentationDiv = `
          <div>
            <h3>${presentation.presenter} will present paper titled: ${presentation.paper}</h3>
            <p>Categories: ${presentation.categories.join(', ')}</p>        
            <p>Date: ${presentation.date} (${presentation.day})</p>            
            <p>Time: ${presentation.time}</p>
            <p>Link: <a href="${presentation.link}" target="_blank">Join Zoom Meeting</a></p>
            <p>Slides: <a href="${presentation.slides}" target="_blank">Download Slides</a></p>
            <p>Notes: ${presentation.notes}</p>
          </div>
        `;
        element.innerHTML += presentationDiv;
        });
    }


    // Function to display the immediate next presentation
    function displayNextPresentation(presentation, elementId) {
      const element = document.getElementById(elementId);
      if (!element) {
        console.error(`Element with id ${elementId} not found.`);
        return;
      }

      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // Set time to midnight
      const nextWeekDate = new Date(currentDate);
      nextWeekDate.setDate(currentDate.getDate() + 7); // 7 days from today
      nextWeekDate.setHours(0, 0, 0, 0); // Set time to midnight

      if (presentation) {
        const presentationDate = new Date(presentation.date);
        presentationDate.setHours(0, 0, 0, 0); // Set time to midnight
        if (presentationDate <= nextWeekDate) {
          const categories = presentation.categories ? presentation.categories.join(', ') : 'N/A';
          const presentationDiv = `
          <div>
            <h3>${presentation.presenter} will present paper titled: ${presentation.paper}</h3>
            <p>Categories: ${presentation.categories.join(', ')}</p>        
            <p>Date: ${presentation.date} (${presentation.day})</p>            
            <p>Time: ${presentation.time}</p>
            <p>Link: <a href="${presentation.link}" target="_blank">Join Zoom Meeting</a></p>
            <p>Slides: <a href="${presentation.slides}" target="_blank">Download Slides</a></p>
            <p>Notes: ${presentation.notes}</p>
          </div>
        `;
          element.innerHTML = presentationDiv;
          return;
        }
      }
      element.innerHTML = "No presentation scheduled";
    }


  // Sort and categorize presentations for each category
  const system = sortAndCategorizePresentations(presentations);

  // Display past, next, and future presentations for each category
  displayPresentations(system.past, 'system_past');
  if (system.next) {
    displayNextPresentation(system.next, 'system_next');
  }
  displayPresentations(system.future, 'system_future');

  displayPresentations(machine_learning.past, 'machine_learning_past');
  if (machine_learning.next) {
    displayNextPresentation(machine_learning.next, 'machine_learning_next');
  }
  displayPresentations(machine_learning.future, 'machine_learning_future');

  // Example function to toggle visibility
  function toggleVisibility(section) {
    var x = document.getElementById(section);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

    const all_presentations = [...system_presentations.map(p => ({ ...p, category: 'System' })), ...machine_learning_presentations.map(p => ({ ...p, category: 'Machine Learning' }))];

    const fuse = new Fuse(all_presentations, { keys: ['presenter', 'paper', 'date', 'time', 'categories'], threshold: 0.3 });

function searchPresentations() {
  const query = document.getElementById('search-input').value;
  const results = fuse.search(query).map(result => result.item);
  displayPresentations(results, 'search-results');
}


//});