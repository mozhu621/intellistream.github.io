<script>
  // Embed the JSON data using Liquid for all categories
  const databases_presentations = {{ site.data.databases_presentations | jsonify }};
  const machine_learning_presentations = {{ site.data.machine_learning_presentations | jsonify }};
  const transactional_stream_processing_presentations = {{ site.data.transactional_stream_processing_presentations | jsonify }};

  // Function to sort and categorize presentations
  function sortAndCategorizePresentations(presentations) {
    const past = [], future = [];
    let next = null;
    const currentDate = new Date();
    presentations.sort((a, b) => new Date(a.date) - new Date(b.date));
    presentations.forEach(presentation => {
      const presentationDate = new Date(presentation.date);
      if (presentationDate < currentDate) {
        past.push(presentation);
      } else if (presentationDate >= currentDate) {
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
    presentations.forEach(presentation => {
      const presentationDiv = `
        <div>
          <h3>${presentation.presenter} will present a ${presentation.paper}</h3>
          <p>Date: ${presentation.date}</p>
          <p>Time: ${presentation.time}</p>
          <p>Link: ${presentation.link}</p>
        </div>
      `;
      element.innerHTML += presentationDiv;
    });
  }

  // Function to display the immediate next presentation
  function displayNextPresentation(presentation, elementId) {
    const element = document.getElementById(elementId);
    const presentationDiv = `
      <div>
        <h3>${presentation.presenter} will present ${presentation.paper}</h3>
        <p>Date: ${presentation.date}</p>
        <p>Time: ${presentation.time}</p>
        <p>Link: ${presentation.link}</p>
      </div>
    `;
    element.innerHTML = presentationDiv;
  }

  // Sort and categorize presentations for each category
  const databases = sortAndCategorizePresentations(databases_presentations);
  const machine_learning = sortAndCategorizePresentations(machine_learning_presentations);
  const transactional_stream_processing = sortAndCategorizePresentations(transactional_stream_processing_presentations);

  // Display past, next, and future presentations for each category
  displayPresentations(databases.past, 'databases_past');
  if (databases.next) {
    displayNextPresentation(databases.next, 'databases_next');
  }
  displayPresentations(databases.future, 'databases_future');

  displayPresentations(machine_learning.past, 'machine_learning_past');
  if (machine_learning.next) {
    displayNextPresentation(machine_learning.next, 'machine_learning_next');
  }
  displayPresentations(machine_learning.future, 'machine_learning_future');

  displayPresentations(transactional_stream_processing.past, 'transactional_stream_processing_past');
  if (transactional_stream_processing.next) {
    displayNextPresentation(transactional_stream_processing.next, 'transactional_stream_processing_next');
  }
  displayPresentations(transactional_stream_processing.future, 'transactional_stream_processing_future');

  // Example function to toggle visibility
  function toggleVisibility(section) {
    var x = document.getElementById(section);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
</script>
