$('.container').on('submit', function (event) {
    var userText = $('#user-text').val();
    userText = userText.trim();
    var uWords = userText.split(' ');
    var average = 0;
    
    for (var i = 0; i < uWords.length; i++) {
        average += uWords[i].length;
        var word = uWords[i];
        if (word in wordsCount) {
            wordsCount[word] += 1;
        }
        else {
            wordsCount[word] = 1;
        }
        if (wordsCount[word] > maxCount) {
            maxCount = wordsCount[word];
            maxWord = word;
        }
    }
    console.log(maxWord);
    console.log(maxCount);

    $('dl').removeClass('hidden');

    $('.js-totalWords').html(uWords.length);
    $('.js-uniqueWords').html(Object.keys(wordsCount).length)
    $('.js-averageWords').html(average / uWords.length);
    event.preventDefault();
});