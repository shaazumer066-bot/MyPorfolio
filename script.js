let change1Text = document.getElementById("change1");
let change2Text = document.getElementById("change2");

const words1 = ["Inspiration", "Intuition", "Ambition", "Imagination", "Curiosity"];
const words2 = ["Intention", "Precision", "Purpose", "Craft", "Clarity"];

let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function changeEffect() 
{
    const currentWord1 = words1[wordIndex];
    const currentWord2 = words2[wordIndex];

    if (isDeleting) 
    {
        characterIndex--;
    }

    else 
    {
        characterIndex++;
    }

    change1Text.textContent = currentWord1.substring(0, characterIndex);
    change2Text.textContent = currentWord2.substring(0, characterIndex);

    let speed = isDeleting ? 60 : 120;

    const longestWord = Math.max(
        currentWord1.length,
        currentWord2.length
    );

    if (!isDeleting && characterIndex === longestWord) 
    {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && characterIndex === 0)
    {
        isDeleting = false;
        wordIndex++;

        if (wordIndex === words1.length)
        {
            wordIndex = 0;
        }

        speed = 500;
    }

    setTimeout(changeEffect, speed);
}

changeEffect();