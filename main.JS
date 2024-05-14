$(document).ready(function(){  
    $('button').click(function(){
  
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const novatarefa = $('#nameTarefa').val()
        const addtarefa = $('<li></li>')
        $(`<p> ${novatarefa}  </p>`).appendTo(addtarefa)
        $(addtarefa).appendTo('ul')
        $('#nameTarefa').val('')

        $(document).ready(function() {
            $('li').click(function() {
            $(this).css('text-decoration', 'line-through');
            
            })    
        })    
    })
})




