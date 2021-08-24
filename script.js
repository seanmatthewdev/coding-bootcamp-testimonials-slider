const btnPrev = document.querySelector('#btn_prev');
const btnNext = document.querySelector('#btn_next');
const image = document.querySelector('.carousel-img');

const reviewText = document.querySelector('.review-text');
const authorName = document.querySelector('.author-name');
const authorTitle = document.querySelector('.author-title');

let bit = true;

function changeContent() {
    if (bit) {
        reviewText.textContent = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
        authorName.textContent = 'John Tarkpor';
        authorTitle.textContent = 'Junior Frontend Developer';
        image.src = './images/image-john.jpg';
    } else {
        reviewText.textContent = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”';
        authorName.textContent = 'Tanya Sinclair';
        authorTitle.textContent = 'UX Engineer';
        image.src = './images/image-tanya.jpg';
    }
    bit = !bit;
}

document.addEventListener('keydown', (event) => {
    if (event.which === 37 || event.which === 39) {
        changeContent();
    }
});
btnPrev.addEventListener('click', changeContent);
btnNext.addEventListener('click', changeContent);