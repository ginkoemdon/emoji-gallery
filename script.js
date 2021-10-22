const $emojis = document.getElementById('emojis')

// initiaize; test; increment
for (let i = 128010; i < 128110; i++) {
    $emojis.innerHTML += `<div class="emojicontent"><p class="hiemoji">&#${i}</p><h3>${i}</h3></div>`
}

// ====NOTES TO SELF
// Brown static, Blue is dynamic 
// initialize: counting /loop start at first emoji number
// test: emoji code + 100 = i < 
// increment: i++ = how much I want to add to the value (1)each time it goes through
// backticks used to combine a string with variables

//Emoji Code Reference: https://www.w3schools.com/charsets/ref_emoji.asp