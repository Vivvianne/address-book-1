function Contacts(first, last) {
  this.firstName = first;
  this.lastName = last;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    Contact.prototype.fullName = function() {
      return this.firstName + " " + this.lastName;
    }

    var inputedFirstName = $("input#new-first-name").val();
    var inputedLastName = $("input#new-last-name").val();

    var newContacts = new Contacts(inputedFirstName, inputedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContacts.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContacts.firstName);
      $(".first-name").text(newContacts.firstName);
      $(".last-name").text(newContacts.lastName);
    });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});