const output = document.getElementById("output");

function addLoadingRow() {
  const loadingRow = document.createElement("tr");
  loadingRow.id = "loading-row";
  loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
  output.appendChild(loadingRow);
}

function removeLoadingRow() {
  const loadingRow = document.getElementById("loading-row");
  if (loadingRow) {
    loadingRow.remove();
  }
}
function createRandomPromise(promiseName) {
  return new Promise((resolve) => {
    const timeTaken = (Math.random() * 2 + 1).toFixed(3); 
    setTimeout(() => {
      resolve({ name: promiseName, timeTaken: parseFloat(timeTaken) });
    }, timeTaken * 1000);
  });
}
function addTableRow(promiseName, timeTaken) {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${promiseName}</td><td>${timeTaken.toFixed(3)}</td>`;
  output.appendChild(row);
}


async function main() {
  addLoadingRow(); 


  const promises = [
    createRandomPromise("Promise 1"),
    createRandomPromise("Promise 2"),
    createRandomPromise("Promise 3"),
  ];

  const startTime = performance.now(); 
  const results = await Promise.all(promises); 
  const endTime = performance.now(); 

  removeLoadingRow(); 

  
  results.forEach(({ name, timeTaken }) => addTableRow(name, timeTaken));

  
  const totalTime = (endTime - startTime) / 1000; 
  addTableRow("Total", totalTime);
}


main();
