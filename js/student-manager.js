// JavaScript source code
AFRAME.registerComponent('student-manager',
{
    init: function( )
    {
        this.el.addEventListener('click', function( evt ){setTriggerFalse(); console.log(this.el.id + ' got clicked'); });
    }
    });

    function setTriggerFalse(){

        var score_text = document.getElementById("score_text")
        var score_text_value = score_text.getAttribute('value');

        var studenttrigger = this.el;




        var student =  document.getElementById("student")
        student.setAttribute("visible", "false");

        studenttrigger.setAttribute("class", "activated_student_trigger"); //student trigger already defined in the init part but maybe let idk
        studenttrigger.setAttribute("visible", "false"); 
        
        console.log('student+studenttrigger deactivated');
        
        score_text.setAttribute("value", (score_text_value) + (-1))
        }
