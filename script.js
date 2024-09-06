document.getElementById('cardForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const userName = document.getElementById('userName').value;
	const profession = document.getElementById('profession').value;
	const photoInput = document.getElementById('photo');
	const photoFile = photoInput.files[0];
            
	if (!userName || !profession || !photoFile) return;

	const reader = new FileReader();
	reader.onload = function(e) {
		const displayCard = document.getElementById('display-card');
		
		const card = document.createElement('div');
		card.className = 'card';

		const img = document.createElement('img');
		img.src = e.target.result; 
		img.alt = "Profile Photo";

		const name = document.createElement('h3');
		name.textContent = userName;

		const job = document.createElement('p');
		job.textContent = profession;

		card.appendChild(img);
		card.appendChild(name);
		card.appendChild(job);
		displayCard.appendChild(card);

		document.getElementById('cardForm').reset();
	};
	reader.readAsDataURL(photoFile);
});