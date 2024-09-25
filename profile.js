
function displayProfile() {
    const profileData = JSON.parse(localStorage.getItem('profileData'));

    if (profileData) {
        document.getElementById('profileImage').src = profileData.imgSrc;
        document.getElementById('hovaten').innerText = profileData.hovaten;
        document.getElementById('nghenghiep').innerText += profileData.nghenghiep;
        document.getElementById('diachi').innerText += profileData.diachi;
        document.getElementById('email').innerText += profileData.email;
        document.getElementById('sdt').innerText += profileData.sdt;

        const skillsDiv = document.getElementById('skills');
        skillsDiv.innerHTML = '';

        profileData.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('skill-item');

            // Thêm tên kỹ năng
            const skillName = document.createElement('strong');
            skillName.innerText = skill.skill;
            skillDiv.appendChild(skillName);

            // Tạo thanh tiến trình (progress bar)
            const progressBar = document.createElement('div');
            progressBar.classList.add('progress-bar');

            const progress = document.createElement('div');
            progress.classList.add('progress');
            progress.style.width = skill.level;

            progressBar.appendChild(progress);
            skillDiv.appendChild(progressBar);

            // Phần trăm kỹ năng
            const skillPercentage = document.createElement('span');
            skillPercentage.innerText = skill.level;
            skillPercentage.style.marginLeft = '10px';
            skillDiv.appendChild(skillPercentage);

            skillsDiv.appendChild(skillDiv);
        });
    }
}