$(document).ready(function(){

  // var source = $("#squeal-template").html();
  // var squeal_template = Handlebars.compile(source);

  var timeline = $.getJSON('https://desolate-mesa-44334.herokuapp.com/squeals')
  .then(function(timeline){
    timeline.forEach(function(squeal){
      $("#squeals").append(
        `
          <div class="media">
            <div class="col-xs-3">
            <h4 class="media-heading">
              ${squeal.user.username}
            </h4>
              <div class="media-left">
                <a href="#">
                  <img class="media-object img-thumbnail" src="${squeal.user.avatar}">
                </a>
              </div>
            </div>
            <div class="col-xs-9">              
              <div class="media-body">
                ${squeal.body}
              </div>
              <p><small>Squealed at: ${moment(squeal.created_at).format('llll')}</small></p>
            </div>
          </div>
        `
      )
    })
  })

  // $("#squeal-template").html(context);
})
