const names = ["Fred", "Max", "Carol", "Bob", "Alice", "Luara"];
const jobs = ["Writer", "Teacher", "Programmer", "Butler", "Electritian", "Trainer"];

const freeLanceWriters = [
    {
        name: 'Alice',
        occupation: 'Writer',
        startingPrice: 30,
    },
    {
        name: 'Bob',
        occupation: 'Teacher',
        startingPrice: 50,
    },
    {
        name: 'Carol',
        occupation: 'Programmer',
        startingPrice: 70,
    }
]

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addShapeIntervalId = setInterval(addShape, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
 
  const freelanceWritersEl = document.querySelector("tbody");
  const freelancers = freeLanceWriters.map(writer => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = writer.name;
    const td2 = document.createElement("td");
    td2.textContent = writer.occupation;
    const td3 = document.createElement("td");
    td3.textContent = `$${writer.startingPrice}`;
    tr.append(td1, td2, td3);
    return tr;
  });
  freelanceWritersEl.replaceChildren(...freelancers);
}

/**
 * Add a random shape to the `shapes` array
 */
function addLancers(freelanceWritersEl) {
  const who = names[Math.floor(Math.random() * colors.length)];
  const work = jobs[Math.floor(Math.random() * sizes.length)];

  // TODO: Randomize the size of the shape

  shapes.push({ color, size});

  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
  if (shapes.length === maxShapes){
    clearInterval(addShapeIntervalId);
  }
}