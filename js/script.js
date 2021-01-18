$(document).ready(function() {

	let col_num = 0;

  let column_task = {

    add_column : function(input){

      let user_input = input;
      col_num = col_num+1;
      var new_col = "<div class=\"col-sm col_added\" id=\"col_count_"+col_num+"\">"
          +"<div class=\"col_header\">"
          +"<button type=\"button\" class=\"pull-left btn btn-primary\" id=\"edit_column_title\"><i class=\"fa fa-edit\" title=\"Edit column title\"></i></button>"
            +"<button type=\"button\" class=\"pull-right btn btn-danger\"id=\"remove_column\"  title=\"Delete column\" ><i class=\"fa fa-trash\"></i></button>"
            +"<h5>"+user_input+"</h5>"
            +"<select class=\"colors\">"
            +"<option value=\"\" selected disable hidden>==Select Color==</option>"
            +"<option>red</option>"
            +"</select></div>"
            +"<ul class=\"todo_list\" id=\"list_todo\"><br></ul>"
            +"<button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block mt-1\" id=\"add_list\">"
            +"<i class=\"fa fa-plus-square\"></i></button></div>"

       $("#rw").append(new_col);
       $(".todo_list").sortable({connectWith:".todo_list"});
       $(".todo_list").disableSelection();
    },

    remove_column : function(delete_col_btn){
      var target_column = $(delete_col_btn).parent().parent();
      target_column.remove();
      col_num = col_num-1;
    },

    add_task : function(add_btn){
      var new_card = "<li><div class=\"card\">"
                    +"<div class=\"card-body\"><p>This is some text within a card body.</p>"
                    +"</div><button class=\"btn btn-primary pull-right\" id=\"user_card\"><i class=\"fa fa-trash\"></i></button></div></li>"
      var $mother =  $(add_btn).parent();
      $($mother).find("ul").append(new_card);

      
    },

    delete_card : function(deleted_task){
      var target_card = $(deleted_task).parent();
      target_card.remove();
    }
  };


	$("#save_column").click(function(){
    if($("#user").val() == ""){
      alert("You must have a 'Title' for your column!");
    }else{
      column_task.add_column($("#user").val());       //add new column
      $("#addColumnModal").modal("hide");
      $("#user").val("");
    }
		 
	});

  $(this).on("click","#edit_column_title",function(){
    let target = $(this);
    var click = false;
    $("#editTitleModal").modal("show");
      $("#edit_column_btn").click(function(){
        click = true;
      });
    if(click == true){
      let new_title = $("#edited_title").val();
      $(target).siblings("h5").text(new_title);
      $("#editTitleModal").modal("hide");
      target.find("h5").prevObject.context.nextSibling.nextSibling.firstChild = new_title;
      click = false;
    }
    // if($("#edited_title").val() == ""){

    // }else{
    //   $(target).siblings("h5").text("aaa");  
    // }
    
    //FIX EDIT !!!!!!!!
      


    // // console.log(target.context.parentElement.childNodes[2].firstChild.data);
    //   $("#edit_column_btn").click(function(){

    //     // if($("#edited_title").val() == ""){
    //     //   alert("Please enter a new title!");
    //     // }else{ 

    //       let new_title = $("#edited_title").val();
    //       console.log(new_title);
    //       target = $(target).siblings("h5").text(new_title);  

    //       //target.context.parentElement.childNodes[2].firstChild.data = new_title;

    //       $("#editTitleModal").modal("hide");
    //       $("#edited_title").val("");
    //     // }
    //  });
  });

	$(".row").on("click","#remove_column",function(){
		column_task.remove_column(this);                  //remove selected column
	});

	$(this).on("click","#add_list",function(){
  		column_task.add_task(this);                      //add new card
  	});
  
  $(this).on("click","#user_card",function(){
      column_task.delete_card(this);
  });

});




   // let $grid = $($mother).find("ul").packery({
      //     itemSelector: 'li',
      //      gutter: 'li',
      //     // percentPosition: true
      // });

      //  var $items = $grid.find('li').draggable();
      //  $grid.packery('bindUIDraggableEvents', $items);



// THE FIRST DRAG AND DROP NEED TO FIX


      // let drag = $($mother).find("ul");
      // $(drag).find("li").draggable({helper: "clone"});
      // $(".todo_list").droppable({
    //      drop: function( event, ui ) {
    //           //$( this )
    //            //.find( "li" ).append(this);
    //           alert(this);
    //       }
    //   });




//FIX DROP!!
	 

  //  // ,appendTo:"body"
  //  var $grid = $('.grid').packery({
  //   itemSelector: '.gridItem',
  //   gutter: '.gridGutter',
  //   percentPosition: true
  // });

  // var $items = $grid.find('.gridItem').draggable();
  // $grid.packery('bindUIDraggableEvents', $items);