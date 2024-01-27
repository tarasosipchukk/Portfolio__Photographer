

// const faqsCardButtons = document.querySelectorAll('.faqs__hero_group_card_up-button')
// const faqsCardTexts = document.querySelectorAll('.faqs__hero_group_card-text')

// faqsCardButtons.forEach((faqsCardButton, index)=>{
//     faqsCardButton.addListener('click',()=>{
//         faqsCardTexts.forEach((text) =>{
//             text.style.display = 'none';
//         })
//         index = faqsCardButton[i];
//         faqsCardTexts[index].style.display = 'block';
//     })
// })

const faqsCardButtons = document.querySelectorAll('.faqs__hero_group_card_up-button');
const faqsCardTexts = document.querySelectorAll('.faqs__hero_group_card-text');

faqsCardButtons.forEach((faqsCardButton, index) => {
    faqsCardButton.addEventListener('click', () => {
        faqsCardTexts.forEach((text, i) => {
            text.style.display = i === index ? 'block' : 'none';

        });
        faqsCardButton.style.transform = 'rotate(180deg)';
    });
});