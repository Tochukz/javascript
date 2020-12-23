function scope() {
    if (true) {
      let scopedVal = 'If block';
    }
    console.log(scopedVal); 
}
//scope(); // ReferenceError: scopedVal is not defined

/* Variables declard with the "let" keyword are hoisted just like those decalred with the "var" keyword */ 
{
    function showTime() {
      console.log('Time is ', time);
    }
    let time = Date.now(); // This variable will be moved to the top of this block
    showTime(); // Time is  1606207973937
}
