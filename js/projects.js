

const filter = document.querySelectorAll('.projectsTable ul');
const eduBtn = document.getElementById('eduBtn');
const compBtn = document.getElementById('compBtn');

const eduTable = document.getElementById('eduTable');
const compTable = document.getElementById('compTable');

eduBtn.addEventListener('click', () => {
    compBtn.classList.remove('activePg');
    compTable.classList.add('hidden');

    eduBtn.classList.add('activePg');
    eduTable.classList.remove('hidden');
});

compBtn.addEventListener('click', () => {
    eduBtn.classList.remove('activePg');
    eduTable.classList.add('hidden');

    compBtn.classList.add('activePg');
    compTable.classList.remove('hidden');
});