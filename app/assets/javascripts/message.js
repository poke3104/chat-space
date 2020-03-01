$(function(){
  function buildHTML(message){
    console.log(message);
    if ( message.image ) {
      var html =
       `<div class="chat-main__message-list__message">
        <p class="chat-main__message-list__name">
          ${message.user.name}
        </p>
        <p class="chat-main__message-list__name_date">
          ${message.created_at}
        </p><p class="chat-main__message-list__messages">
        </p><p class="chat-main__message-list__messages">
          ${message.content}
        </p>
        
        <p></p>
        <p></p>
          <img src=${message.image}>
       </div>`
      return html;
    } else {
      var html =
      `<div class="chat-main__message-list__message">
      <p class="chat-main__message-list__name">
        ${message.user_name}
      </p>
      <p class="chat-main__message-list__name_date">
        ${message.created_at}
      </p><p class="chat-main__message-list__messages">
      </p><p class="chat-main__message-list__messages">
        ${message.content}
      </p>
      
      <p></p>
      <p></p>
     </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
       var html = buildHTML(data);
       $('.chat-main__message-list').append(html);
       $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
       $('.send-line').prop('disabled', false);
       $('.new_message')[0].reset();
     })
     .fail(function(){
       alert('error');
     })
  });
});