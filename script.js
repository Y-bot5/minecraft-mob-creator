document.getElementById('createMob').addEventListener('click', () => {
  const name = document.getElementById('mobName').value;
  const type = document.getElementById('mobType').value;
  const health = document.getElementById('mobHealth').value;

  const mob = {
    name,
    type,
    health: Number(health)
  };

  document.getElementById('mobOutput').innerText = JSON.stringify(mob, null, 2);
});
