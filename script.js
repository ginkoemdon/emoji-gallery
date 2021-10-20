const $emojis = document.getElementById('emojis')

// initiaize; test; increment
for (let i = 129409; i < 129509; i++) {
    $emojis.innerHTML += `<div class="emojicontent"><p class="hiemoji">&#${i}</p><h3>${i}</h3></div>`
}

// NOTES TO SELF
// backticks used to combine a string with the variables
//brown static, blue is dynamic

// initiaize; test; increment
// counter i = keep track on how many times youve looped 
// initialize : counting /loop start at 0
// test i<100 how many times it will loop the line of code 
// increment: i++ = how much I want to add to the value each time you go through