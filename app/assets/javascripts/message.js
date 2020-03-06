$(function(){
  function buildHTML(message){
    if ( message.image) {
      var html =
       `<div class="message" data-message-id= ${message.id}>
        <p class="chat-main__message-list__name">
          ${message.user_name}
        </p>
        <p class="chat-main__message-list__name_date">
          ${message.created_at}
        </p><p class="chat-main__message-list__messages">
        </p><p class="chat-main__message-list__messages">
          ${message.content}
        </p>
        <img src="${message.image}">
       </div>`
      return html;
    } else {
      var html =
      `<div class="message" data-message-id=${message.id}>
      <p class="chat-main__message-list__name">
        ${message.user_name}
      </p>
      <p class="chat-main__message-list__name_date">
        ${message.created_at}
      </p><p class="chat-main__message-list__messages">
      </p><p class="chat-main__message-list__messages">
        ${message.content}
      </p>
     </div>`
      return html;
    };
  }





  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    console.log(formData)
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(message){
       console.log(message)
      var html = buildHTML(message);
        $('.chat-main__message-list').append(html);
       $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
       $('.new_message')[0].reset();
     })
     .fail(function(){
       alert('error');
     })
     .always(function(){
       $('.send-line').prop('disabled',false);
     })
  });




  var reloadMessages = function() {
    var last_message_id = $('.message:last').data("message-id");
    console.log(last_message_id)
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.chat-main__message-list').append(insertHTML);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    // setInterval(reloadMessages, 7000);
  }
});