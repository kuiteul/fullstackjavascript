 $(function(){
    $('#add').hide();
    function listen(e) {
        if(e.keyCode === 13) {
            $('#list').append("<li>"+ $('#input-field').val() +"</li>");
            $('#input-field').hide();
            $('#add').show();
        }
    }

    function addMore(e) {
        $('#add').hide();
        $('#input-field').show();
    }
    $('#input-field').keyup(listen);
    $('#add').click(addMore);
 });