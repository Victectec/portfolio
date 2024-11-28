const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${item.src}" alt="${item.alt}">
                </div>
            `;
        document.body.appendChild(modal);

        // Fechar modal
        modal.querySelector('.close').addEventListener('click', () => {
            modal.remove();
        });
    });
});