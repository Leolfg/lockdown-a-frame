// JavaScript source code
AFRAME.registerComponent('student-manager',
{
    init: function( )
    {
        studenttrigger = this.el
        studenttrigger.addEventListener('click', function( evt ){test_click()})
    }
    });

    function test_click(){

        var score_text = document.getElementById("score_text")
        var score_text_value = score_text.getAttribute('value');

        if (score_text_value > -1){
        score_text.setAttribute("value", (score_text_value -1))
        }
}