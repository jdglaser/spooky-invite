function main() {
  addEventListener("resize", appHeight);
  appHeight();
}

async function playJams() {
  const jams = document.getElementById("jams");
  jams.play();

  const playJamsButton = document.getElementById("playJamsButton");
  playJamsButton.style.display = "none";

  // 7.5s
  const countdownToJams = document.getElementById("countdownToJams");
  countdownToJams.style.display = "inline";
  
  let timeLeft = 7
  countdownToJams.innerHTML = `<h1>${timeLeft+1}</h1><div style="color: white">👻 Volume up! 👻</div>`;
  const jamsTimer = setInterval(function(){
    console.log(timeLeft);
    if(timeLeft <= 0){
      clearInterval(jamsTimer);
      countdownToJams.style.display = "none";
    }

    if (timeLeft % 1 === 0) {
      countdownToJams.innerHTML = `<h1>${timeLeft}</h1><div style="color: white">👻 Volume up! 👻</div>`;
    }
    timeLeft -= 0.5;
  }, 500);

  await sleep(7500);

  const mainContent = document.getElementById("main");
  mainContent.style.display = "flex";

  const dootSkeletons = document.getElementsByClassName("dootSkeletons");
  for (const dootSkeleton of dootSkeletons) {
    console.log(dootSkeleton)
  }
}

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
    return;
  }
  document.addEventListener('DOMContentLoaded', fn);
}

ready(main)