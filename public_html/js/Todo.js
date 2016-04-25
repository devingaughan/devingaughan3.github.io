$(function () {
    var APPLICATION_ID = "8572240B-0E4B-C9FB-FF24-655FDD401400",
        SECRET_KEY = "D0CF89B9-4986-260D-FF0A-DBA66B417900",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
     
    
     
  
     var postsCollection = Backendless.Persistence.of(Posts).find();
   
     console.log(postsCollection);
     
     var wrapper = {
         posts: postsCollection.data
     };
     
     var removeElement = function(params) {
  $("#" + defaults.taskId + params.id).remove();
};
     
     Handlebars.registerHelper('format', function (time) {
         return moment(time).format("dddd, MMMM Do YYYY");
     });
     
     var blogScript = $("#blogs-template").html();
     var blogTemplate = Handlebars.compile(blogScript);
     var blogHTML = blogTemplate(wrapper);
     
     $('.main-container').html(blogHTML);
});



function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}
