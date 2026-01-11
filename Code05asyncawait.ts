function wait(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Execution completed");
    }, 2000);
  });
}

async function runTest() {
  const result = await wait();
  console.log(result);
}

runTest();
