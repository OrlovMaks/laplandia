const sendReviewButton = document.querySelector('.reviews__send-button')
const reviewInputs = document.querySelectorAll('.reviews__input')
const reviewTextarea = document.querySelector('.reviews__textarea')

const onSendReview = () => {
    reviewInputs.forEach(input => {
        input.value = '';
    })

    reviewTextarea.value = '';
}

sendReviewButton.addEventListener('click', onSendReview)
